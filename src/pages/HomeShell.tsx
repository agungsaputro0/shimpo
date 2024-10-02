import React, { useEffect, useState } from "react";
import HomeNavbar from "@/components/organisms/HomeNavbar";
import UseUserData from "@/components/hooks/UseUserData";
import { message } from "antd"; 
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import Sidebar from "@/components/organisms/Sidebar";

type AppShellProps = {
    children: React.ReactNode;
}

const Homeshell = (props: AppShellProps) => {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const { userName, loading } = UseUserData(baseURL);

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!loading && !userName) {
            message.error('Silakan login untuk melanjutkan.');
        }
    }, [loading, userName]);

    if (loading) {
        return <LoadingSpinner />;
    }

    const { children } = props;

    return (
        <main className="flex flex-col bg-[url('/assets/img/background_landing.jpg')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full overflow-y-auto">
            {/* Navbar */}
            <HomeNavbar userName={userName} />
    
            <div className="flex flex-1">
                {/* Sidebar */}
                <div 
                    className={`sidebar ${expanded ? 'sidebar-expanded' : ''} bg-transparent shadow-md h-full`}
                    onMouseEnter={() => setExpanded(true)}
                    onMouseLeave={() => setExpanded(false)}
                >
                <Sidebar />
                </div>
    
                {/* Content Area */}
                <div className="flex-1 p-6 overflow-y-auto transition-all duration-300">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Homeshell;
