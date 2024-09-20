import React from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

type AppShellProps = {
   children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <div className="bg-[url('/assets/img/background_V2.jpg')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full overflow-hidden overflow-y-auto">
                <Navbar />
                {children}
                <Footer />
            </div>
        </main>
    )
}

export default AppShell;