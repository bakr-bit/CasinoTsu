/**
 * Build Payments Index Script
 * Scans all payment data files and generates the index.ts registry
 *
 * Usage: npx tsx scripts/build-payments-index.ts
 */

import fs from 'fs/promises';
import path from 'path';

const PAYMENT_DATA_DIR = path.join(process.cwd(), 'content', 'data', 'payments');

/**
 * Convert a slug to a valid JavaScript variable name
 * e.g., "bank-transfer" -> "bankTransfer", "j-pay" -> "jPay"
 */
function slugToVarName(slug: string): string {
  // Handle slugs that start with numbers
  let name = slug;
  if (/^\d/.test(name)) {
    name = '_' + name;
  }

  // Convert kebab-case to camelCase
  return name.replace(/-([a-z0-9])/gi, (_, char) => char.toUpperCase());
}

async function buildPaymentsIndex(): Promise<void> {
  console.log('Building payments index...\n');

  // Read all .ts files in the payments directory (excluding types.ts and index.ts)
  const files = await fs.readdir(PAYMENT_DATA_DIR);
  const paymentFiles = files.filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts'
  );

  console.log(`Found ${paymentFiles.length} payment files\n`);

  // Generate imports and registry entries
  const imports: string[] = [];
  const registryEntries: string[] = [];

  for (const file of paymentFiles.sort()) {
    const slug = file.replace('.ts', '');
    const varName = slugToVarName(slug);

    imports.push(`import { ${varName} } from './${slug}';`);

    // If the slug has special characters, we need to quote it in the registry
    if (slug.includes('-') || /^\d/.test(slug)) {
      registryEntries.push(`  '${slug}': ${varName},`);
    } else {
      registryEntries.push(`  ${slug}: ${varName},`);
    }
  }

  // Generate the index.ts content
  const indexContent = `/**
 * Payment Method Data Registry
 * Central hub for all payment method data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:payments-index
 */

import type { PaymentMethodData, PaymentMethodRegistry } from './types';

// Import individual payment data
${imports.join('\n')}

// Re-export types
export type { PaymentMethodData, PaymentMethodRegistry } from './types';

/**
 * Registry of all payment methods indexed by slug
 */
export const paymentsRegistry: PaymentMethodRegistry = {
${registryEntries.join('\n')}
};

/**
 * Get a single payment method by slug
 */
export function getPayment(slug: string): PaymentMethodData | undefined {
  return paymentsRegistry[slug];
}

/**
 * Get all payment methods as an array
 */
export function getAllPayments(): PaymentMethodData[] {
  return Object.values(paymentsRegistry);
}

/**
 * Get all payment method slugs
 */
export function getPaymentSlugs(): string[] {
  return Object.keys(paymentsRegistry);
}

/**
 * Get payment methods by type
 */
export function getPaymentsByType(type: PaymentMethodData['type']): PaymentMethodData[] {
  return getAllPayments().filter((payment) => payment.type === type);
}

/**
 * Get payment methods that support JPY
 */
export function getJPYPayments(): PaymentMethodData[] {
  return getAllPayments().filter((payment) => payment.features.jpySupported);
}

/**
 * Get payment methods that don't require KYC
 */
export function getNoKYCPayments(): PaymentMethodData[] {
  return getAllPayments().filter((payment) => !payment.features.kycRequired);
}
`;

  // Write the generated index.ts
  const indexPath = path.join(PAYMENT_DATA_DIR, 'index.ts');
  await fs.writeFile(indexPath, indexContent);

  console.log(`✅ Generated ${indexPath}`);
  console.log(`   - ${paymentFiles.length} payment methods registered`);
}

buildPaymentsIndex().catch((err) => {
  console.error('Failed to build payments index:', err);
  process.exit(1);
});
