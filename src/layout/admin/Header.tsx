'use client';

import { Input } from '@/components/ui/input';
import { LogOut, MenuIcon, Search } from 'lucide-react';
import React from 'react';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="mb-7 w-full">
            <div className="flex items-center justify-between px-16 py-3">
                <div className="flex items-center gap-x-5">
                    <span
                        className="cursor-pointer select-none rounded-xlg bg-slate-500/5 p-[10px] text-[#5b6b79] hover:bg-slate-500/30"
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </span>
                    <div className="flex items-center rounded-lg border border-input pl-3 focus-within:border-primary/70 hover:border-primary/70">
                        <Search strokeWidth={1.5} />
                        <Input
                            className="h-10 rounded-none border-none shadow-none focus-visible:right-0 focus-visible:ring-transparent"
                            placeholder="Ctrl + K"
                        />
                    </div>
                </div>
                <div className="cursor-pointer select-none rounded-xlg p-3 text-destructive/90 hover:bg-destructive/15">
                    <LogOut />
                </div>
            </div>
        </header>
    );
};

export default Header;
