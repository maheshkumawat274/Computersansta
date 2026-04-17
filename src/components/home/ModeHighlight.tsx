import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';

export function ModeHighlight() {
  return (
    <Section className="bg-indigo-600 text-white pb-0 pt-0" containerClassName="py-0 overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="py-12 md:py-20 flex items-center bg-indigo-600 pr-0 md:pr-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Learn at your convenience.</h2>
            <p className="text-indigo-100/80 text-lg max-w-md">
              We offer flexible learning paths to suit your lifestyle. Choose between our interactive online classes or immersive in-person training.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-indigo-300" />
                <span className="font-semibold uppercase tracking-wider text-sm">Online Classes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-indigo-300" />
                <span className="font-semibold uppercase tracking-wider text-sm">Offline Centers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-12 md:py-20 md:border-l border-indigo-500 flex items-center pl-0 md:pl-12">
          <div className="grid grid-cols-2 gap-8">
             <div className="space-y-4">
                <div className="text-4xl font-bold">100%</div>
                <p className="text-indigo-200 text-sm font-medium tracking-wide uppercase">Practical Based Learning</p>
             </div>
             <div className="space-y-4">
                <div className="text-4xl font-bold">Job</div>
                <p className="text-indigo-200 text-sm font-medium tracking-wide uppercase">Placement Assistance</p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
