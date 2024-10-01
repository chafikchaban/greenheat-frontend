import React from 'react';
import NavBar from '../components/NavBar/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

export default Layout;