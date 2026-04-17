// ContactSectionWithContent.jsx
import React from 'react';
import { ContactForm } from '../ui/ContactForm';

const ContactSectionWithContent = ({ 
  title = "Let's Talk Business",
  description = "Have a project in mind or need a consultation? We're here to help. Reach out to us through any of the channels below or fill out the inquiry form, and our team will get back to you within 24 hours.",
  whatsappNumber = "+91 12345 67890",
  phoneNumber = "+91 12345 67890",
  email = "info@example.com",
  responseTime = "24 hours",
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${className}`}>
      
      {/* Left Side - Content */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {title}
          </h2>
          
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
          
          <div className="h-px bg-slate-200 my-4"></div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-700">Connect Instantly</h3>
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.032 0C5.384 0 0 5.384 0 12.032c0 2.112.552 4.192 1.6 5.984L0 24l6.048-1.568a11.97 11.97 0 005.984 1.6c6.648 0 12.032-5.384 12.032-12.032S18.68 0 12.032 0zm0 18.496a6.472 6.472 0 01-3.304-.904l-.472-.28-3.568.928.952-3.48-.296-.48a6.456 6.456 0 01-.992-3.464c0-3.568 2.904-6.472 6.472-6.472s6.472 2.904 6.472 6.472-2.904 6.472-6.472 6.472z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-green-600 font-medium">WhatsApp</p>
                <p className="text-slate-700 font-semibold">{whatsappNumber}</p>
              </div>
              <svg className="w-5 h-5 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            {/* Call */}
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-600 font-medium">Call Us</p>
                <p className="text-slate-700 font-semibold">{phoneNumber}</p>
              </div>
              <svg className="w-5 h-5 text-blue-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-purple-600 font-medium">Email Us</p>
                <p className="text-slate-700 font-semibold">{email}</p>
              </div>
              <svg className="w-5 h-5 text-purple-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response within {responseTime}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>100% confidential & secure</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Contact Form */}
      <div className="bg-slate-50 p-4 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
        <ContactForm compact={false} />
      </div>
      
    </div>
  );
};

export default ContactSectionWithContent;