import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { ContactForm } from '../../components/ui/ContactForm';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 overflow-hidden relative py-20 md:py-32">
        <div className="absolute top-0 left-0 w-full h-full">
           <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-8"
          >
            Get in <span className="text-indigo-400">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions about our courses or admissions? We're here to help you start your journey.
          </p>
        </div>
      </section>

      <Section className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-2xl w-fit">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">Phone</h3>
                  <p className="text-slate-600 text-sm font-medium tracking-wide">Call us anytime for guidance.</p>
                  <p className="text-lg font-bold text-slate-900">+91 9306526532</p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-2xl w-fit">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">WhatsApp</h3>
                  <p className="text-slate-600 text-sm font-medium tracking-wide">Instant chat support.</p>
                  <p className="text-lg font-bold text-slate-900">+91 9306526532</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-indigo-600 text-white rounded-3xl shadow-xl space-y-6">
              <div className="flex items-start space-x-4">
                 <div className="bg-white/20 p-2 rounded-lg mt-1">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">Our Locations</h3>
                   <div className="space-y-4">
                      <div>
                        <p className="font-bold text-indigo-100 uppercase tracking-widest text-xs mb-1">Center 01</p>
                        <p className="text-lg">Uchana, District Jind, Haryana</p>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <p className="font-bold text-indigo-100 uppercase tracking-widest text-xs mb-1">Center 02</p>
                        <p className="text-lg">Alewa, District Jind, Haryana</p>
                      </div>
                   </div>
                 </div>
              </div>
            </div>

            <div className="p-8 border border-dashed border-slate-200 rounded-3xl space-y-4">
               <h3 className="font-bold text-slate-900">Visiting Hours</h3>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-500 font-medium">Monday - Saturday</span>
                 <span className="text-indigo-600 font-bold">09:00 AM - 06:00 PM</span>
               </div>
               <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-4">
                 <span className="text-slate-500 font-medium tracking-wide uppercase text-xs">Sunday</span>
                 <span className="text-slate-400 font-bold italic text-xs">Holiday</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
               <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Admission Inquiry</h2>
               <p className="text-slate-500 mb-10 font-medium">Fill out the form below and we'll get back to you.</p>
               <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
