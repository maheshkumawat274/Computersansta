import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/header/Navbar';
import { Footer } from './components/footer/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { FloatingActions } from './components/ui/FloatingActions';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Courses from './pages/courses/Courses';
import Gallery from './pages/gallery/Gallery';
import CourseDetail from './pages/course-detail/CourseDetail';
import Contact from './pages/contact/Contact';
import AdminDashboard from './pages/admin/Dashboard';
import AdminQueries from './pages/admin/Queries';
import AdminLogin from './pages/admin/Login';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/queries" element={
            <ProtectedRoute>
              <AdminQueries />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingActions />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
