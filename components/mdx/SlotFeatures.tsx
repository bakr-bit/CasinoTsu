import { getSlot } from '@/content/data/slots';

interface SlotFeaturesProps {
  slotId: string;
}

export function SlotFeatures({ slotId }: SlotFeaturesProps) {
  const slotData = getSlot(slotId);

  if (!slotData?.features) {
    return null;
  }

  const { features } = slotData;

  return (
    <div className="my-6">
      {features.title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          {features.title}
        </h3>
      )}

      <div className="space-y-4">
        {features.items.map((feature, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {feature.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
