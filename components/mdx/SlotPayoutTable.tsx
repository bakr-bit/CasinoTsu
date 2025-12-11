import { getSlot } from '@/content/data/slots';

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
    <div className="my-6">
      {payoutTable.title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          {payoutTable.title}
        </h3>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                シンボル
              </th>
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">
                説明
              </th>
              <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">
                配当
              </th>
            </tr>
          </thead>
          <tbody>
            {payoutTable.symbols.map((symbol, index) => (
              <tr
                key={index}
                className={`${
                  symbol.isSpecial
                    ? 'bg-amber-50'
                    : index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50'
                }`}
              >
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  {symbol.isSpecial && (
                    <span className="inline-block mr-2 text-amber-500">★</span>
                  )}
                  {symbol.name}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">
                  {symbol.description || '-'}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">
                  {symbol.payout5 !== '-' ? symbol.payout5 : symbol.payout4 !== '-' ? symbol.payout4 : symbol.payout3 || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {payoutTable.maxPayout && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <span className="font-semibold text-blue-800">最大配当: </span>
          <span className="text-blue-700">{payoutTable.maxPayout}</span>
        </div>
      )}

      {payoutTable.notes && payoutTable.notes.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          {payoutTable.notes.map((note, index) => (
            <p key={index} className="flex items-start gap-2">
              <span className="text-gray-400">*</span>
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
