import React from "react";
import HomeNavbar from "@/components/organisms/HomeNavbar";

type AppShellProps = {
   children: React.ReactNode;
}

const Homeshell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <div className="bg-[url('/assets/img/background_landing.jpg')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-full overflow-hidden overflow-y-auto">
                <HomeNavbar />
                {children}
            </div>
        </main>
    )
}

export default Homeshell;