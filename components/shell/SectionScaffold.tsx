import { CalendarDays, UserCircle } from 'lucide-react';
import { ReactNode } from "react";

type SectionScaffoldProps = {
  title: string;
  subtitle?: string;
  description?: string;
  authorName?: string;
  lastUpdated?: string;
  badge?: string;
  children?: ReactNode;
  showHeader?: boolean;
};

export default function SectionScaffold({
  title,
  subtitle,
  description,
  authorName = 'CasinoTsu編集部',
  lastUpdated,
  badge,
  children,
  showHeader = true,
}: SectionScaffoldProps) {
  // Format date for display
  const formattedDate = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
      })
    : new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section - matching homepage style */}
      {showHeader && (
        <section className="relative overflow-hidden">
          {/* Background with gradient and subtle pattern - indigo themed */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50/30" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative container mx-auto max-w-7xl pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 px-4 sm:px-6 lg:px-8 text-center">
            {/* Author & date line */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400 mb-5">
              <div className="flex items-center gap-1.5">
                <UserCircle className="h-3.5 w-3.5 text-indigo-400" />
                <span className="font-medium text-gray-500">{authorName}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-indigo-400" />
                <span>{formattedDate}更新</span>
              </div>
              {badge && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full font-medium">
                    {badge}
                  </span>
                </>
              )}
            </div>

            {/* Subtitle (category indicator) */}
            {subtitle && (
              <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}

            {/* Main heading */}
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15]">
              {title}
            </h1>

            {/* Intro / description */}
            {description && (
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Main content */}
      <main className="container mx-auto max-w-7xl px-4 pb-10">
        {children ? <div className="py-8">{children}</div> : null}
      </main>
    </div>
  );
}
