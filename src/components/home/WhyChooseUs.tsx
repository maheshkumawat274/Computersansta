import React from 'react';
import { Shield, Target, Users } from 'lucide-react';
import { Section } from '../ui/Section';

export function WhyChooseUs() {
  return (
    <Section
      title="Why Choose RGCC?"
      subtitle="The RGCC Advantage"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-fit">
            <Shield className="text-indigo-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Government Recognized</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Our institute is ISO certified and recognized for quality education, ensuring your certification carries weight.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-fit">
            <Target className="text-indigo-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Focused Training</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            We focus on hands-on practical training rather than just theory, making you industry-ready from day one.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-fit">
            <Users className="text-indigo-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Expert Faculty</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Learn from teachers with years of industry experience who are dedicated to your learning journey.
          </p>
        </div>
      </div>
    </Section>
  );
}
