'use client';

import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import DataFormHandle from '@/components/common/DataFormHandle';
import { IBreadcrumbs, TMenu } from '@/type';
import { EPositionMenu, EStatus } from '@/type/enums';
import useSWR from 'swr';
import { columns } from './columns';
import FormHandle from './FormHandle';

const fetcher = async () => {
    // Fetch data from API
    return [
        {
            id: 1,
            parentId: 0,
            label: 'Keyboard',
            path: '/products/categories/keyboard',
            position: EPositionMenu.MAIN_MENU,
            sortOrder: 1,
            status: EStatus.ACTIVE,
        },
        {
            id: 2,
            parentId: 0,
            label: 'Mouse',
            path: '/products/categories/mouse',
            position: EPositionMenu.MAIN_MENU,
            sortOrder: 2,
            status: EStatus.INACTIVE,
        },
        {
            id: 3,
            parentId: 0,
            label: 'Headphone',
            path: '/products/categories/headphone',
            position: EPositionMenu.MAIN_MENU,
            sortOrder: 3,
            status: EStatus.ACTIVE,
        },
    ];
};

const Menu = () => {
    const { data, error } = useSWR<TMenu[]>('/api/menu', fetcher);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Menu',
            path: '#',
        },
    ];

    if (error) return <div>Failed to load</div>;
    if (!data)
        return (
            <>
                <div className="flex w-full flex-col items-center justify-center gap-4">
                    <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
                        <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
                    </div>
                </div>
            </>
        );

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <DataFormHandle
                columns={columns}
                data={data}
                formComponents={{
                    menu: (props) => <FormHandle {...props} />,
                }}
                currentType="menu"
                filterKey="label"
            />
        </>
    );
};

export default Menu;
