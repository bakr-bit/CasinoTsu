import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/src/data/site-config';
import { footerNavItems } from '@/src/data/navigation';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/tsu-logo.png"
                alt="CasinoTsu"
                width={140}
                height={38}
                className="h-9 w-auto grayscale brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-indigo-200/70 leading-relaxed max-w-sm">
              日本人プレイヤー向けのオンラインカジノ情報サイト。
              カジノレビュー、ボーナス比較、決済方法ガイドなど、信頼できる情報を提供しています。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
              クイックリンク
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-indigo-200/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
              責任あるギャンブル
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">
                  18+
                </span>
                <span className="text-sm text-indigo-200/70">責任を持ってプレイしましょう</span>
              </div>
              <p className="text-sm text-indigo-200/70">
                {siteConfig.responsibleGaming.message}
              </p>
              <a
                href={siteConfig.responsibleGaming.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 underline inline-block"
              >
                ギャンブル依存症の相談窓口
              </a>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-indigo-300/60 leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-indigo-200/80">免責事項:</strong> 当サイトにはアフィリエイトリンクが含まれています。
            当サイトのリンクから登録した場合、紹介料を受け取ることがありますが、お客様に追加費用は発生しません。
            これにより、サイトの運営を継続し、独立したレビューを提供することができます。
            当サイトの推奨はアフィリエイト提携によって影響を受けることはありません。
          </p>
        </div>

        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-sm text-indigo-300/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            {siteConfig.contact.email && (
              <>
                <span className="mx-2">&middot;</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  {siteConfig.contact.email}
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
