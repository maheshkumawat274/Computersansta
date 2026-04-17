import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, GraduationCap, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { adminStore } from '../../lib/adminStore';
import { Button } from '../../components/ui/Button';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminStore.login(username, password)) {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-2 group mb-6">
            <div className="bg-indigo-600 text-white p-3 rounded-2xl group-hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              <GraduationCap size={32} />
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Admin Portal</h1>
          <p className="text-slate-500 mt-2 font-medium uppercase tracking-widest text-[10px]">Rajiv Gandhi Computer Center</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  required
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900"
                  placeholder="admin@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full py-5 text-lg shadow-xl shadow-indigo-100">
              Sign In to Admin
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-50 text-center">
            <Link to="/" className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest text-[10px]">
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
