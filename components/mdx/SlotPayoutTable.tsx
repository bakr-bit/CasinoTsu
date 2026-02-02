import { getSlot } from '@/content/data/slots';
import { Star, Trophy, Info } from 'lucide-react';

interface SlotPayoutTableProps {
  slotId: string;
}

export function SlotPayoutTable({ slotId }: SlotPayoutTableProps) {
  const slotData = getSlot(slotId);

  if (!slotData?.payoutTable) {
    return null;
  }

  const { payoutTable } = slotData;

  return (
    <div className="my-8 not-prose">
      {payoutTable.title && (
        <div className="mb-6">
          <div className="w-10 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-3" />
          <h3 className="text-xl font-bold text-gray-900">{payoutTable.title}</h3>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-200/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider text-left">
                シンボル
              </th>
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider text-left">
                説明
              </th>
              <th className="px-4 py-3 text-[11px] font-bold text-white/80 uppercase tracking-wider text-center">
                配当
              </th>
            </tr>
          </thead>
          <tbody>
            {payoutTable.symbols.map((symbol, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 transition-all duration-200 hover:bg-indigo-50/50 ${
                  symbol.isSpecial
                    ? 'bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50'
                    : index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50/50'
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {symbol.isSpecial && (
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm">
                        <Star className="w-3.5 h-3.5 text-white fill-current" />
                      </span>
                    )}
                    <span className={`font-medium ${symbol.isSpecial ? 'text-amber-700' : 'text-gray-900'}`}>
                      {symbol.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {symbol.description || '—'}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold ${
                    symbol.isSpecial
                      ? 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700'
                      : 'bg-indigo-50 text-indigo-700'
                  }`}>
                    {symbol.payout5 !== '-' ? symbol.payout5 : symbol.payout4 !== '-' ? symbol.payout4 : symbol.payout3 || '—'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {payoutTable.maxPayout && (
        <div className="mt-4 overflow-hidden rounded-2xl shadow-lg">
          <div className="px-4 py-3 bg-gradient-to-r from-emerald-600 to-green-600 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white/80 text-xs">最大配当</span>
                <p className="text-white font-bold">{payoutTable.maxPayout}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {payoutTable.notes && payoutTable.notes.length > 0 && (
        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
          {payoutTable.notes.map((note, index) => (
            <p key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <Info className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// Alias for MDX usage
export const PayoutTable = SlotPayoutTable;
