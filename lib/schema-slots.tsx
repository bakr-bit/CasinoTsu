import React from "react";
import { SlotsPageData } from "@/components/templates/SlotsTemplate";

/**
 * Generates JSON-LD structured data for slots category pages
 * Following schema.org standards for ItemList, FAQPage, Game, and Offer schemas
 */
export function generateSlotsSchema(data: SlotsPageData, canonicalPath: string): object {
  const baseUrl = "https://casinotsu.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;

  // Main ItemList schema for slot rankings
  const itemListSchema = data.rankings ? {
    "@type": "ItemList",
    "@id": `${fullUrl}#rankings`,
    name: data.rankings.title,
    description: data.intro || `${data.rankings.title}の詳細情報`,
    numberOfItems: data.rankings.items.length,
    itemListElement: data.rankings.items.map((item, index) => ({
      "@type": "ListItem",
      position: item.rank || index + 1,
      item: {
        "@type": "Game",
        "@id": item.slot.href ? `${baseUrl}${item.slot.href}` : `${fullUrl}#slot-${index}`,
        name: item.slot.name,
        gameLocation: item.slot.href ? `${baseUrl}${item.slot.href}` : undefined,
        description: item.summary || `${item.slot.name}の詳細情報とRTP情報`,
        provider: item.slot.provider ? {
          "@type": "Organization",
          name: item.slot.provider
        } : undefined,
        aggregateRating: item.slot.rating ? {
          "@type": "AggregateRating",
          ratingValue: item.slot.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 1
        } : undefined,
        additionalProperty: [
          ...(item.slot.rtp ? [{
            "@type": "PropertyValue",
            name: "RTP",
            value: item.slot.rtp,
            description: "Return to Player percentage"
          }] : []),
          ...(item.slot.volatility ? [{
            "@type": "PropertyValue",
            name: "Volatility",
            value: item.slot.volatility,
            description: "Game volatility level"
          }] : []),
          ...(item.slot.maxMultiplier ? [{
            "@type": "PropertyValue",
            name: "Max Multiplier",
            value: item.slot.maxMultiplier,
            description: "Maximum win multiplier"
          }] : [])
        ].filter(Boolean)
      }
    }))
  } : null;

  // Featured games schema
  const featuredGamesSchema = data.featured ? {
    "@type": "ItemList",
    "@id": `${fullUrl}#featured`,
    name: data.featured.title || "おすすめスロットゲーム",
    description: "厳選された高品質なスロットゲーム",
    numberOfItems: data.featured.items.length,
    itemListElement: data.featured.items.map((slot, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Game",
        "@id": slot.href ? `${baseUrl}${slot.href}` : `${fullUrl}#featured-${index}`,
        name: slot.name,
        gameLocation: slot.href ? `${baseUrl}${slot.href}` : undefined,
        provider: slot.provider ? {
          "@type": "Organization",
          name: slot.provider
        } : undefined,
        aggregateRating: slot.rating ? {
          "@type": "AggregateRating",
          ratingValue: slot.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 1
        } : undefined,
        additionalProperty: [
          ...(slot.rtp ? [{
            "@type": "PropertyValue",
            name: "RTP",
            value: slot.rtp
          }] : []),
          ...(slot.volatility ? [{
            "@type": "PropertyValue",
            name: "Volatility",
            value: slot.volatility
          }] : [])
        ].filter(Boolean)
      }
    }))
  } : null;

  // Author schema for the review author
  const authorSchema = {
    "@type": "Person",
    "@id": `${baseUrl}/authors/hiroshi`,
    name: "Hiroshi",
    description: "6年間で80以上のカジノを実際にプレイして検証した経験豊富な専門家",
    jobTitle: "カジノ専門家・レビュアー",
    affiliation: {
      "@type": "Organization",
      name: "CasinoTsu",
      url: baseUrl
    },
    url: `${baseUrl}/authors/hiroshi`,
    sameAs: [
      `${baseUrl}/authors/hiroshi`
    ]
  };

  // FAQ schema if FAQs exist
  const faqSchema = data.faq && data.faq.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${fullUrl}#faq`,
    mainEntity: data.faq.map(qa => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.a
      }
    }))
  } : null;

  // CasinoTsu organization schema (only organization)
  const casinoTsuOrgSchema = {
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "CasinoTsu",
    url: baseUrl,
    description: "日本のオンラインカジノ情報サイト",
    logo: `${baseUrl}/images/logo.png`,
    sameAs: [
      baseUrl
    ]
  };

  // Website schema for the page itself
  const webPageSchema = {
    "@type": "WebPage",
    "@id": fullUrl,
    url: fullUrl,
    name: data.title,
    description: data.intro || data.banner?.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      name: "CasinoTsu",
      url: baseUrl,
      description: "日本のオンラインカジノ情報サイト"
    },
    mainEntity: itemListSchema ? {
      "@id": `${fullUrl}#rankings`
    } : featuredGamesSchema ? {
      "@id": `${fullUrl}#featured`
    } : undefined,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "スロット",
          item: `${baseUrl}/slots`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.banner?.title || data.title,
          item: fullUrl
        }
      ]
    },
    about: data.rankings ? {
      "@id": `${fullUrl}#rankings`
    } : undefined
  };

  // Compile all schemas
  const schemas = [
    webPageSchema,
    authorSchema,
    casinoTsuOrgSchema,
    ...(itemListSchema ? [itemListSchema] : []),
    ...(featuredGamesSchema ? [featuredGamesSchema] : []),
    ...(faqSchema ? [faqSchema] : [])
  ].filter(Boolean);

  // Return as JSON-LD structure
  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}

/**
 * Generates SEO title for slots pages
 */
export function generateSlotsTitle(data: SlotsPageData): string {
  if (data.banner?.title) {
    return data.banner.title.includes('CasinoTsu')
      ? data.banner.title
      : `${data.banner.title} | CasinoTsu`;
  }

  return data.title.includes('CasinoTsu')
    ? data.title
    : `${data.title} | CasinoTsu`;
}

/**
 * Generates SEO meta description for slots pages
 */
export function generateSlotsDescription(data: SlotsPageData): string {
  // Use banner description if available
  if (data.banner?.description) {
    return data.banner.description.length > 160
      ? data.banner.description.substring(0, 157) + '...'
      : data.banner.description;
  }

  // Use intro if available
  if (data.intro) {
    return data.intro.length > 160
      ? data.intro.substring(0, 157) + '...'
      : data.intro;
  }

  // Generate fallback description based on content
  let description = "CasinoTsuが厳選した高RTPスロットの詳細情報。";

  if (data.rankings && data.rankings.items.length > 0) {
    description += `トップ${data.rankings.items.length}のおすすめスロットゲーム、`;
  }

  if (data.providers && data.providers.length > 0) {
    description += `信頼できるプロバイダー情報、`;
  }

  description += "プレイのコツと注意点を詳しく解説。";

  return description.length > 160
    ? description.substring(0, 157) + '...'
    : description;
}

/**
 * Generates the script tag for JSON-LD structured data
 */
export function SlotsSchemaScript({ data, canonicalPath }: { data: SlotsPageData; canonicalPath: string }) {
  const schema = generateSlotsSchema(data, canonicalPath);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0)
      }}
    />
  );
}

/**
 * Generates Next.js metadata object for slots pages
 */
export function generateSlotsMetadata(data: SlotsPageData, canonicalPath: string) {
  const baseUrl = "https://casinotsu.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const title = generateSlotsTitle(data);
  const description = generateSlotsDescription(data);

  // Generate keywords based on content
  let keywords = "スロット, オンラインカジノ, RTP, 還元率, CasinoTsu";

  if (data.providers) {
    const providerNames = data.providers.map(p => p.provider).join(", ");
    keywords += `, ${providerNames}`;
  }

  if (data.rankings && data.rankings.items.length > 0) {
    keywords += ", ランキング, おすすめ, 高RTP";
  }

  return {
    title,
    description,
    keywords,
    robots: "index, follow",
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "article",
      siteName: "CasinoTsu",
      images: data.banner?.leftImageSrc ? [{
        url: `${baseUrl}${data.banner.leftImageSrc}`,
        alt: data.banner.title || data.title
      }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.banner?.leftImageSrc ? [`${baseUrl}${data.banner.leftImageSrc}`] : undefined,
    },
  };
}

/**
 * Generates all SEO meta tags for slots pages (Component version for head injection)
 */
export function SlotsSEOTags({ data, canonicalPath }: { data: SlotsPageData; canonicalPath: string }) {
  return (
    <>
      {/* JSON-LD Schema */}
      <SlotsSchemaScript data={data} canonicalPath={canonicalPath} />
    </>
  );
}