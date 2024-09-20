// LoginTemplate.tsx
import React from 'react';
import LoginSection from '../organisms/LoginSection';

type LoginTemplateProps = {
  children: React.ReactNode;
};

const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
  return (
    <div>
      <LoginSection>
        {children}
      </LoginSection>
    </div>
  );
};

export default LoginTemplate;
