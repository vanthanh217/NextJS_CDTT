'use client';

import { TDashBoardMenu } from '@/type';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const SideBarMenu: React.FC<{
    list: TDashBoardMenu[];
    className?: string;
    isOpen?: boolean;
}> = ({ list, className }) => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    const menuRef = useRef<HTMLDivElement>(null);
    const sideBarTitleStyles = 'text-sm font-semibold uppercase text-dark';

    const toggleSubMenu = (title: string) => {
        setOpenMenus((prev) => ({
            [title]: !prev[title],
        }));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setOpenMenus({});
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={twMerge('mt-2', className)}>
            <div className="mb-3 pl-6">
                <h5 className={sideBarTitleStyles}>Pages</h5>
            </div>
            <ul className="*:mx-[10px] *:my-1 *:cursor-pointer *:select-none">
                {list.map((item, index) =>
                    item.subMenu ? (
                        <li
                            key={index}
                            className="relative"
                            onClick={() =>
                                item.subMenu && toggleSubMenu(item.title)
                            }
                        >
                            <div
                                className={twMerge(
                                    'flex items-center justify-between rounded-lg p-[8px_16px_8px_20px] font-medium',
                                    openMenus[item.title]
                                        ? 'bg-primary/10 text-primary'
                                        : 'hover:bg-slate-500/5',
                                )}
                            >
                                <div className="flex items-center gap-x-3">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {item.subMenu && (
                                    <ChevronDown
                                        className={twMerge(
                                            'size-4 transition-all duration-300 ease-linear',
                                            openMenus[item.title]
                                                ? 'rotate-180'
                                                : '',
                                        )}
                                    />
                                )}
                            </div>
                            <ul
                                className={twMerge(
                                    'overflow-hidden px-3 transition-all duration-500 ease-in-out',
                                    openMenus[item.title]
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0',
                                )}
                            >
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className="group relative capitalize hover:text-primary"
                                    >
                                        <Link
                                            href={subItem.path}
                                            className="flex items-center p-[8px_16px_8px_20px]"
                                        >
                                            <div className="inline-flex min-w-5">
                                                <span className="inline-block size-[5px] rounded-full bg-slate-600 group-hover:bg-primary"></span>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="text-sm font-semibold">
                                                    {subItem.title}
                                                </h6>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : (
                        <li
                            key={index}
                            className="rounded-lg p-[8px_16px_8px_20px] hover:bg-slate-500/5"
                        >
                            <Link
                                href={item.path}
                                className="flex items-center gap-x-2"
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
};

export default SideBarMenu;
