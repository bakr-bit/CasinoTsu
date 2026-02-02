'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import type { FAQ } from '@/src/types/navigation';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQ[];
}

export function FAQSection({
  title = 'よくある質問',
  subtitle = 'オンラインカジノについてよく寄せられる質問にお答えします。',
  items,
}: FAQSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-gray-50/50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-indigo-600 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {items.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white rounded-lg mb-3 border border-gray-200 px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-indigo-600 hover:no-underline py-5">
                <span className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5 pl-9">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
