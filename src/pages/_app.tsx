//import 'antd/dist/reset.css'; // Pastikan path ini benar
import '../styles/globals.css'; 
import { Provider } from 'react-redux';
import { AuthProvider } from '@/components/hooks/AuthContext';
import store from '@/store';
import { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
