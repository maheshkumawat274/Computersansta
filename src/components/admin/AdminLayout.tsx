import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  User,
  ExternalLink
} from 'lucide-react';
import { adminStore } from '../../lib/adminStore';
import { cn } from '../ui/utils';
import { ContactQuery } from '../../types';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [unreadQueries, setUnreadQueries] = useState<ContactQuery[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchQueries = () => {
      const all = adminStore.getQueries();
      setUnreadQueries(all.filter(q => !q.isRead));
    };
    fetchQueries();
    
    // Refresh periodically for mock "real-time"
    const interval = setInterval(fetchQueries, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    adminStore.logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Queries', icon: MessageSquare, path: '/admin/queries' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0",
        !isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                <User size={20} />
              </div>
              <span className="font-bold text-slate-900 tracking-tight">RGCC Admin</span>
            </Link>
            <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  location.pathname === item.path 
                    ? "bg-indigo-50 text-indigo-600 shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
                {item.name === 'Queries' && unreadQueries.length > 0 && (
                  <span className="ml-auto bg-indigo-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {unreadQueries.length}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <Link 
              to="/" 
              target="_blank"
              className="flex items-center space-x-3 px-4 py-3 text-sm font-bold text-slate-500 hover:text-indigo-600 rounded-xl transition-colors mb-2"
            >
              <ExternalLink size={20} />
              <span>View Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-rose-500 hover:bg-rose-50 transition-all"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between sticky top-0 z-30">
          <button 
            className="p-2 text-slate-500 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center space-x-4 ml-auto">
            {/* Notifications */}
            <div className="relative">
              <button 
                className="p-2 text-slate-500 hover:bg-slate-50 rounded-full relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={22} />
                {unreadQueries.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full" />
                )}
              </button>

              {/* Notification Dropdown (Instagram-style) */}
              {showNotifications && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl z-20 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                      <h3 className="font-bold text-slate-900">Notifications</h3>
                      <Link to="/admin/queries" className="text-xs font-bold text-indigo-600 hover:underline">View all</Link>
                    </div>
                    <div className="max-h-[400px] overflow-y-auto">
                      {unreadQueries.length === 0 ? (
                        <div className="p-8 text-center">
                          <p className="text-sm text-slate-400 font-medium">No new inquiries</p>
                        </div>
                      ) : (
                        unreadQueries.slice(0, 5).map((query) => (
                          <Link
                            key={query.id}
                            to="/admin/queries"
                            className="p-4 block hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                            onClick={() => {
                              adminStore.markAsRead(query.id);
                              setShowNotifications(false);
                            }}
                          >
                            <div className="flex space-x-3">
                              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
                                {query.name.charAt(0)}
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-bold text-slate-900 truncate">{query.name}</p>
                                <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                                  Interested in <span className="text-indigo-600 font-bold">{query.course}</span>
                                </p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">
                                  {new Date(query.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div className="flex items-center space-x-3 px-2">
              <div className="hidden sm:block text-right">
                <p className="text-xs font-bold text-slate-900">Administrator</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Main Office</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <User size={20} className="text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
