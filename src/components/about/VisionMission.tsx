import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Eye, Award, Sparkles, ChevronRight, Shield, Star, Users } from 'lucide-react';

const items = [
  {
    id: 'mission',
    title: 'Our Mission',
    content: 'To empower students by providing high-quality computer education and practical skills that prepare them for success in the digital era.',
    icon: Target,
    gradient: 'from-indigo-500 to-purple-600',
    details: [
      'Industry-relevant curriculum',
      'Hands-on practical training',
      'Career guidance & support',
      'Regular skill assessments'
    ]
  },
  {
    id: 'vision',
    title: 'Our Vision',
    content: 'To be the most trusted and preferred computer training institute in the region, recognized for excellence, innovation, and student success.',
    icon: Eye,
    gradient: 'from-blue-500 to-cyan-600',
    details: [
      'Center of excellence',
      'Innovation in education',
      'Global recognition',
      'Student success stories'
    ]
  },
  {
    id: 'values',
    title: 'Our Values',
    content: 'Integrity, excellence, student-centricity, and continuous improvement are at the heart of everything we do at RGCC.',
    icon: Award,
    gradient: 'from-emerald-500 to-teal-600',
    details: [
      'Uncompromising integrity',
      'Commitment to excellence',
      'Student-first approach',
      'Continuous innovation'
    ]
  }
];

export function VisionMissionValues() {
  const [activeId, setActiveId] = useState('vision');

  const activeItem = items.find(item => item.id === activeId) ?? items[0];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700">
              <Sparkles size={16} className="text-indigo-500" />
              Our Foundation
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Vision, Mission & Values
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm border border-slate-200">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeId === item.id
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-md`
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <item.icon size={16} />
                {item.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
          >
            <div className={`bg-gradient-to-r ${activeItem.gradient} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <activeItem.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold">{activeItem.title}</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                {activeItem.content}
              </p>
            </div>
            
            <div className="p-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeItem.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${activeItem.gradient} rounded-full flex items-center justify-center`}>
                      <ChevronRight size={12} className="text-white" />
                    </div>
                    <span className="text-slate-700">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '10+', label: 'Years of Excellence', icon: Star },
            { value: '5000+', label: 'Students Trained', icon: Users },
            { value: '100%', label: 'Student Satisfaction', icon: Shield },
            { value: '50+', label: 'Industry Awards', icon: Award }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
              <stat.icon className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}