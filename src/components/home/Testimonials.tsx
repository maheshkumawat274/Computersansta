import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Section } from '../ui/Section';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    content: "RGCC provided me with the practical skills I needed to land my first job. The industry-focused curriculum and expert guidance are exceptional.",
    avatar: "https://picsum.photos/seed/std1/100/100"
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Tally Expert",
    content: "The Tally and GST course here is very comprehensive. I gained a lot of confidence in accounting and taxation. Highly recommended!",
    avatar: "https://picsum.photos/seed/std2/100/100"
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Data Analyst",
    content: "Advance Excel course was a game-changer for my career. The faculty at Rajiv Gandhi Computer Center is very supportive and knowledgeable.",
    avatar: "https://picsum.photos/seed/std3/100/100"
  },
  {
    id: 4,
    name: "Sonia Devi",
    role: "Beauty Professional",
    content: "The Beauty Parlour course helped me start my own salon. The practical training and business tips provided were exactly what I needed.",
    avatar: "https://picsum.photos/seed/std4/100/100"
  },
  {
    id: 5,
    name: "Deepak Singh",
    role: "Software Engineer",
    content: "Learning C and C++ at RGCC laid a strong foundation for my coding career. The labs are well-equipped and teaching method is great.",
    avatar: "https://picsum.photos/seed/std5/100/100"
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Digital Artist",
    content: "DTP and Graphic Design courses here are very creative. I learned exactly the tools that are used in the industry today.",
    avatar: "https://picsum.photos/seed/std6/100/100"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <Section
      title="What Our Students Say"
      subtitle="Success Stories"
      className="bg-slate-50 overflow-hidden"
      center
    >
      <div className="relative max-w-4xl mx-auto px-4 py-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-100 scale-150 -z-10">
          <Quote size={200} />
        </div>

        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 }
              }}
              className="absolute w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 -z-10 opacity-20" />
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover shadow-lg border-4 border-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-xl shadow-lg">
                  <Quote size={16} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <button
            onClick={slidePrev}
            className="p-3 rounded-full bg-white shadow-md border border-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-indigo-600" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={slideNext}
            className="p-3 rounded-full bg-white shadow-md border border-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
}
