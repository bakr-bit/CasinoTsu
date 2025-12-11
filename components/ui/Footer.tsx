import { Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <FooterCol title="サイト情報" links={[{ href: "/about", label: "CasinoTsuについて" }, { href: "/sitemap", label: "サイトマップ" }]} />
          <FooterCol title="人気記事" links={[{ href: "/news", label: "最新ニュース" }, { href: "/guides", label: "カジノガイド" }]} />
          <FooterCol title="人気ボーナス" links={[{ href: "/bonuses/no-deposit", label: "入金不要ボーナス" }, { href: "/bonuses/no-wagering", label: "賭け条件なし" }]} />
          <FooterCol title="人気スロット" links={[{ href: "/slots/high-rtp", label: "高RTPスロット" }, { href: "/slots/megaways", label: "メガウェイズ" }]} />
          <FooterCol title="決済方法" links={[{ href: "/payment/visa", label: "VISA" }, { href: "/payment/bitcoin", label: "ビットコイン" }]} />
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center sm:justify-end gap-3 text-blue-100">
          <a href="#" aria-label="CasinoTsu公式X (旧Twitter)" className="transition-colors hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="CasinoTsu公式Instagram" className="transition-colors hover:text-white">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="CasinoTsu公式YouTubeチャンネル" className="transition-colors hover:text-white">
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="text-blue-100 text-sm space-y-3 text-center max-w-4xl mx-auto">
          <p className="font-bold">CasinoTsuは、プレイヤーの安全を第一に考える情報提供サイトです。</p>
          <p>オンラインカジノはエンターテイメントであり、適度に楽しむことが大切です。常に自己責任の範囲内で、責任を持ってプレイしてください。当サイトは責任あるギャンブルを推進しており、GPWAやGambling Therapyといった第三者機関と提携しています。</p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 text-sm text-blue-100 flex flex-col sm:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} CasinoTsu. All Rights Reserved.</p>
          <nav className="mt-4 sm:mt-0 flex items-center gap-x-4 flex-wrap justify-center">
            <Link href="/about/privacy-policy" className="hover:underline">プライバシーポリシー</Link>
            <Link href="/about/cookie-policy" className="hover:underline">クッキーポリシー</Link>
            <Link href="/info/responsible-gambling" className="hover:underline">責任あるギャンブル</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-blue-100">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:underline hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
