import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../components/ui/Section';

const galleryImages = [
  { id: '1', url: 'https://picsum.photos/seed/lab1/800/600', caption: 'Computer Lab' },
  { id: '2', url: 'https://picsum.photos/seed/class1/800/600', caption: 'Modern Classroom' },
  { id: '3', url: 'https://picsum.photos/seed/award1/800/600', caption: 'Award Ceremony' },
  { id: '4', url: 'https://picsum.photos/seed/event1/800/600', caption: 'Workshop Session' },
  { id: '5', url: 'https://picsum.photos/seed/office1/800/600', caption: 'Counseling Area' },
  { id: '6', url: 'https://picsum.photos/seed/group1/800/600', caption: 'Student Group' },
  { id: '7', url: 'https://picsum.photos/seed/tech1/800/600', caption: 'Advanced Equipment' },
  { id: '8', url: 'https://picsum.photos/seed/library1/800/600', caption: 'Institute Library' },
  { id: '9', url: 'https://picsum.photos/seed/campus1/800/600', caption: 'Campus Entrance' },
];

export default function Gallery() {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Institute <span className="text-indigo-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Glimpses of our infrastructure, events, and student activities at RGCC.
          </motion.p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-3xl break-inside-avoid shadow-lg"
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
