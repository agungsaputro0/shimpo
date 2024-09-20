// components/atoms/SocialIcon.tsx
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';

const SocialIcon: React.FC = () => {
  return (
    <div className="social-icons">
      <FacebookOutlined style={{ fontSize: '24px', margin: '0 10px', color: 'white' }} />
      <TwitterOutlined style={{ fontSize: '24px', margin: '0 10px', color: 'white' }} />
      <YoutubeOutlined style={{ fontSize: '24px', margin: '0 10px', color: 'white' }} />
    </div>
  );
};

export default SocialIcon;
