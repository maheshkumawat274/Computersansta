import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface Stat {
  label: string;
  value: string;
}

interface HeroProps {
  stats: Stat[];
}

export function Hero({ stats }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Admission Open for 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Master Your <span className="text-indigo-600 italic">Digital</span> Future.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join Rajiv Gandhi Computer Center for excellence in computer education. We provide top-notch online and offline training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  View Courses
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Enroll Now
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block mt-12 lg:mt-0"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl skew-y-0 lg:skew-y-3">
              <img
                src="imgs/Herosection.jpeg"
                alt="Training"
                className="w-full h-[400px] lg:h-[80vh] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-left-10 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] lg:max-w-[240px]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold text-slate-900 leading-tight text-sm lg:text-base">ISO 9001:2015</span>
              </div>
              <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed">
                Recognized excellence in educational services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
