import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function ContactCTA() {
  return (
    <Section className="bg-slate-900 text-white overflow-visible">
      <div className="relative bg-indigo-600 rounded-3xl p-8 md:p-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your tech journey?</h2>
            <p className="text-indigo-100 text-lg">
              Contact us today for a free consultation or visit our campus in Uchana or Alewa.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
             <Link to="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-50">
                Contact Us
              </Button>
             </Link>
             <a href="tel:9306526532">
              <Button size="lg" className="w-full sm:w-auto border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                Call 9306526532
              </Button>
             </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
