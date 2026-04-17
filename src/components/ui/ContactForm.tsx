import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { courses } from '../../data/courses';
import { adminStore } from '../../lib/adminStore';

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Select a course',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Save to admin store
    adminStore.addQuery({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message || 'No additional details provided'
    });

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', course: 'Select a course', message: '' });
    }, 1200);
  };

  if (formStatus === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="bg-green-100 text-green-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Inquiry Received!</h2>
        <p className="text-slate-600 mb-8 max-w-sm mx-auto text-sm">
          Thank you for your interest. Our academic counselor will call you within 24 hours.
        </p>
        <Button onClick={() => setFormStatus('idle')} variant="outline" size="sm">
          Send another inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-6"}>
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Your Full Name</label>
        <input 
          required
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="John Doe"
          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
        <input 
          required
          type="email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="yourname@gmail.com"
          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900"
        />
      </div>
      
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Mobile Number</label>
        <input 
          required
          type="tel" 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="93065XXXXX"
          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900"
        />
      </div>
      
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Interested Course</label>
        <div className="relative">
          <select 
            value={formData.course}
            onChange={(e) => setFormData({...formData, course: e.target.value})}
            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium appearance-none text-slate-900"
          >
            <option disabled value="Select a course">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.title}>{course.title}</option>
            ))}
            <option value="Other Certification">Other / Custom Certification</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <MessageSquare size={16} />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Message (Optional)</label>
        <textarea 
          rows={compact ? 2 : 4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Tell us about your learning goals..."
          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900"
        ></textarea>
      </div>

      <Button 
        type="submit" 
        className="w-full py-4 text-base font-bold shadow-lg shadow-indigo-100" 
        disabled={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
        <Send size={18} className="ml-2" />
      </Button>
    </form>
  );
}
