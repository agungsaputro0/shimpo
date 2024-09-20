import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/assets/img/logo-kemenkeu.png" 
        alt="Logo Kementerian Keuangan"
        width={80}
        height={80}
      />
      <div style={{ color: 'white' }}>
        <h3><b>KEMENTERIAN KEUANGAN</b></h3>
        <h5>Republik Indonesia</h5>
      </div>
    </div>
  );
};

export default Logo;
