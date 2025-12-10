import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Japanese Casino Guide - New System</h1>
      <p className="text-gray-600 mb-8">
        This is the new content system using MDX + TypeScript data.
      </p>

      <h2 className="text-xl font-semibold mb-4">Available Pages:</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/payment/bitcoin"
            className="text-emerald-600 hover:text-emerald-700 underline"
          >
            /payment/bitcoin - Bitcoin Payment Guide
          </Link>
        </li>
      </ul>
    </main>
  );
}
