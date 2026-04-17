import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { Course } from '../../types';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: Course;
  key?: string | number;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm flex items-center gap-1.5">
          <Clock size={12} />
          {course.duration}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-6 flex-grow">
          {course.description}
        </p>
        
        <Link to={`/courses/${course.id}`} className="mt-auto">
          <Button variant="outline" size="sm" className="w-full group">
            Explore Course
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
