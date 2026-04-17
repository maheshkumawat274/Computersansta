import { ContactQuery } from '../types';

const QUERIES_KEY = 'rgcc_contact_queries';
const AUTH_KEY = 'rgcc_admin_auth';

export const adminStore = {
  // Queries
  getQueries: (): ContactQuery[] => {
    const data = localStorage.getItem(QUERIES_KEY);
    return data ? JSON.parse(data) : [];
  },
  
  addQuery: (query: Omit<ContactQuery, 'id' | 'createdAt' | 'isRead'>) => {
    const queries = adminStore.getQueries();
    const newQuery: ContactQuery = {
      ...query,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      isRead: false
    };
    localStorage.setItem(QUERIES_KEY, JSON.stringify([newQuery, ...queries]));
    return newQuery;
  },

  deleteQueries: (ids: string[]) => {
    const queries = adminStore.getQueries();
    const filtered = queries.filter(q => !ids.includes(q.id));
    localStorage.setItem(QUERIES_KEY, JSON.stringify(filtered));
  },

  markAsRead: (id: string) => {
    const queries = adminStore.getQueries();
    const updated = queries.map(q => q.id === id ? { ...q, isRead: true } : q);
    localStorage.setItem(QUERIES_KEY, JSON.stringify(updated));
  },

  // Auth
  login: (username: string, password: string): boolean => {
    if (username === 'admin@gmail.com' && password === 'admin@123') {
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  isLoggedIn: (): boolean => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  }
};
