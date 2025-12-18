import React from "react";

/**
 * Internal linking system for provider pages
 * Automatically converts text mentions into links
 */

export interface LinkMapping {
  patterns: string[];
  url: string;
  title?: string;
}

// Provider links
export const PROVIDER_LINKS: LinkMapping[] = [
  {
    patterns: ["Pragmatic Play", "プラグマティックプレイ", "プラグマティック"],
    url: "/providers/pragmatic-play",
    title: "Pragmatic Play プロバイダーレビュー"
  },
  {
    patterns: ["NetEnt", "ネットエント", "Net Entertainment"],
    url: "/providers/netent",
    title: "NetEnt プロバイダーレビュー"
  },
  {
    patterns: ["Evolution Gaming", "エボリューション", "Evolution"],
    url: "/providers/evolution",
    title: "Evolution Gaming プロバイダーレビュー"
  },
  {
    patterns: ["Microgaming", "マイクロゲーミング"],
    url: "/providers/microgaming",
    title: "Microgaming プロバイダーレビュー"
  },
  {
    patterns: ["Play'n GO", "Play'n Go", "プレインゴー"],
    url: "/providers/play-n-go",
    title: "Play'n GO プロバイダーレビュー"
  },
  {
    patterns: ["Red Tiger", "レッドタイガー"],
    url: "/providers/red-tiger",
    title: "Red Tiger プロバイダーレビュー"
  },
  {
    patterns: ["Big Time Gaming", "ビッグタイムゲーミング", "BTG"],
    url: "/providers/big-time-gaming",
    title: "Big Time Gaming プロバイダーレビュー"
  },
  {
    patterns: ["Yggdrasil", "ユグドラシル"],
    url: "/providers/yggdrasil",
    title: "Yggdrasil プロバイダーレビュー"
  },
  {
    patterns: ["Relax Gaming", "リラックスゲーミング"],
    url: "/providers/relax-gaming",
    title: "Relax Gaming プロバイダーレビュー"
  },
  {
    patterns: ["Push Gaming", "プッシュゲーミング"],
    url: "/providers/push-gaming",
    title: "Push Gaming プロバイダーレビュー"
  }
];

// Popular slot links
export const SLOT_LINKS: LinkMapping[] = [
  {
    patterns: ["Gates of Olympus", "ゲーツ・オブ・オリンパス", "ゲーツオブオリンパス"],
    url: "/slots/gates-of-olympus",
    title: "Gates of Olympus スロットレビュー"
  },
  {
    patterns: ["Sweet Bonanza", "スイートボナンザ"],
    url: "/slots/sweet-bonanza",
    title: "Sweet Bonanza スロットレビュー"
  },
  {
    patterns: ["Starburst", "スターバースト"],
    url: "/slots/starburst",
    title: "Starburst スロットレビュー"
  },
  {
    patterns: ["Gonzo's Quest", "ゴンゾーズクエスト"],
    url: "/slots/gonzos-quest",
    title: "Gonzo's Quest スロットレビュー"
  },
  {
    patterns: ["The Dog House", "ザ・ドッグ・ハウス"],
    url: "/slots/the-dog-house",
    title: "The Dog House スロットレビュー"
  },
  {
    patterns: ["Wolf Gold", "ウルフゴールド"],
    url: "/slots/wolf-gold",
    title: "Wolf Gold スロットレビュー"
  },
  {
    patterns: ["Big Bass Bonanza", "ビッグバスボナンザ"],
    url: "/slots/big-bass-bonanza",
    title: "Big Bass Bonanza スロットレビュー"
  },
  {
    patterns: ["Dead or Alive", "デッド・オア・アライブ"],
    url: "/slots/dead-or-alive",
    title: "Dead or Alive スロットレビュー"
  },
  {
    patterns: ["Crazy Time", "クレイジータイム"],
    url: "/live-casino/crazy-time",
    title: "Crazy Time ライブゲームショー"
  },
  {
    patterns: ["Lightning Roulette", "ライトニングルーレット"],
    url: "/live-casino/lightning-roulette",
    title: "Lightning Roulette ライブカジノ"
  }
];

// License and regulatory links
export const LICENSE_LINKS: LinkMapping[] = [
  {
    patterns: ["MGA", "Malta Gaming Authority", "マルタゲーミング委員会", "マルタライセンス"],
    url: "/licenses/mga",
    title: "MGA（マルタゲーミング委員会）について"
  },
  {
    patterns: ["UKGC", "UK Gambling Commission", "イギリスギャンブル委員会", "UKライセンス"],
    url: "/licenses/ukgc",
    title: "UKGC（イギリスギャンブル委員会）について"
  },
  {
    patterns: ["Curacao", "キュラソー", "キュラソーライセンス"],
    url: "/licenses/curacao",
    title: "キュラソーライセンスについて"
  },
  {
    patterns: ["Gibraltar", "ジブラルタル", "ジブラルタルライセンス"],
    url: "/licenses/gibraltar",
    title: "ジブラルタルライセンスについて"
  },
  {
    patterns: ["eCOGRA", "イーコグラ"],
    url: "/certifications/ecogra",
    title: "eCOGRA認証について"
  }
];

// Casino review links
export const CASINO_LINKS: LinkMapping[] = [
  {
    patterns: ["ベラジョン", "Vera&John", "VeraJohn"],
    url: "/reviews/vera-john",
    title: "ベラジョンカジノ レビュー"
  },
  {
    patterns: ["インターカジノ", "InterCasino", "Inter Casino"],
    url: "/reviews/inter-casino",
    title: "インターカジノ レビュー"
  },
  {
    patterns: ["カジ旅", "Casitabi"],
    url: "/reviews/casitabi",
    title: "カジ旅 レビュー"
  },
  {
    patterns: ["遊雅堂", "Yuugado"],
    url: "/reviews/yuugado",
    title: "遊雅堂 レビュー"
  },
  {
    patterns: ["ミスティーノ", "Mystino"],
    url: "/reviews/mystino",
    title: "ミスティーノ レビュー"
  },
  {
    patterns: ["エルドアカジノ", "Eldoah", "エルドア"],
    url: "/reviews/eldoah",
    title: "エルドアカジノ レビュー"
  },
  {
    patterns: ["ボンズ", "Bons", "Bons Casino"],
    url: "/reviews/bons",
    title: "ボンズカジノ レビュー"
  },
  {
    patterns: ["カジノミー", "Casino Me", "CasinoMe"],
    url: "/reviews/casino-me",
    title: "カジノミー レビュー"
  },
  {
    patterns: ["ライブカジノハウス", "Live Casino House"],
    url: "/reviews/live-casino-house",
    title: "ライブカジノハウス レビュー"
  },
  {
    patterns: ["BitStarz", "ビットスターズ"],
    url: "/reviews/bitstarz",
    title: "BitStarz レビュー"
  },
  {
    patterns: ["BC.Game", "BC Game", "ビーシーゲーム"],
    url: "/reviews/bc-game",
    title: "BC.Game レビュー"
  },
  {
    patterns: ["Stake", "ステーク"],
    url: "/reviews/stake",
    title: "Stake レビュー"
  },
  {
    patterns: ["Roobet", "ルーベット"],
    url: "/reviews/roobet",
    title: "Roobet レビュー"
  },
  {
    patterns: ["1win", "ワンウィン"],
    url: "/reviews/1win",
    title: "1win レビュー"
  },
  {
    patterns: ["Bitcasino.io", "ビットカジノ"],
    url: "/reviews/bitcasino-io",
    title: "ビットカジノ レビュー"
  },
  {
    patterns: ["Sportsbet.io", "スポーツベット"],
    url: "/reviews/sportsbet-io",
    title: "Sportsbet.io レビュー"
  },
  {
    patterns: ["Casino Secret", "カジノシークレット"],
    url: "/reviews/casino-secret",
    title: "カジノシークレット レビュー"
  },
  {
    patterns: ["Wonder Casino", "ワンダーカジノ"],
    url: "/reviews/wonder-casino",
    title: "ワンダーカジノ レビュー"
  },
  {
    patterns: ["Joy Casino", "ジョイカジノ"],
    url: "/reviews/joycasino",
    title: "ジョイカジノ レビュー"
  },
  {
    patterns: ["Konibet", "コニベット"],
    url: "/reviews/konibet",
    title: "Konibet レビュー"
  },
  {
    patterns: ["Casino-X", "カジノエックス"],
    url: "/reviews/casino-x",
    title: "Casino-X レビュー"
  },
  {
    patterns: ["Queen Casino", "クイーンカジノ"],
    url: "/reviews/queen-casino",
    title: "クイーンカジノ レビュー"
  },
  {
    patterns: ["Tedbet", "テッドベット"],
    url: "/reviews/tedbet",
    title: "Tedbet レビュー"
  },
  {
    patterns: ["Winz", "ウィンズ"],
    url: "/reviews/winz-io",
    title: "Winz レビュー"
  },
  {
    patterns: ["Energy Casino", "エナジーカジノ"],
    url: "/reviews/energy-casino",
    title: "Energy Casino レビュー"
  },
  {
    patterns: ["Duelbits", "デュエルビッツ"],
    url: "/reviews/duelbits",
    title: "Duelbits レビュー"
  },
  {
    patterns: ["Parimatch", "パリマッチ"],
    url: "/reviews/parimatch",
    title: "Parimatch レビュー"
  },
  {
    patterns: ["Miki", "ミキ"],
    url: "/reviews/miki",
    title: "Miki レビュー"
  },
  {
    patterns: ["OhMySpins", "オー・マイ・スピンズ"],
    url: "/reviews/ohmyspins",
    title: "OhMySpins レビュー"
  },
  {
    patterns: ["Empire777", "エンパイア777"],
    url: "/reviews/empire777",
    title: "Empire777 レビュー"
  },
  {
    patterns: ["BetRebels", "ベットリベルズ"],
    url: "/reviews/betrebels",
    title: "BetRebels レビュー"
  },
  {
    patterns: ["Lilibet", "リリベット"],
    url: "/reviews/lilibet",
    title: "Lilibet レビュー"
  },
  {
    patterns: ["Casino Sky", "カジノスカイ"],
    url: "/reviews/casino-sky",
    title: "Casino Sky レビュー"
  },
  {
    patterns: ["Gamdom", "ガムドム"],
    url: "/reviews/gamdom",
    title: "Gamdom レビュー"
  },
  {
    patterns: ["Empire.io", "エンパイア"],
    url: "/reviews/empire-io",
    title: "Empire.io レビュー"
  },
  {
    patterns: ["Bitz", "ビッツ"],
    url: "/reviews/bitz",
    title: "Bitz レビュー"
  },
  {
    patterns: ["Shuffle", "シャッフル"],
    url: "/reviews/shuffle",
    title: "Shuffle レビュー"
  },
  {
    patterns: ["Conquestador", "コンクエスタドール"],
    url: "/reviews/conquestador",
    title: "Conquestador レビュー"
  },
  {
    patterns: ["2up", "ツーアップ"],
    url: "/reviews/2up",
    title: "2up レビュー"
  },
  {
    patterns: ["Wikibet", "ウィキベット"],
    url: "/reviews/wikibet",
    title: "Wikibet レビュー"
  },
  {
    patterns: ["Sushi Casino", "スシカジノ"],
    url: "/reviews/sushi-casino",
    title: "Sushi Casino レビュー"
  },
  {
    patterns: ["Fresh Casino", "フレッシュカジノ"],
    url: "/reviews/fresh-casino",
    title: "Fresh Casino レビュー"
  },
  {
    patterns: ["Livecasino.io", "ライブカジノアイオー"],
    url: "/reviews/livecasino-io",
    title: "Livecasino.io レビュー"
  },
  {
    patterns: ["Cloudbet", "クラウドベット"],
    url: "/reviews/cloudbet",
    title: "Cloudbet レビュー"
  },
  {
    patterns: ["Lucky Block", "ラッキーブロック"],
    url: "/reviews/lucky-block",
    title: "Lucky Block レビュー"
  },
  {
    patterns: ["Lucky Bull", "ラッキーブル"],
    url: "/reviews/lucky-bull",
    title: "Lucky Bull レビュー"
  },
  {
    patterns: ["Bets.io", "ベッツアイオー"],
    url: "/reviews/bets-io",
    title: "Bets.io レビュー"
  },
  {
    patterns: ["Flush Casino", "フラッシュカジノ"],
    url: "/reviews/flush",
    title: "Flush Casino レビュー"
  },
  {
    patterns: ["Dafabet", "ダファベット"],
    url: "/reviews/dafabet",
    title: "Dafabet レビュー"
  },
  {
    patterns: ["Betgoat", "ベットゴート"],
    url: "/reviews/betgoat",
    title: "Betgoat レビュー"
  },
  {
    patterns: ["William Hill", "ウィリアムヒル"],
    url: "/reviews/william-hill",
    title: "William Hill レビュー"
  },
  {
    patterns: ["Mega Dice", "メガダイス"],
    url: "/reviews/mega-dice",
    title: "Mega Dice レビュー"
  },
  {
    patterns: ["WSM Casino", "WSMカジノ"],
    url: "/reviews/wsm-casino",
    title: "WSM Casino レビュー"
  },
  {
    patterns: ["TrustDice", "トラストダイス"],
    url: "/reviews/trustdice",
    title: "TrustDice レビュー"
  },
  {
    patterns: ["Lucky Niki", "ラッキーニッキー"],
    url: "/reviews/lucky-niki",
    title: "Lucky Niki レビュー"
  },
  {
    patterns: ["K8", "ケーエイト"],
    url: "/reviews/k8",
    title: "K8 レビュー"
  },
  {
    patterns: ["Star Casino", "スターカジノ"],
    url: "/reviews/star-casino",
    title: "Star Casino レビュー"
  },
  {
    patterns: ["Unibet", "ユニベット"],
    url: "/reviews/unibet",
    title: "Unibet レビュー"
  },
  {
    patterns: ["Vulkan Vegas", "ヴァルカンベガス", "バルカンベガス"],
    url: "/reviews/vulkanvegas",
    title: "Vulkan Vegas レビュー"
  },
  {
    patterns: ["Pinnacle", "ピナクル"],
    url: "/reviews/pinnacle",
    title: "Pinnacle レビュー"
  },
  {
    patterns: ["21.com", "21ドットコム"],
    url: "/reviews/21-com",
    title: "21.com レビュー"
  },
  {
    patterns: ["Betway", "ベットウェイ"],
    url: "/reviews/betway",
    title: "Betway レビュー"
  },
  {
    patterns: ["Just Spin", "ジャストスピン"],
    url: "/reviews/just-spin",
    title: "Just Spin レビュー"
  },
  {
    patterns: ["Yous Casino", "ユースカジノ"],
    url: "/reviews/yous-casino",
    title: "Yous Casino レビュー"
  },
  {
    patterns: ["Ramenbet", "ラーメンベット"],
    url: "/reviews/ramenbet",
    title: "Ramenbet レビュー"
  },
  {
    patterns: ["Golden Panda", "ゴールデンパンダ"],
    url: "/reviews/golden-panda",
    title: "Golden Panda レビュー"
  },
  {
    patterns: ["Mint.io", "ミント"],
    url: "/reviews/mint-io",
    title: "Mint.io レビュー"
  },
  {
    patterns: ["Katsuwin", "カツウィン"],
    url: "/reviews/katsuwin",
    title: "Katsuwin レビュー"
  },
  {
    patterns: ["Casino Bunker", "カジノバンカー"],
    url: "/reviews/casino-bunker",
    title: "Casino Bunker レビュー"
  },
  {
    patterns: ["CosmosWin", "コスモスウィン"],
    url: "/reviews/cosmoswin",
    title: "CosmosWin レビュー"
  },
  {
    patterns: ["CasinoIn", "カジノイン"],
    url: "/reviews/casinoin",
    title: "CasinoIn レビュー"
  },
  {
    patterns: ["Betpanda", "ベットパンダ"],
    url: "/reviews/betpanda",
    title: "Betpanda レビュー"
  },
  {
    patterns: ["Bonds Casino", "ボンズカジノ"],
    url: "/reviews/bonds-casino",
    title: "Bonds Casino レビュー"
  },
  {
    patterns: ["WinUnique", "ウィンユニーク"],
    url: "/reviews/winunique",
    title: "WinUnique レビュー"
  }
];

// General casino terms
export const GENERAL_LINKS: LinkMapping[] = [
  {
    patterns: ["RTP", "還元率", "ペイアウト率"],
    url: "/guides/rtp",
    title: "RTP（還元率）について"
  },
  {
    patterns: ["ボラティリティ", "バリアンス"],
    url: "/guides/volatility",
    title: "ボラティリティについて"
  },
  {
    patterns: ["フリースピン", "無料スピン"],
    url: "/guides/free-spins",
    title: "フリースピンについて"
  },
  {
    patterns: ["ワイルドシンボル", "ワイルド"],
    url: "/guides/wild-symbols",
    title: "ワイルドシンボルについて"
  },
  {
    patterns: ["スキャッター", "スキャッターシンボル"],
    url: "/guides/scatter-symbols",
    title: "スキャッターシンボルについて"
  },
  {
    patterns: ["ジャックポット", "プログレッシブ"],
    url: "/guides/jackpots",
    title: "ジャックポットについて"
  },
  {
    patterns: ["ライブカジノ"],
    url: "/live-casino",
    title: "ライブカジノガイド"
  },
  {
    patterns: ["責任あるギャンブル", "責任あるゲーミング"],
    url: "/responsible-gambling",
    title: "責任あるギャンブルについて"
  }
];

// Combine all link mappings
export const ALL_LINKS: LinkMapping[] = [
  ...PROVIDER_LINKS,
  ...SLOT_LINKS,
  ...LICENSE_LINKS,
  ...CASINO_LINKS,
  ...GENERAL_LINKS
];

/**
 * Converts text with internal links
 * Finds patterns and wraps them in anchor tags
 */
export function addInternalLinks(text: string, currentPath?: string): string {
  let processedText = text;

  // Sort by pattern length (longest first) to avoid partial matches
  const sortedLinks = ALL_LINKS
    .flatMap(link => link.patterns.map(pattern => ({ ...link, pattern })))
    .sort((a, b) => b.pattern.length - a.pattern.length);

  for (const { pattern, url, title } of sortedLinks) {
    // Skip if this would link to the current page
    if (currentPath && url === currentPath) continue;

    // Create regex that matches the pattern as whole words
    const regex = new RegExp(`\\b${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');

    // Only replace if not already inside an HTML tag
    const matches = processedText.match(regex);
    if (matches) {
      for (const match of matches) {
        // Check if this text is already inside a link tag
        const beforeMatch = processedText.substring(0, processedText.indexOf(match));
        const openTags = (beforeMatch.match(/<a\b/gi) || []).length;
        const closeTags = (beforeMatch.match(/<\/a>/gi) || []).length;

        if (openTags === closeTags) {
          // Not inside a link, safe to replace
          processedText = processedText.replace(
            match,
            `<a href="${url}" title="${title || match}" class="font-bold underline hover:no-underline transition-all">${match}</a>`
          );
        }
      }
    }
  }

  return processedText;
}

/**
 * Processes an array of strings and adds internal links
 */
export function addLinksToArray(items: string[], currentPath?: string): string[] {
  return items.map(item => addInternalLinks(item, currentPath));
}

/**
 * Processes table rows and adds internal links to string cells
 */
export function addLinksToTable(rows: string[][], currentPath?: string): string[][] {
  return rows.map(row =>
    row.map(cell => addInternalLinks(cell, currentPath))
  );
}

/**
 * React component wrapper for text with internal links
 */
export function TextWithLinks({
  children,
  currentPath
}: {
  children: string;
  currentPath?: string;
}) {
  const linkedText = addInternalLinks(children, currentPath);

  return (
    <span
      dangerouslySetInnerHTML={{ __html: linkedText }}
      className="prose prose-sm max-w-none"
    />
  );
}