import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, ArrowLeft, Phone, Share2, Calendar } from 'lucide-react';
import { courses } from '../../data/courses';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <Navigate to="/courses" />;
  }

  return (
    <div className="pt-20">
      {/* Dynamic Header */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full text-center">
             <Link 
               to="/courses" 
               className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest gap-2"
             >
               <ArrowLeft size={16} /> Back to Courses
             </Link>
             <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
               {course.title}
             </h1>
             <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
               <div className="flex items-center gap-2">
                 <Clock size={20} className="text-indigo-400" />
                 <span className="font-bold">{course.duration}</span>
               </div>
               <div className="flex items-center gap-2">
                 <Calendar size={20} className="text-indigo-400" />
                 <span className="font-bold">New Batch Starting Soon</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Description</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What you will learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 space-x-4">
                    <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg font-medium text-slate-800 leading-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
               <div className="flex flex-col md:flex-row items-center gap-8">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
                    <img 
                      src="https://picsum.photos/seed/cert/200/200" 
                      alt="Certificate"
                      className="w-32 h-auto"
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 <div className="text-center md:text-left">
                   <h3 className="text-2xl font-bold text-slate-900 mb-3">Earn Your Certification</h3>
                   <p className="text-slate-600 leading-relaxed">
                     Upon successful completion of the course and assessment, you will receive an industry-recognized certificate from Rajiv Gandhi Computer Center.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 sticky top-32">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Enrollment Info</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <span className="text-slate-500 font-medium tracking-wide text-sm uppercase">Duration</span>
                  <span className="font-bold text-slate-900">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <span className="text-slate-500 font-medium tracking-wide text-sm uppercase">Mode</span>
                  <span className="font-bold text-indigo-600">Hybrid / Online</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <span className="text-slate-500 font-medium tracking-wide text-sm uppercase">Level</span>
                  <span className="font-bold text-slate-900">Beginner to Adv</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/contact">
                  <Button className="w-full py-6" size="lg">Enroll Now</Button>
                </Link>
                <div className="flex gap-4">
                   <a href="tel:9306526532" className="flex-1">
                    <Button variant="outline" className="w-full"><Phone size={18} /></Button>
                   </a>
                   <Button variant="outline" className="flex-1"><Share2 size={18} /></Button>
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-slate-400 font-medium uppercase tracking-widest">
                Call for Fee Details
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
