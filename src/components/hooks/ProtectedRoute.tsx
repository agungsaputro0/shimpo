// src/components/hooks/ProtectedRoute.tsx
import React from 'react';
import { useAuth } from './AuthContext';
import { message } from 'antd';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { userName, userType, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!userName) {
    message.error('Silakan login untuk melanjutkan.');
    router.push('/Login');
    return null;
  }

  if (userType !== 'pegawai') {  
    //message.error('Anda tidak memiliki akses ke halaman ini.');
    router.push('/Portal'); 
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
