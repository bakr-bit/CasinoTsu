# CasinoTsu Site Improvement Plan

Based on competitive analysis of japanesecasino.com top 50 pages by traffic.

---

## Executive Summary

- **41 of 50** competitor top URLs exist locally
- **9 URLs missing** = 8,306 monthly traffic opportunity
- **Bettilt review removed** (casino withdrew from Japan in 2021)
- **Local content quality is generally BETTER** than competitor
- **Main gaps:** Missing pages + some pillar page content

---

## Priority 1: Create Missing High-Traffic Pages

### Total Traffic Opportunity: 8,306/month

| Priority | URL | Traffic | Content Type | Effort |
|----------|-----|---------|--------------|--------|
| **P1** | /new-casinos | 3,643 | Category page | Medium |
| **P2** | /reviews/simple-casino | 1,909 | Casino review | Medium |
| **P3** | /casino-apps | 586 | Guide page | Medium |
| **P4** | /free-spins | 569 | Bonus category | Medium |
| **P5** | /mobile | 533 | Guide page | Medium |
| **P6** | /reviews/lucky-niki | 347 | Casino review | Medium |
| **P7** | /reviews/slotty-vegas | 302 | Casino review | Medium |
| **P8** | /reviews/king-billy | 292 | Casino review | Medium |
| **P9** | /reviews/kakerin | 216 | Casino review | Medium |

### Recommended Actions:

#### 1. /new-casinos (3,643 traffic) - HIGH PRIORITY
**Create:** New category page listing recently launched casinos
**Content needed:**
- content/mdx/new-casinos.mdx (pillar content)
- app/new-casinos/page.tsx
- Filter/sort by launch date
- Highlight newest casino bonuses

#### 2. /reviews/simple-casino (1,909 traffic)
**Create:** Full casino review
**Files needed:**
- content/mdx/reviews/simple-casino.mdx
- content/data/casinos/simple-casino.ts
- app/reviews/simple-casino/page.tsx

#### 3. /casino-apps (586 traffic)
**Create:** Guide about mobile casino apps
**Content needed:**
- content/mdx/guides/casino-apps.mdx OR content/mdx/mobile/casino-apps.mdx
- app/casino-apps/page.tsx
- Cover: iOS apps, Android apps, best mobile casinos

#### 4. /free-spins (569 traffic)
**Create:** Bonus category page for free spin offers
**Files needed:**
- content/mdx/bonuses/free-spins.mdx
- app/free-spins/page.tsx (or redirect to /bonuses/free-spins)

#### 5. /mobile (533 traffic)
**Create:** Mobile casino guide
**Files needed:**
- content/mdx/guides/mobile.mdx OR content/mdx/mobile/mobile.mdx
- app/mobile/page.tsx
- Cover: Mobile gaming, responsive casinos, apps

#### 6-9. Missing Casino Reviews
**Create standard reviews for:**
- /reviews/lucky-niki (347)
- /reviews/slotty-vegas (302)
- /reviews/king-billy (292)
- /reviews/kakerin (216)

---

## Priority 2: Add Missing Pillar Page Content

These category pages exist but may lack comprehensive MDX content.

| Page | Traffic | Status | Action Needed |
|------|---------|--------|---------------|
| /baccarat | 1,226 | Has subpages only | Create main baccarat.mdx pillar content |
| /blackjack | 520 | Has subpages only | Create main blackjack.mdx pillar content |
| /bonuses | 674 | Has bonuses.mdx | Verify content quality |
| /payment | 815 | Has payment.mdx | Verify content quality |
| /live-casino | 255 | No main MDX | Create live-casino.mdx pillar content |

### Recommended Actions:

#### 1. Create /baccarat pillar content
**File:** content/mdx/baccarat/baccarat.mdx
**Content structure:**
- What is baccarat
- Basic rules overview
- Types of baccarat
- Recommended casinos for baccarat
- Links to subpages (rules, strategy, variants, squeeze)
- FAQ section

#### 2. Create /blackjack pillar content
**File:** content/mdx/blackjack/blackjack.mdx
**Content structure:**
- What is blackjack
- Basic rules overview
- Blackjack variants
- Recommended casinos
- Links to subpages (rules, strategy, variants, free)
- FAQ section

#### 3. Create /live-casino pillar content
**File:** content/mdx/live-casino/live-casino.mdx
**Content structure:**
- What is live casino
- Live casino providers (Evolution, Pragmatic, etc.)
- Game types (live baccarat, blackjack, roulette, poker)
- Recommended live casino sites
- Links to subpages
- FAQ section

---

## Priority 3: Content Quality Review

Pages that exist but should be verified for quality/completeness:

| Page | Traffic | Current Status | Recommendation |
|------|---------|----------------|----------------|
| /bonuses | 674 | Has content | Review vs competitor |
| /payment | 815 | Has content | Review vs competitor |
| /payment/venuspoint | 827 | Has content | Verify up-to-date |
| /guides/popular-casino-games-strategies | 671 | Has content | Verify completeness |
| /guides/free-casino-games | 663 | Has content | Verify completeness |
| /info/money-list | 473 | Has content | Verify up-to-date |
| /guides/wagering-requirements | 435 | Has content | Verify completeness |
| /offers/intercasino-welcome-offer | 412 | Has content | Verify offer is current |
| /guides/casino-best-game-odds | 369 | Has content | Verify completeness |
| /baccarat/rules | 349 | Has content | Verify vs competitor |
| /payment/japanese-yen-casinos | 335 | Has content | Verify completeness |
| /guides/high-roller | 284 | Has content | Verify completeness |
| /info/casino-license | 264 | Has content | Verify up-to-date |
| /offers/eldoah-exclusive | 236 | Has content | Verify offer is current |
| /bonuses/no-wagering | 209 | Has content | Verify completeness |

---

## Priority 4: Structural Improvements

### 4.1 Internal Linking
- Ensure all pillar pages link to their subpages
- Add "Related Content" sections
- Cross-link between related categories

### 4.2 Component Usage
Ensure consistent use of:
- `<CasinoList>` for casino recommendations
- `<InfoBox>` for important notices
- `<AffiliateButton>` for CTAs
- FAQ sections with proper schema markup

### 4.3 SEO Optimization
- Verify all pages have proper meta titles/descriptions
- Check heading hierarchy (H1 > H2 > H3)
- Add schema markup for reviews and FAQs

---

## Implementation Order

### Week 1: High-Impact Missing Pages
1. Create /new-casinos page (3,643 traffic)
2. Create /reviews/simple-casino (1,909 traffic)
3. Create /casino-apps guide (586 traffic)

### Week 2: More Missing Pages
4. Create /free-spins page (569 traffic)
5. Create /mobile guide (533 traffic)
6. Create /reviews/lucky-niki (347 traffic)

### Week 3: Casino Reviews
7. Create /reviews/slotty-vegas (302 traffic)
8. Create /reviews/king-billy (292 traffic)
9. Create /reviews/kakerin (216 traffic)

### Week 4: Pillar Content
10. Create /baccarat pillar content (1,226 traffic boost potential)
11. Create /blackjack pillar content (520 traffic boost potential)
12. Create /live-casino pillar content (255 traffic boost potential)

### Week 5: Content Review
13. Review and update Priority 3 pages
14. Add internal linking improvements
15. SEO audit and fixes

---

## File Creation Checklist

### Missing Pages to Create:

```
content/mdx/
├── new-casinos.mdx                    [CREATE]
├── mobile/
│   └── mobile.mdx                     [CREATE]
├── guides/
│   └── casino-apps.mdx                [CREATE]
├── bonuses/
│   └── free-spins.mdx                 [CREATE]
├── baccarat/
│   └── baccarat.mdx                   [CREATE - pillar]
├── blackjack/
│   └── blackjack.mdx                  [CREATE - pillar]
├── live-casino/
│   └── live-casino.mdx                [CREATE - pillar]
└── reviews/
    ├── simple-casino.mdx              [CREATE]
    ├── lucky-niki.mdx                 [CREATE]
    ├── slotty-vegas.mdx               [CREATE]
    ├── king-billy.mdx                 [CREATE]
    └── kakerin.mdx                    [CREATE]

content/data/casinos/
├── simple-casino.ts                   [CREATE]
├── lucky-niki.ts                      [CREATE]
├── slotty-vegas.ts                    [CREATE]
├── king-billy.ts                      [CREATE]
└── kakerin.ts                         [CREATE]

app/
├── new-casinos/page.tsx               [CREATE]
├── casino-apps/page.tsx               [CREATE]
├── free-spins/page.tsx                [CREATE]
├── mobile/page.tsx                    [CREATE/UPDATE]
└── reviews/
    ├── simple-casino/page.tsx         [CREATE]
    ├── lucky-niki/page.tsx            [CREATE]
    ├── slotty-vegas/page.tsx          [CREATE]
    ├── king-billy/page.tsx            [CREATE]
    └── kakerin/page.tsx               [CREATE]
```

---

## Traffic Impact Summary

| Action | Potential Traffic Gain |
|--------|----------------------|
| Create 9 missing pages | +8,306/month |
| Improve pillar pages | +2,000/month (estimated) |
| SEO/linking improvements | +500/month (estimated) |
| **Total Potential** | **+10,806/month** |

---

## Notes

1. **Content Quality:** Current CasinoTsu content is generally MORE comprehensive than competitor. Focus on filling gaps, not rewriting existing content.

2. **Branding:** Maintain consistent "CasinoTsu" voice and formatting across all new pages.

3. **Offers:** Before creating casino reviews, verify if the casino accepts Japanese players and has active offers.

4. **Updates:** All content should reflect 2025 information and current bonus offers.
