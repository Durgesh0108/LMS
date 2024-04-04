import React from "react";

const AuthLayout = ({
    children
}: {children: React.ReactNode}) => {
    return ( 
        <div className="auth-layout flex justify-center items-center h-screen w-full border-2 m-auto">
            {children}
        </div>
     );
}
 
export default AuthLayout;