'use client';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '../ui/breadcrumb';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IBreadcrumbs } from '@/type';
import { SlashIcon } from '@radix-ui/react-icons';

interface BreadCrumbLayoutProps {
    list: IBreadcrumbs[];
    className?: string;
}

const BreadCrumbLayout: React.FC<BreadCrumbLayoutProps> = ({
    list,
    className,
}) => {
    return (
        <Breadcrumb className={twMerge('mb-5', className)}>
            <BreadcrumbList>
                {list &&
                    list.length > 0 &&
                    list.map((item, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem className="font-medium capitalize">
                                <BreadcrumbLink asChild>
                                    <Link href={item.path}>{item.title}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {index < list.length - 1 && (
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadCrumbLayout;
