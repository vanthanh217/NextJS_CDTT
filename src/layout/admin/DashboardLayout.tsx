'use client';
import React, { useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex gap-x-5 bg-slate-50 text-base">
            <SideBar isOpen={isSidebarOpen} />
            <main className="flex-1 transition-all duration-300 ease-linear">
                <Header toggleSidebar={toggleSidebar} />
                <section className="px-4">{children}</section>
            </main>
        </div>
    );
};

export default DashboardLayout;
