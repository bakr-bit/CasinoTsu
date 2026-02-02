import { HeroSection } from '@/src/components/sections/hero-section';
import { CasinoListingSection } from '@/src/components/sections/casino-listing-section';
import { TopReviewsSection } from '@/src/components/sections/top-reviews-section';
import { CategoryPicksSection } from '@/src/components/sections/category-picks-section';
import { MethodologySection } from '@/src/components/sections/methodology-section';
import { BonusComparisonSection } from '@/src/components/sections/bonus-comparison-section';
import { PaymentMethodsSection } from '@/src/components/sections/payment-methods-section';
import { GameCategoriesSection } from '@/src/components/sections/game-categories-section';
import { ProvidersSection } from '@/src/components/sections/providers-section';
import { MobileCasinoSection } from '@/src/components/sections/mobile-casino-section';
import { ProsConsSection } from '@/src/components/sections/pros-cons-section';
import { SafePlaySection } from '@/src/components/sections/safe-play-section';
import { FAQSection } from '@/src/components/sections/faq-section';
import { ResponsibleGamingSection } from '@/src/components/sections/responsible-gaming-section';
import { StickyToc } from '@/src/components/shared/sticky-toc';
import { tocItems, faqItems } from '@/src/data/content';

export default function Home() {
  // Map faqItems to the format expected by FAQSection
  const homeFaqs = faqItems.map((item, index) => ({
    id: `faq-${index + 1}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <article className="bg-white">
      <HeroSection
        title="オンラインカジノランキング"
        subtitle="日本人プレイヤー向けの厳選されたオンラインカジノをご紹介。ボーナス、安全性、入出金方法を徹底比較。"
        showTop3={true}
      />

      <StickyToc items={tocItems} />

      <CasinoListingSection
        title="トップ20オンラインカジノ"
        count={20}
      />

      <TopReviewsSection />

      <CategoryPicksSection />

      <MethodologySection />

      <BonusComparisonSection />

      <PaymentMethodsSection />

      <GameCategoriesSection />

      <ProvidersSection />

      <MobileCasinoSection />

      <ProsConsSection />

      <SafePlaySection />

      <FAQSection
        title="よくある質問"
        subtitle="オンラインカジノについてよく寄せられる質問にお答えします。"
        items={homeFaqs}
      />

      <ResponsibleGamingSection />
    </article>
  );
}
