//import 'antd/dist/reset.css'; // Pastikan path ini benar
import '../styles/globals.css'; // Import CSS global Anda
import { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
