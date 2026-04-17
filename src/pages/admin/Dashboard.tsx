import React, { useMemo } from 'react';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { adminStore } from '../../lib/adminStore';
import { AdminLayout } from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  const queries = useMemo(() => adminStore.getQueries(), []);

  const stats = useMemo(() => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

    return [
      { 
        label: 'Total Queries', 
        value: queries.length, 
        icon: MessageSquare, 
        color: 'text-indigo-600', 
        bg: 'bg-indigo-50',
        trend: '+12% from last month'
      },
      { 
        label: 'This Week', 
        value: queries.filter(q => new Date(q.createdAt) >= oneWeekAgo).length, 
        icon: Clock, 
        color: 'text-emerald-600', 
        bg: 'bg-emerald-50',
        trend: 'High engagement'
      },
      { 
        label: 'This Month', 
        value: queries.filter(q => new Date(q.createdAt) >= oneMonthAgo).length, 
        icon: Calendar, 
        color: 'text-blue-600', 
        bg: 'bg-blue-50',
        trend: 'Steady growth'
      },
      { 
        label: 'Yearly Trend', 
        value: queries.filter(q => new Date(q.createdAt) >= oneYearAgo).length, 
        icon: TrendingUp, 
        color: 'text-amber-600', 
        bg: 'bg-amber-50',
        trend: 'Annual overview'
      },
    ];
  }, [queries]);

  // Mock chart data based on queries
  const chartData = useMemo(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      name: day,
      queries: Math.floor(Math.random() * 20) + 5 // Randomized for visual impact
    }));
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8 pb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 font-medium">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg flex items-center space-x-1">
                  <span className="text-[10px] font-bold">LIVE</span>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-[10px] font-bold text-slate-400 flex items-center">
                <ArrowUpRight size={14} className="mr-1 text-emerald-500" />
                {stat.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900">Weekly Activity</h3>
              <select className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-bold text-slate-600 focus:outline-hidden">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                      backgroundColor: '#fff',
                      padding: '12px 16px'
                    }}
                    labelStyle={{ fontWeight: 800, color: '#1e293b', marginBottom: '4px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="queries" 
                    stroke="#4f46e5" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorQueries)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {queries.slice(0, 4).map((query, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
                    {query.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{query.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">New query for {query.course}</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-widest">
                       {new Date(query.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
              {queries.length === 0 && (
                <div className="text-center py-10">
                   <p className="text-sm text-slate-400 font-medium">No activity yet</p>
                </div>
              )}
            </div>
            <button className="w-full mt-8 py-4 border-2 border-dashed border-slate-100 rounded-2xl text-xs font-bold text-slate-400 hover:border-indigo-200 hover:text-indigo-600 transition-all">
              View Activity Log
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
