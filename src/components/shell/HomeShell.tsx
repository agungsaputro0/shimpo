// src/components/shell/HomeShell.tsx
import React, { useState } from 'react';
import HomeNavbar from '@/components/organisms/HomeNavbar';
import Sidebar from '@/components/organisms/Sidebar';
import { useAuth } from '../hooks/AuthContext';

type AppShellProps = {
    children: React.ReactNode;
}

const Homeshell = (props: AppShellProps) => {
    const [expanded, setExpanded] = useState(false);
    const { userName, loading } = useAuth();

    return (
        <main className="flex flex-col bg-[url('/assets/img/background_landing.jpg')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full overflow-y-auto">
            <HomeNavbar userName={userName} />
    
            <div className="flex flex-1">
                <div 
                    className={`sidebar ${expanded ? 'sidebar-expanded' : ''} bg-transparent shadow-md h-full`}
                    onMouseEnter={() => setExpanded(true)}
                    onMouseLeave={() => setExpanded(false)}
                >
                <Sidebar />
                </div>
    
                <div className="flex-1 p-6 overflow-y-auto transition-all duration-300">
                    {props.children}
                </div>
            </div>
        </main>
    );
};


export default Homeshell;
