import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="bg-[url('/assets/img/background_landing.jpg')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full overflow-hidden overflow-y-auto flex items-center justify-center h-screen">
            <Spin size="large" />
        </div>
    );
};

export default LoadingSpinner;
