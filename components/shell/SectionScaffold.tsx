import SectionTitle from "@/components/ui/SectionTitle";
import { ReactNode } from "react";

type CTA = { label: string; href: string };
type Featured = { href: string; logo?: string; text: string };

type SectionScaffoldProps = {
  title: string;
  subtitle?: string;
  topBannerCta?: CTA;
  featuredItems?: Featured[];
  children?: ReactNode;
  showHeader?: boolean; // controls the big page title header (default: false)
};

const defaultFeatured: Featured[] = [
  { href: "/reviews", logo: "", text: "🎉 Wonder Casino: 入金不要特典" },
  { href: "/bonuses/no-wagering", logo: "", text: "🔥 ノーウェージャーボーナス特集" },
  { href: "/payment/bitcoin", logo: "", text: "⚡ Bitcoin: 高速入出金" },
];

export default function SectionScaffold({
  title,
  subtitle,
  topBannerCta = { label: "詳細を見る", href: "/offers" },
  featuredItems = defaultFeatured,
  children,
  showHeader = false,
}: SectionScaffoldProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero header */}
      {showHeader ? (
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 pt-8 pb-6 relative">
            <div className="rounded-2xl border bg-white/70 backdrop-blur shadow-sm px-6 py-6">
              <SectionTitle
                subtitle={subtitle}
                title={title}
                as="h1"
                align="start"
                titleClassName="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
                subtitleClassName="text-red-600 font-bold text-xs md:text-sm"
              />
            </div>
          </div>
        </section>
      ) : null}

      <main className="container mx-auto px-4 pb-10">
        {children ? <div className="mt-2 md:mt-4">{children}</div> : null}
      </main>
    </div>
  );
}
