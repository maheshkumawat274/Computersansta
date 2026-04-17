import { Link } from 'react-router-dom';
import { GraduationCap, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 text-white p-2 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">RGCC</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Rajiv Gandhi Computer Center is dedicated to providing high-quality computer education to empower the youth for a digital future.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition-colors">🌐</a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition-colors">📸</a>
              <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition-colors">🐦</a>
              <a href="#" aria-label="YouTube" className="hover:text-indigo-400 transition-colors">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Our Courses</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-white font-bold mb-6">Popular Courses</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses/computer-course" className="hover:text-indigo-400 transition-colors">Basic Computer</Link></li>
              <li><Link to="/courses/tally" className="hover:text-indigo-400 transition-colors">Tally Prime</Link></li>
              <li><Link to="/courses/advance-excel" className="hover:text-indigo-400 transition-colors">Advance Excel</Link></li>
              <li><Link to="/courses/gst" className="hover:text-indigo-400 transition-colors">GST Certification</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                <span>Uchana, Alewa, District Jind, Haryana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <span>+91 9306526532</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {currentYear} Rajiv Gandhi Computer Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
