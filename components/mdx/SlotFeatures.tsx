import { getSlot } from '@/content/data/slots';
import { Sparkles } from 'lucide-react';

interface SlotFeaturesProps {
  slotId: string;
}

export function SlotFeatures({ slotId }: SlotFeaturesProps) {
  const slotData = getSlot(slotId);

  if (!slotData?.features) {
    return null;
  }

  const { features } = slotData;

  // Gradient colors for feature items
  const gradients = [
    'from-indigo-600 to-indigo-700',
    'from-violet-500 to-purple-600',
    'from-amber-500 to-orange-500',
    'from-emerald-500 to-green-600',
    'from-pink-500 to-rose-500',
    'from-cyan-500 to-blue-500',
  ];

  return (
    <div className="my-8 not-prose">
      {features.title && (
        <div className="mb-6">
          <div className="w-10 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-3" />
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            {features.title}
          </h3>
        </div>
      )}

      <div className="space-y-4">
        {features.items.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Header with gradient */}
            <div className={`px-4 py-3 bg-gradient-to-r ${gradients[index % gradients.length]} relative`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
              <div className="flex items-center gap-3 relative z-10">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white font-black text-sm">
                  {index + 1}
                </span>
                <h4 className="font-bold text-white">{feature.name}</h4>
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-4 bg-white border-x border-b border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
