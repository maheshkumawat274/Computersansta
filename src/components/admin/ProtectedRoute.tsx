import React from 'react';
import { Navigate } from 'react-router-dom';
import { adminStore } from '../../lib/adminStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!adminStore.isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
