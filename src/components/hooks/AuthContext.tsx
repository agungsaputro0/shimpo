import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout as logoutAction } from '@/store/authSlice'; // Pastikan path ini sesuai

type AuthContextType = {
  userName: string | null;
  userType: string | null;
  loading: boolean;
  login: (user: string, type: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!baseURL) {
        console.error("Base URL is not defined.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/me`, { withCredentials: true });
        if (response.data && response.data.name) {
          setUserName(response.data.name);
          setUserType(response.data.tipe); 
          dispatch(loginSuccess(response.data.name));
        } else {
          throw new Error("User name not found in response");
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserName(null);
        setUserType(null);
        dispatch(logoutAction()); // Gunakan logoutAction
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [baseURL, dispatch]);

  const login = (user: string, type: string) => {
    setUserName(user);
    setUserType(type);
    dispatch(loginSuccess(user));
  };

  const logout = () => {
    setUserName(null);
    setUserType(null);
    dispatch(logoutAction()); // Gunakan logoutAction
    router.push('/Login');
  };

  return (
    <AuthContext.Provider value={{ userName, userType, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
