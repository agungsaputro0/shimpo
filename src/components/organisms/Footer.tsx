import React from 'react';
import Logo from '../atoms/Logo';
import SocialIcon from '../atoms/SocialIcon';
import FooterInfo from '../molecules/FootersInfo';

const Footer: React.FC = () => {
  return (
   <footer className="footer bg-footerblue text-white">
  <div className="bg-footeruplist py-2">
    <ul className="flex justify-center space-x-6 text-sm text-white mr-[10px] ml-[10px]">
    {/* <ul className="flex justify-center space-x-6 text-sm text-white sm:space-x-4 sm:flex-col xs:items-center"> */}
      <li><a href="#" className="hover:text-cyan-300">Peta Situs</a></li>
      <li><a href="#" className="hover:text-cyan-300">Hubungi Kami</a></li>
      <li><a href="#" className="hover:text-cyan-300">Kebijakan Privasi</a></li>
      <li><a href="#" className="hover:text-cyan-300">Syarat dan Ketentuan</a></li>
    </ul>
  </div>

  <div className="container mx-auto py-4 flex flex-col items-center lg:flex-row lg:justify-between">
    <div className="footer-left text-center lg:text-left">
      <Logo />
      <FooterInfo />
    </div>
    <div className="footer-right text-center mt-4 lg:mt-0">
      <h4 className="mb-2">Ikuti Kami</h4>
      <SocialIcon />
    </div>
  </div>
</footer>

  );
};

export default Footer;
