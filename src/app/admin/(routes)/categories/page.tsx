'use client';

import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import DataFormHandle from '@/components/common/DataFormHandle';
import { IBreadcrumbs, TCategory } from '@/type';
import { EStatus } from '@/type/enums';
import { columns as categoryColumns } from './columns';
import FormHandle from './FormHandle';
import { useEffect, useState } from 'react';

async function getData(): Promise<TCategory[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            parentId: 0,
            name: 'Keyboard',
            slug: 'keyboard',
            sortOrder: 1,
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            status: EStatus.INACTIVE,
        },
        {
            id: 2,
            parentId: 0,
            name: 'Mouse',
            slug: 'mouse',
            sortOrder: 2,
            status: EStatus.ACTIVE,
        },
        {
            id: 3,
            parentId: 0,
            name: 'Headphone',
            slug: 'headphone',
            sortOrder: 3,
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            status: EStatus.ACTIVE,
        },
    ];
}

const Category = () => {
    const [data, setData] = useState<TCategory[]>([]);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Category',
            path: '#',
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            const response = await getData();
            setData(response);
        };
        fetchData();
    }, []);

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <DataFormHandle
                columns={categoryColumns}
                data={data}
                list={data}
                formComponents={{
                    category: (props) => <FormHandle {...props} />,
                }}
                currentType="category"
            />
        </>
    );
};

export default Category;
