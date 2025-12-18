import { Star, TrendingUp, Shield, Gamepad2 } from "lucide-react";
import SectionScaffold from "@/components/shell/SectionScaffold";
import SectionTitle from "@/components/ui/SectionTitle";
import { addInternalLinks } from "@/lib/internal-links";
import { SlotsSEOTags } from "@/lib/schema-slots";

export type SlotCard = {
  name: string;
  href?: string;
  img?: string;
  provider?: string;
  rtp?: string; // e.g., "97%"
  volatility?: string; // e.g., "高"
  maxMultiplier?: string; // e.g., "x25,000"
  rating?: number; // 0-5
  badge?: string;
};

export type SlotsTable = {
  title?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type ProviderPick = {
  name: string;
  description?: string;
  picks?: Array<{ name: string; href?: string; note?: string; minPurchase?: string; maxPurchase?: string }>; // recommended games
};

export type SlotsPageData = {
  title: string;
  banner?: {
    title: string;
    subheading?: string;
    description?: string;
    menu?: Array<{ href: string; label: string; icon?: string }>;
    leftImageSrc?: string;
    rightImageSrc?: string;
    stats?: Array<{ value: string; label: string }>;
  };
  intro?: string;
  lastUpdated?: string;
  // Featured grid of slot cards
  featured?: { title?: string; items: SlotCard[] };
  // Ranked list (e.g., Top 10)
  rankings?: {
    title: string;
    items: Array<{
      rank?: number;
      slot: SlotCard;
      facts?: Array<{ label: string; value: string }>;
      summary?: string;
      cta?: { text: string; href: string };
    }>;
  };
  // Selection criteria bullets
  criteria?: string[];
  // Winning tips section
  winningTips?: {
    title: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  // Detailed game explanations
  gameDetails?: Array<{
    rank: number;
    name: string;
    provider: string;
    rtp: string;
    description: string;
    img?: string; // Path to screenshot image
  }>;
  // Type explanation tables
  tables?: SlotsTable[];
  // Provider highlights with picks
  providers?: ProviderPick[];
  // Tips, pros/cons
  tips?: string[];
  prosCons?: { pros: string[]; cons: string[] };
  // Expert note after rankings
  expertNote?: {
    name: string;
    role?: string;
    content: string;
    imageSrc?: string;
    linkLabel?: string;
    linkHref?: string;
  };
  // Glossary or definitions
  glossary?: SlotsTable;
  // FAQ + CTA
  faq?: Array<{ q: string; a: string }>;
  cta?: { text: string; href: string };
  methodology?: {
    heading: string;
    body: string;
    linkLabel?: string;
    linkHref?: string;
  };
  author?: {
    name: string;
    role?: string;
    description?: string;
    imageSrc?: string;
    linkLabel?: string;
    linkHref?: string;
  };
};

function generateSlotImageName(slotName: string): string {
  // Map specific slot names to their exact filenames in /public/slots/
  const nameMap: { [key: string]: string } = {
    'フルーティー・ビーツ・エクストリーム（Fruity Beats Xtreme!）': 'fruity-beats-extreme',
    'Fruity Beats Xtreme!': 'fruity-beats-extreme',
    'フェアリー・ダスト・エクストリーム（Fairy Dust Xtreme!）': 'fairy-dust-extreme',
    'Fairy Dust Xtreme!': 'fairy-dust-extreme',
    'ブック・オブ・ナインティーンナイン（Book of 99）': 'book-of-99',
    'Book of 99': 'book-of-99',
    'ウッガ・ブッガ（Ugga Bugga）': 'ugga-bugga',
    'Ugga Bugga': 'ugga-bugga',
    'メガ・ジョーカー（Mega Joker）': 'mega-joker',
    'Mega Joker': 'mega-joker',
    'マジック・ガーデン10（Magic Garden 10）': 'magic-garden',
    'Magic Garden 10': 'magic-garden',
    '1429・アンチャーテッド・シーズ（1429 Uncharted Seas）': '1429-uncharted-seas',
    '1429 Uncharted Seas': '1429-uncharted-seas',
    'マーチング・レギオンズ（Marching Legions）': 'marching-legions',
    'Marching Legions': 'marching-legions',
    'アバンダンド・パーク（Abandoned Park）': 'abandoned-park', // Fixed: use correct spelling
    'Abandoned Park': 'abandoned-park',
    'ツイン・ジョーカー（Twin Joker）': 'twin-joker',
    'Twin Joker': 'twin-joker',
    'Sugar Rush 1000': 'sugar-rush-1000',
    'Gates of Olympus 1000': 'gates-of-olympus-1000',
    'Sweet Bonanza 1000': 'sweet-bonanza',
    'Fire in the Hole 2': 'fire-in-the-hole-2',
    'Big Bass Vegas Double Down Deluxe': 'big-bass-vegas-double-down-deluxe',
    'Temple Tumble Megaways': 'temple-tumble-megaways',
    'Honey Rush 100': 'honey-rush-100',
    'Reactoonz': 'reactoonz',
    'Reactoonz 2': 'reactoonz-2',
    'Chaos Crew 2': 'chaos-crew-2',
    'Starburst': 'starburst',
    'Starburst XXXtreme': 'starburst-xxxtreme',
    'Mahjong Ways 2': 'mahjong-ways-2',
    'Maneki 88 Gold': 'maneki-88-gold',
    'Twin Spin Deluxe': 'twin-spin-deluxe'
  };

  return nameMap[slotName] || 'fallback-image';
}

function generateSlotSlug(slotName: string): string {
  return slotName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters but keep spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const items = Array.from({ length: 5 }, (_, i) => (i < full ? 'full' : i === full && half ? 'half' : 'empty'));
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`Rating ${value} of 5`}>
      {items.map((t, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            t === 'full' ? 'text-yellow-500 fill-yellow-500' :
            t === 'half' ? 'text-yellow-500 fill-yellow-500/50' :
            'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function SlotCardItem({ it }: { it: SlotCard }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {it.img ? (
          <img src={it.img} alt={it.name} className="h-12 w-16 rounded object-cover" />
        ) : (
          <div className="h-12 w-16 rounded bg-gray-200" aria-hidden="true" />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <a href={it.href || '#'} className="font-semibold text-gray-900 hover:text-violet-700 truncate">
              {it.name}
            </a>
            {typeof it.rating === 'number' ? <Stars value={it.rating} /> : null}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {it.provider && <span className="font-medium">{it.provider}</span>}
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {it.rtp ? <span className="bg-green-50 border border-green-200 rounded-full px-2 py-1 text-green-700 font-medium">RTP: {it.rtp}</span> : null}
        {it.volatility ? <span className="bg-blue-50 border border-blue-200 rounded-full px-2 py-1 text-blue-700">変動: {it.volatility}</span> : null}
        {it.maxMultiplier ? <span className="bg-blue-50 border border-blue-200 rounded-full px-2 py-1 text-blue-700">最大: {it.maxMultiplier}</span> : null}
      </div>
    </div>
  );
}

export default function SlotsTemplate({ data, canonicalPath }: { data: SlotsPageData; canonicalPath?: string }) {
  const d = data;
  return (
    <>
      {canonicalPath && <SlotsSEOTags data={data} canonicalPath={canonicalPath} />}
      <SectionScaffold title={d.title}>
      <div className="space-y-12">
        {/* Hero Section */}
        {d.banner ? (
          <section className="relative overflow-hidden bg-blue-600">
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Slots Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/30">
                <Gamepad2 className="mr-1 h-4 w-4" />
                スロット
              </span>
            </div>

            <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-20">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                {/* Left Side - Content */}
                <div className="text-white">
                  <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                    {d.banner.title}
                  </h1>
                  {d.banner.subheading && (
                    <p className="text-xl text-blue-100 mb-4">{d.banner.subheading}</p>
                  )}
                  {d.banner.description && (
                    <p className="text-lg text-blue-50 mb-6"
                       dangerouslySetInnerHTML={{ __html: addInternalLinks ? addInternalLinks(d.banner.description, canonicalPath) : d.banner.description }} />
                  )}

                  {d.banner?.stats?.length ? (
                    <div className="grid grid-cols-2 gap-4">
                      {d.banner.stats.map((stat, idx) => (
                        <div key={idx} className="text-center bg-white/10 rounded-lg p-3">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-blue-200">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* Right Side - Slot Emoji */}
                <div className="flex justify-center md:justify-end">
                  <div className="text-[4rem] md:text-[8rem] lg:text-[10rem]">
                    🎰
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {d.intro ? (
          <section className="mx-auto max-w-8xl">
            <div className="rounded-xl bg-blue-50 p-8">
              <div
                className="prose prose-blue mx-auto text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: addInternalLinks ? addInternalLinks(d.intro, canonicalPath) : d.intro }}
              />
              {d.lastUpdated ? (
                <div className="mt-4 text-sm text-blue-700/80 text-right">
                  最終更新日：{d.lastUpdated}
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {d.featured && d.featured.items && d.featured.items.length ? (
          <section>
            {d.featured.title && (
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{d.featured.title}</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.featured.items.map((it, i) => (
                <SlotCardItem key={`${it.name}-${i}`} it={it} />
              ))}
            </div>
          </section>
        ) : null}

{d.expertNote ? (
          <section>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                {d.expertNote.imageSrc ? (
                  <img
                    src={d.expertNote.imageSrc}
                    alt={d.expertNote.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center text-lg">
                    {d.expertNote.name.slice(0, 1)}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{d.expertNote.name}</h3>
                  {d.expertNote.role ? <p className="text-sm text-blue-600 font-semibold">{d.expertNote.role}</p> : null}
                </div>
              </div>
              <div
                className="prose prose-blue max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: addInternalLinks ? addInternalLinks(d.expertNote.content, canonicalPath) : d.expertNote.content }}
              />
              {d.expertNote.linkHref && d.expertNote.linkLabel ? (
                <a
                  href={d.expertNote.linkHref}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors mt-4"
                >
                  {d.expertNote.linkLabel}
                  <TrendingUp className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </section>
        ) : null}

        {d.glossary ? (
          <section>
            <SectionTitle title={d.glossary.title || "用語集"} as="h2" />
            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    {d.glossary.columns.map((c, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {d.glossary.rows.map((r, i) => (
                    <tr key={i}>
                      {r.map((cell, j) => (
                        <td key={j} className="px-4 py-2 text-gray-800">
                          {j === 0 ? <span className="font-semibold text-gray-900">{cell}</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {d.glossary.caption ? <p className="text-xs text-gray-600">{d.glossary.caption}</p> : null}
          </section>
        ) : null}

        {d.rankings && d.rankings.items && d.rankings.items.length ? (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{d.rankings.title}</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-sky-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-gray-800 w-20">順位</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-800">スロット名</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-800">プロバイダー</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-800">RTP</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-800">ボラ</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-800">評価</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-800">特徴</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-800 w-32">プレイ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {d.rankings.items.map((r, i) => {
                      const rank = r.rank ?? i + 1;
                      const isTop3 = rank <= 3;
                      const medalColor =
                        rank === 1 ? 'from-yellow-400 to-yellow-600' : // Gold
                        rank === 2 ? 'from-gray-300 to-gray-500' :     // Silver
                        rank === 3 ? 'from-amber-600 to-amber-800' :   // Bronze
                        'bg-blue-600';                 // Default

                      return (
                        <tr key={i} className={`hover:bg-blue-50/50 transition-colors ${isTop3 ? 'bg-gradient-to-r from-yellow-50/30 to-amber-50/30' : ''}`}>
                          <td className="px-6 py-4">
                            <div className={`w-10 h-10 ${medalColor === 'bg-blue-600' ? 'bg-blue-600' : `bg-gradient-to-br ${medalColor}`} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                              {rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={r.slot.img || `/slots/${generateSlotImageName(r.slot.name)}-sqr.png`}
                                alt={r.slot.name}
                                className="h-12 w-12 rounded-lg object-cover border border-gray-200 shadow-sm"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {r.slot.href ? (
                                    <a href={r.slot.href} className="hover:text-violet-700">
                                      {r.slot.name}
                                    </a>
                                  ) : (
                                    r.slot.name
                                  )}
                                </div>
                                {r.slot.maxMultiplier && (
                                  <div className="text-sm text-blue-600 font-medium">最大 {r.slot.maxMultiplier}</div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={`/providers/${r.slot.provider?.toLowerCase().replace(/['']/g, '-').replace(/\s+/g, '-').replace(/[()]/g, '').replace(/--/g, '-')}`}
                              className="font-medium text-blue-700 hover:text-blue-900 hover:underline"
                            >
                              {r.slot.provider}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center rounded-full bg-blue-800 px-3 py-1 text-sm font-semibold text-white">
                              {r.slot.rtp}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                              r.slot.volatility === '高' ? 'bg-red-100 text-red-800' :
                              r.slot.volatility === '中' ? 'bg-yellow-100 text-yellow-800' :
                              r.slot.volatility === '低' || r.slot.volatility?.includes('低') ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {r.slot.volatility}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {typeof r.slot.rating === 'number' && <Stars value={r.slot.rating} />}
                          </td>
                          <td className="px-6 py-4">
                            <div className="max-w-xs">
                              <div className="text-sm text-gray-700 leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: r.summary || '' }} />
                              {r.facts && r.facts.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {r.facts.slice(0, 2).map((f, j) => (
                                    <span key={j} className="inline-block text-xs bg-blue-50 text-blue-700 rounded px-2 py-1">
                                      {f.label}: {f.value}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href="https://go.casinotsu.com/go/vera-john"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                              title="今すぐプレイ"
                            >
                              ▶️
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

      


        {d.gameDetails && d.gameDetails.length ? (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">おすすめスロット</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {d.gameDetails.map((game, i) => (
                <article key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Header Section */}
                  <div className="bg-sky-50 p-4">
                    <div className="flex items-center gap-4 text-gray-800">
                      {/* Rank Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <span className="text-xl font-bold text-gray-800">#{game.rank}</span>
                        </div>
                      </div>

                      {/* Game Title & Provider */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">
                          <a
                            href={`/slots/${generateSlotSlug(game.name)}`}
                            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
                          >
                            {game.name}
                          </a>
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-600">by</span>
                            <a
                            href={`/providers/${game.provider.toLowerCase().replace(/['']/g, '-').replace(/\s+/g, '-').replace(/[()]/g, '').replace(/--/g, '-')}`}
                            className="bg-gray-800/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold border border-gray-300 hover:bg-gray-800/20 transition-colors duration-200 text-gray-700"
                          >
                            {game.provider}
                          </a>
                        </div>
                      </div>

                      {/* RTP Badge */}
                      <div className="flex-shrink-0">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                          RTP {game.rtp}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Screenshot/Logo */}
                      <div className="flex-shrink-0">
                        <a
                          href={`/slots/${generateSlotSlug(game.name)}`}
                          className="block hover:opacity-80 transition-opacity duration-200"
                        >
                          <img
                            src={game.img || `/slots/${generateSlotImageName(game.name)}.png`}
                            alt={`${game.name} スクリーンショット`}
                            className="w-60 h-40 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
                          />
                        </a>

                        {/* CTA Button */}
                        <div className="mt-4">
                          <a
                            href="https://go.casinotsu.com/go/vera-john"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg w-full justify-center"
                          >
                            今すぐプレイ
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-7 4h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="flex-1">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <img
                              src={d.author?.imageSrc || "/rina/avatar.png"}
                              alt={d.author?.name || "Expert"}
                              className="w-8 h-8 rounded-full object-cover border border-blue-200"
                            />
                            <div className="text-blue-700 font-semibold text-sm">
                              <a href={d.author?.linkHref || "/authors/rina-okabe"} className="hover:underline">
                                {d.author?.name || "専門家"}
                              </a>
                              のレビュー
                            </div>
                          </div>
                          <div
                            className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: game.description }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {d.tables && d.tables.length
          ? d.tables.map((t, idx) => (
              <section key={idx}>
                {t.title && (
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                  </div>
                )}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gradient-to-r from-blue-50 to-sky-50">
                        <tr>
                          {t.columns.map((c, i) => (
                            <th key={i} className="px-6 py-4 text-left font-bold text-gray-900">
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {t.rows
                          .map(row =>
                            row.map(cell =>
                              cell.includes("<") ? cell : addInternalLinks(cell, canonicalPath)
                            )
                          )
                          .map((r, i) => (
                          <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                            {r.map((cell, j) => (
                              <td key={j} className="px-6 py-4 text-gray-800">
                                {j === 0 ? (
                                  <div
                                    className="font-semibold text-blue-900"
                                    dangerouslySetInnerHTML={{ __html: cell }}
                                  />
                                ) : (
                                  <div dangerouslySetInnerHTML={{ __html: cell }} />
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {t.caption ? (
                  <p className="text-sm text-gray-600 text-center mt-3 italic">{t.caption}</p>
                ) : null}
              </section>
            ))
          : null}

        {d.providers && d.providers.length ? (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">おすすめプロバイダー</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {d.providers.map((p, i) => (
                <div key={i} className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-gray-200 flex items-center justify-center">
                      <img
                        src={`/assets/provider/${(p.name?.includes('／') ? p.name.split('／')[1] : p.name)?.trim().toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-').replace(/[()]/g, '').replace('big-time-gaming', 'big-time-gaming').replace('relax-gaming', 'relax')}.png`}
                        alt={`${p.name} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-blue-700 hover:text-blue-900">
                      <a
                        href={`/providers/${(p.name?.includes('／') ? p.name.split('／')[1] : p.name)?.trim().toLowerCase().replace(/['']/g, '-').replace(/\s+/g, '-').replace(/[()]/g, '').replace(/--/g, '-')}`}
                        className="hover:underline"
                      >
                        {p.name}
                      </a>
                    </h3>
                  </div>
                  {p.description ? (
                    <p className="text-gray-700 leading-relaxed mb-4">{p.description}</p>
                  ) : null}
                  {p.picks && p.picks.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">代表作</h4>
                      <div className="space-y-2">
                        {p.picks.map((g, j) => (
                          <div key={j} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                            {g.href ? (
                              <a href={g.href} className="text-sm font-medium text-blue-700 hover:underline">
                                {g.name}
                              </a>
                            ) : (
                              <span className="text-sm font-medium text-gray-900">{g.name}</span>
                            )}
                            {g.note ? (
                              <span className="text-xs text-green-600 bg-green-50 rounded-full px-2 py-1">{g.note}</span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {d.tips && d.tips.length ? (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">ヒント・注意点</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
                <h3 className="text-lg font-bold text-amber-800">重要なポイント</h3>
              </div>
              <ul className="space-y-4">
                {d.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="h-3.5 w-3.5 text-white fill-white" />
                    </div>
                    <span className="text-amber-900 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {d.prosCons ? (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">メリット・デメリット</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-bold text-green-800">メリット</h3>
                </div>
                <ul className="space-y-3">
                  {d.prosCons.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="h-3 w-3 text-white fill-white" />
                      </div>
                      <span className="text-green-800 leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-red-50 to-pink-50 p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-bold text-red-800">デメリット</h3>
                </div>
                <ul className="space-y-3">
                  {d.prosCons.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="h-3 w-3 text-white fill-white" />
                      </div>
                      <span className="text-red-800 leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {d.faq && d.faq.length ? (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">よくある質問</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden">
              {d.faq.map((qa, i) => (
                <details key={i} className="group">
                  <summary className="list-none cursor-pointer select-none px-6 py-5 flex items-center justify-between gap-4 hover:bg-blue-50/50 transition-colors">
                    <span className="font-semibold text-gray-900 group-open:text-blue-600">{qa.q}</span>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-4 w-4 text-blue-600 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-5 bg-blue-50/30">
                    <p className="text-gray-800 leading-relaxed">{qa.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {d.methodology || d.author ? (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {d.methodology ? (
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{d.methodology.heading}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{d.methodology.body}</p>
                  {d.methodology.linkHref && d.methodology.linkLabel ? (
                    <a
                      href={d.methodology.linkHref}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      {d.methodology.linkLabel}
                      <TrendingUp className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              ) : null}

              {d.author ? (
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    {d.author.imageSrc ? (
                      <img
                        src={d.author.imageSrc}
                        alt={d.author.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-semibold">
                        {d.author.name.slice(0, 1)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{d.author.name}</h3>
                      {d.author.role ? <p className="text-blue-600 text-sm font-semibold">{d.author.role}</p> : null}
                    </div>
                  </div>
                  {d.author.description ? (
                    <div
                      className="prose prose-blue max-w-none text-gray-700 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: addInternalLinks ? addInternalLinks(d.author.description, canonicalPath) : d.author.description }}
                    />
                  ) : null}
                  {d.author.linkHref && d.author.linkLabel ? (
                    <a
                      href={d.author.linkHref}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      {d.author.linkLabel}
                      <TrendingUp className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

 

        {d.cta ? (
          <section>
            <div className="relative overflow-hidden bg-blue-600 rounded-2xl p-8 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">{d.cta.text}</h3>
                <a
                  href={d.cta.href}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                >
                  今すぐ始める
                  <TrendingUp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>
        ) : null}
      </div>


      {/* 責任あるギャンブル啓発テキスト */}
      <div className="mt-12 mb-8 max-w-8xl mx-auto">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm text-center">
          <h4 className="text-lg font-bold text-yellow-700 mb-2">⚠️ 責任あるギャンブルの推奨 ⚠️</h4>
          <p className="text-gray-800 text-sm leading-relaxed">
            オンラインカジノやスロットは、あくまで娯楽としてお楽しみください。<br />
            <span className="font-semibold">「余裕資金の範囲内でプレイし、のめり込みすぎない」</span>ことが大切です。<br />
            万が一、ギャンブルによる問題や不安を感じた場合は、<a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">専門機関</a>への相談もご検討ください。
          </p>
        </div>
      </div>


    </SectionScaffold>
    </>
  );

      
}
