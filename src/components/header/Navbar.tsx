import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Monitor, GraduationCap } from 'lucide-react';
import { courses } from '../../data/courses';
import { Button } from '../ui/Button';
import { cn } from '../ui/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setCoursesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-indigo-600 text-white p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-tight">RGCC</span>
              <span className="text-[10px] text-indigo-600 font-semibold uppercase tracking-widest leading-none">Uchana · Alewa</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-bold transition-colors hover:text-indigo-600 uppercase tracking-wide',
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative group">
              <button
                className={cn(
                  'flex items-center text-sm font-bold transition-colors hover:text-indigo-600 uppercase tracking-wide',
                  location.pathname.startsWith('/courses') ? 'text-indigo-600' : 'text-slate-600'
                )}
                onMouseEnter={() => setCoursesOpen(true)}
              >
                Courses <ChevronDown size={14} className="ml-1" />
              </button>

              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl py-6 px-6 border border-slate-100 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 grid grid-cols-2 gap-x-4 gap-y-1'
                )}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-600 hover:text-indigo-600 line-clamp-1"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact">
              <Button size="sm">Admission Open</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-y-auto fixed top-[80px] left-0 right-0 z-40"
          >
            <div className="px-4 pt-4 pb-32 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}

              <div className="py-2">
                <button 
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="w-full flex justify-between items-center px-3 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
                >
                  <span>Our Courses</span>
                  <ChevronDown size={20} className={cn("transition-transform duration-300", coursesOpen ? "rotate-180" : "")} />
                </button>
                
                <AnimatePresence>
                  {coursesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1 space-y-1 bg-slate-50 rounded-xl mx-2 overflow-hidden"
                    >
                      {courses.map((course) => (
                        <Link
                          key={course.id}
                          to={`/courses/${course.id}`}
                          className="block px-6 py-3 text-sm font-semibold text-slate-600 hover:text-indigo-600"
                        >
                          {course.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6 px-3">
                <Link to="/contact">
                  <Button className="w-full py-4 text-lg">Enroll Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
