import type { ReactNode } from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

interface InfoBoxProps {
  /** Type of info box */
  type?: 'info' | 'warning' | 'success' | 'tip';
  /** Title for the box */
  title?: string;
  /** Content */
  children: ReactNode;
}

/**
 * Info box component for MDX content
 * Displays highlighted information, warnings, or tips with colorful gradients
 */
export function InfoBox({ type = 'info', title, children }: InfoBoxProps) {
  const styles = {
    info: {
      wrapper: 'from-indigo-600 via-indigo-700 to-indigo-800',
      iconBg: 'bg-white/20',
      body: 'bg-indigo-50 border-indigo-200',
      text: 'text-indigo-800',
    },
    warning: {
      wrapper: 'from-amber-500 via-orange-500 to-amber-600',
      iconBg: 'bg-white/20',
      body: 'bg-amber-50 border-amber-200',
      text: 'text-amber-800',
    },
    success: {
      wrapper: 'from-emerald-600 via-green-600 to-emerald-700',
      iconBg: 'bg-white/20',
      body: 'bg-emerald-50 border-emerald-200',
      text: 'text-emerald-800',
    },
    tip: {
      wrapper: 'from-violet-600 via-purple-600 to-violet-700',
      iconBg: 'bg-white/20',
      body: 'bg-violet-50 border-violet-200',
      text: 'text-violet-800',
    },
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    tip: Lightbulb,
  };

  const style = styles[type];
  const IconComponent = icons[type];

  return (
    <div className="my-8 not-prose overflow-hidden rounded-2xl shadow-lg">
      {/* Header with gradient and shine */}
      <div className={`px-4 py-3 bg-gradient-to-r ${style.wrapper} relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
        <div className="flex items-center gap-3 relative z-10">
          <div className={`flex-shrink-0 w-8 h-8 ${style.iconBg} rounded-lg flex items-center justify-center`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          {title && (
            <h4 className="font-bold text-white text-sm">{title}</h4>
          )}
        </div>
      </div>

      {/* Body */}
      <div className={`px-4 py-4 ${style.body} border-x border-b`}>
        <div className={`text-sm leading-relaxed ${style.text}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
