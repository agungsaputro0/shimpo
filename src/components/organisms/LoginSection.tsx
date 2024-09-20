import React from "react";
type LoginSectionProps = {
    children: React.ReactNode;
 }

const LoginSection = (props: LoginSectionProps) => {
    const { children } = props;
    return (
        <div className="flex flex-row flex-wrap">
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default LoginSection;