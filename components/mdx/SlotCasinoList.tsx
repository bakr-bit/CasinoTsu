import { getSlot } from '@/content/data/slots';

interface SlotCasinoListProps {
  slotId: string;
}

export function SlotCasinoList({ slotId }: SlotCasinoListProps) {
  const slotData = getSlot(slotId);

  if (!slotData) {
    return null;
  }

  // For now, display a placeholder with slot info
  // In the future, this can be connected to a shared casino registry
  return (
    <div className="my-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">
            {slotData.hero.title}が遊べるカジノ
          </h3>
          <p className="text-sm text-gray-600">
            このスロットは多くのオンラインカジノでプレイできます
          </p>
        </div>
      </div>

      {/* Slot quick info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {slotData.hero.provider && (
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">プロバイダー</div>
            <div className="font-semibold text-gray-900 text-sm">{slotData.hero.provider}</div>
          </div>
        )}
        {slotData.hero.rtp && (
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">RTP</div>
            <div className="font-semibold text-gray-900 text-sm">{slotData.hero.rtp}</div>
          </div>
        )}
        {slotData.hero.volatility && (
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">ボラティリティ</div>
            <div className="font-semibold text-gray-900 text-sm">{slotData.hero.volatility}</div>
          </div>
        )}
        {slotData.hero.maxMultiplier && (
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">最大倍率</div>
            <div className="font-semibold text-blue-600 text-sm">{slotData.hero.maxMultiplier}</div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/reviews"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          カジノ一覧を見る
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
