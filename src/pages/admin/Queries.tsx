import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Trash2, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  Filter,
  CheckSquare,
  Square,
  MessageSquare
} from 'lucide-react';
import { adminStore } from '../../lib/adminStore';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ContactQuery } from '../../types';
import { cn } from '../../components/ui/utils';

export default function AdminQueries() {
  const [queries, setQueries] = useState<ContactQuery[]>(adminStore.getQueries());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const filteredQueries = useMemo(() => {
    return [...queries]
      .filter(q => {
        const matchesSearch = q.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            q.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            q.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' ? true : 
                            filter === 'unread' ? !q.isRead : q.isRead;
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [queries, searchTerm, filter]);

  const toggleSelectAll = () => {
    if (filteredQueries.length === 0) return;
    if (selectedIds.length === filteredQueries.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredQueries.map(q => q.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return;
    adminStore.deleteQueries(selectedIds);
    setQueries(adminStore.getQueries());
    setSelectedIds([]);
  };

  const handleMarkAsRead = (id: string | string[]) => {
    const ids = Array.isArray(id) ? id : [id];
    ids.forEach(i => adminStore.markAsRead(i));
    setQueries(adminStore.getQueries());
    if (Array.isArray(id)) setSelectedIds([]);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Contact Queries</h1>
            <p className="text-slate-500 font-medium">Manage and respond to student inquiries.</p>
          </div>
          
          <div className="flex items-center space-x-3">
             {selectedIds.length > 0 && (
               <>
                 <button
                   onClick={() => handleMarkAsRead(selectedIds)}
                   className="flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-4 py-2.5 rounded-xl text-sm font-bold border border-emerald-100 hover:bg-emerald-100 transition-colors"
                 >
                   <CheckCircle2 size={18} />
                   <span>Mark Read ({selectedIds.length})</span>
                 </button>
                 <button
                   onClick={handleDeleteSelected}
                   className="flex items-center space-x-2 bg-rose-50 text-rose-600 px-4 py-2.5 rounded-xl text-sm font-bold border border-rose-100 hover:bg-rose-100 transition-colors"
                 >
                   <Trash2 size={18} />
                   <span>Delete ({selectedIds.length})</span>
                 </button>
               </>
             )}
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search by name or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
            />
          </div>
          
          <div className="flex items-center space-x-2 shrink-0">
            <Filter size={18} className="text-slate-400 mr-2" />
            {(['all', 'unread', 'read'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 text-xs font-extrabold rounded-lg uppercase tracking-widest transition-all",
                  filter === f ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" : "bg-white text-slate-400 border border-slate-100 hover:bg-slate-50"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Queries Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-5 w-12">
                    <button onClick={toggleSelectAll} className="text-slate-400 hover:text-indigo-600">
                      {selectedIds.length > 0 && selectedIds.length === filteredQueries.length ? (
                        <CheckSquare size={20} className="text-indigo-600" />
                      ) : (
                        <Square size={20} />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest">Student Info</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest">Course</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest text-center">Inquiry Message</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredQueries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-20 text-center">
                      <div className="flex flex-col items-center">
                        <MessageSquare size={48} className="text-slate-100 mb-4" />
                        <p className="text-slate-400 font-bold">No queries found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredQueries.map((query) => (
                    <tr 
                      key={query.id} 
                      className={cn(
                        "group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0",
                        !query.isRead ? "bg-indigo-50/10" : "bg-white"
                      )}
                    >
                      <td className="p-5">
                        <button onClick={() => toggleSelectOne(query.id)} className="text-slate-300 hover:text-indigo-600">
                          {selectedIds.includes(query.id) ? (
                            <CheckSquare size={20} className="text-indigo-600" />
                          ) : (
                            <Square size={20} />
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs uppercase shrink-0">
                            {query.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="font-extrabold text-slate-900 leading-tight truncate">{query.name}</p>
                            <p className="text-[10px] text-slate-500 font-bold">{query.email || 'N/A'}</p>
                            <p className="text-[10px] text-slate-400 font-medium">{query.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                         <span className="inline-flex px-3 py-1 bg-white border border-slate-100 rounded-lg text-xs font-bold text-slate-600">
                           {query.course}
                         </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="max-w-[200px] text-xs text-slate-600 font-medium bg-slate-50 p-2 rounded-xl italic line-clamp-2">
                           "{query.message}"
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">
                          {new Date(query.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                          {new Date(query.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </td>
                      <td className="px-6 py-5">
                         {!query.isRead ? (
                           <span className="flex items-center text-amber-500 text-[10px] font-extrabold uppercase tracking-widest gap-1.5 bg-amber-50 px-3 py-1 rounded-full w-fit">
                             <Clock size={12} /> Unread
                           </span>
                         ) : (
                           <span className="flex items-center text-emerald-500 text-[10px] font-extrabold uppercase tracking-widest gap-1.5 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                             <CheckCircle2 size={12} /> Read
                           </span>
                         )}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end space-x-2">
                           {!query.isRead && (
                             <button
                               onClick={() => handleMarkAsRead(query.id)}
                               className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all"
                               title="Mark as Read"
                             >
                                <CheckCircle2 size={18} />
                             </button>
                           )}
                           <button 
                             className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                             onClick={() => {
                               adminStore.deleteQueries([query.id]);
                               setQueries(adminStore.getQueries());
                             }}
                             title="Delete Inquiry"
                           >
                             <Trash2 size={18} />
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
