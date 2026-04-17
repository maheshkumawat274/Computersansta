import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-6 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919306526532"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden font-bold pr-0 group-hover:pr-2">
          Chat with us
        </span>
        <MessageSquare size={28} />
        {/* Highlight Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-20 pointer-events-none"></span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919306526532"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden font-bold pr-0 group-hover:pr-2">
          Call 9306526532
        </span>
        <Phone size={28} />
        {/* Highlight Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-20 pointer-events-none"></span>
      </motion.a>
    </div>
  );
}
