// pages/index.tsx

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/Welcome',  // Arahkan ke halaman Login
      permanent: false,  // Atur apakah ini redirect permanen (301) atau sementara (307)
    },
  };
};

const HomePage = () => {
  return null;  // Tidak perlu konten karena akan di-redirect
};

export default HomePage;
