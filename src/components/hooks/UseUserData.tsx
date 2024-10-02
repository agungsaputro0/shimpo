import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { message } from 'antd'; 

const UseUserData = (baseURL?: string) => { 
  if (!baseURL) {
    console.error("Base URL is not defined.");
    message.error('Tidak terkoneksi ke API.');
    return { userName: null, loading: false };
  }

  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseURL}/me`, { withCredentials: true });
        setUserName(response.data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserName(null);
        router.push('/Login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [baseURL, router]);

  return { userName, loading };
};

export default UseUserData;
