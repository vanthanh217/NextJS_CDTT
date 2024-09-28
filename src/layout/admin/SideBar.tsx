'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/images/Logo.png';
import SideBarMenu from './SideBarMenu';
import { dashboardConfigMenu, dashboardMenu } from '@/constants';
import { IconDashBoard } from '@/components/icons';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { LogOut } from 'lucide-react';

interface SideBarProps {
    isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
    return (
        <aside className="relative w-[280px] border-r border-dashed border-dashboadBorder text-[#5b6b79]">
            <div className="flex flex-col">
                <div className="flex items-center justify-start py-2 pl-6">
                    <Link href={'/admin'} className="select-none">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="w-[200px] object-cover"
                        />
                    </Link>
                </div>
                <div className="h-screen flex-grow overflow-hidden">
                    <div className="mb-1 pt-4">
                        <div className="mb-3 pl-6">
                            <h5 className="text-sm font-semibold uppercase text-dark">
                                Dashboard
                            </h5>
                        </div>
                        <Link
                            href={'/admin'}
                            className="mx-[10px] my-1 flex items-center gap-x-3 rounded-lg p-[8px_16px_8px_20px] hover:bg-primary/10 hover:text-primary"
                        >
                            <IconDashBoard className={twMerge('size-5')} />
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <>
                        <SideBarMenu
                            isOpen={isOpen}
                            list={dashboardMenu}
                            className="border-y border-dashboadBorder/70 py-[10px]"
                        />
                        <SideBarMenu
                            isOpen={isOpen}
                            list={dashboardConfigMenu}
                            className="mt-3"
                        />
                    </>
                </div>
            </div>
            <div className="fixed bottom-0 w-[279px] border-t-2 border-dashboadBorder/65 bg-slate-50 px-6 py-[10px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <div className="size-[50px] overflow-hidden rounded-full">
                            <Image
                                src={
                                    'https://images.unsplash.com/photo-1644346858125-42441da5c230?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                }
                                alt=""
                                width={50}
                                height={50}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-dark">Kent</span>
                            <span className="text-sm">Admin</span>
                        </div>
                    </div>
                    <span className="cursor-pointer rounded-lg p-[10px] text-destructive/90 hover:bg-destructive/10">
                        <LogOut />
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
