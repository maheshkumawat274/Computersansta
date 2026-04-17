import React from 'react';
import { Section } from '../../components/ui/Section';
import { CourseCard } from '../../components/courses/CourseCard';
import { courses } from '../../data/courses';
import { motion } from 'motion/react';

export default function Courses() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-indigo-600 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Our Training Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-2xl mx-auto"
          >
            Choose from our specialized range of industry-aligned courses designed to boost your skills and career.
          </motion.p>
        </div>
      </section>

      {/* Course Grid */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Section>

      {/* Course Enrollment Info */}
      <Section
        title="Still confused which course is right for you?"
        subtitle="Free Counseling"
        center
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xl text-slate-600 leading-relaxed">
            Visit our center today for a free career counseling session. Our expert counselors will help you choose the right course based on your educational background and career goals.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
             <div className="flex items-center space-x-3 text-slate-900 font-bold">
               <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
                 Call
               </div>
               <span className="text-2xl">+91 9306526532</span>
             </div>
             <p className="text-slate-400 font-bold hidden sm:block">OR</p>
             <div className="flex items-center space-x-3 text-slate-900 font-bold">
               <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
                 Chat
               </div>
               <span className="text-2xl">Visit Campus</span>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
