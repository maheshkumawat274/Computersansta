import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2, Monitor, Users, ShieldCheck } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { VisionMissionValues } from '../../components/about/VisionMission';

export default function About() {
  const highlights = [
    {
      title: 'Our Mission',
      content: 'To empower students by providing high-quality computer education and practical skills that prepare them for success in the digital era.',
      icon: Target,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Our Vision',
      content: 'To be the most trusted and preferred computer training institute in the region, recognized for excellence, innovation, and student success.',
      icon: Eye,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Our Values',
      content: 'Integrity, excellence, student-centricity, and continuous improvement are at the heart of everything we do at RGCC.',
      icon: Award,
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-100px] left-10 w-[300px] h-[300px] bg-indigo-500 rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            About Rajiv Gandhi Computer Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Empowering the next generation of digital professionals through excellence in technology education since 10 years.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <Section
        title="Who We Are"
        subtitle="Introduction"
        className="pb-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed">
              Located in the heart of Haryana, Rajiv Gandhi Computer Center (RGCC) has been a beacon of computer literacy and vocational training for over a decade. Our centers in <strong>Uchana</strong> and <strong>Alewa</strong> serve students from District Jind and beyond.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in providing a wide range of computer courses designed to meet the demands of both the government and private job sectors. From basic computer operations to advanced accounting and design, we offer comprehensive training tailored for every skill level.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                'ISO 9001:2015 Certified',
                'Experienced Faculty Members',
                'Advanced Computer Lab',
                '100% Practical Training',
                'Regular Skill Assessments',
                'Job Placement Assistance'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-indigo-600" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src="imgs/about.jpeg" 
                 alt="Training Lab" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl">
               <p className="text-4xl font-bold mb-1">10+</p>
               <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Legacy</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Mission Vision Values */}
      
      <VisionMissionValues/>
      
      {/* Infrastructure */}
      <Section
        title="Our Training Methodology"
        subtitle="How We Teach"
        center
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="bg-indigo-50 text-indigo-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Monitor size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Practical First</h4>
            <p className="text-slate-500 text-sm leading-relaxed px-4">
              We believe in learning by doing. 80% of our course time is spent on actual computer work.
            </p>
          </div>
          <div className="space-y-4">
             <div className="bg-emerald-50 text-emerald-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Users size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Small Batches</h4>
            <p className="text-slate-500 text-sm leading-relaxed px-4">
              Our small class sizes ensure that every student receives personalized attention from the trainer.
            </p>
          </div>
          <div className="space-y-4">
             <div className="bg-blue-50 text-blue-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Career Guidance</h4>
            <p className="text-slate-500 text-sm leading-relaxed px-4">
              We don't just teach courses; we build careers through interview prep and resume writing workshops.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
