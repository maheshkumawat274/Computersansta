import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';

const previewImages = [
  { id: '1', url: 'imgs/students4.jpeg', caption: 'Computer Lab', tag: 'Infrastructure', stats: '24/7 Access' },
  { id: '2', url: 'imgs/students5.jpeg', caption: 'Smart Classroom', tag: 'Learning', stats: 'Digital Education' },
  { id: '3', url: 'imgs/students2.jpeg', caption: 'Award Ceremony', tag: 'Achievement', stats: 'Student Excellence' },
  { id: '4', url: 'imgs/students1.jpeg', caption: 'Annual Fest', tag: 'Events', stats: 'Cultural Fiesta' },
  { id: '5', url: 'imgs/students4.jpeg', caption: 'Sports Day', tag: 'Activities', stats: 'Annual Tournament' },
  { id: '6', url: 'imgs/students3.jpeg', caption: 'Digital Library', tag: 'Facilities', stats: '10K+ Books' },
];

export function GalleryPreview() {
  return (
    <Section
      title="Life at RGCC"
      subtitle="Our Gallery"
      center
      className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6 md:gap-8">
          {previewImages.map((image, idx) => {
            let sizeClass = '';
            if (idx === 0) sizeClass = 'md:row-span-2';
            if (idx === 2) sizeClass = 'lg:row-span-2';
            if (idx === 4) sizeClass = 'md:col-span-2';
            
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer ${sizeClass}`}
              >
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Tag with Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white tracking-wider border border-white/20 shadow-lg">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                      {image.tag}
                    </span>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform translate-y-0 transition-all duration-300">
                    {image.caption}
                  </h3>
                  
                  {/* Stats */}
                  <p className="text-white/80 text-sm mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {image.stats}
                  </p>
                  
                  {/* Animated Line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Hover Zoom Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-500/80"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Link to="/gallery">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-300" />
              <div className="relative px-8 py-4 bg-white rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <span className="flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Explore Complete Gallery
                  <svg className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          </Link>
          
          {/* Decorative Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { label: 'Moments Captured', value: '250+', color: 'indigo' },
              { label: 'Events Covered', value: '15+', color: 'purple' },
              { label: 'Students Featured', value: '1000+', color: 'pink' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="text-center"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </Section>
  );
}