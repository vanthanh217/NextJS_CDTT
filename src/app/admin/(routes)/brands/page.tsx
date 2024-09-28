'use client';

import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { IBreadcrumbs, TBrand } from '@/type';
import { EStatus } from '@/type/enums';
import DataFormHandle from '@/components/common/DataFormHandle';
import { columns } from './columns';
import FormHandle from './FormHandle';
import { useEffect, useState } from 'react';

async function getData(): Promise<TBrand[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            name: 'Asus',
            slug: 'asus',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            status: EStatus.INACTIVE,
        },
        {
            id: 2,
            name: 'Razer',
            slug: 'razer',
            status: EStatus.ACTIVE,
        },
    ];
}

const Brand = () => {
    const [data, setData] = useState<TBrand[]>([]);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Brand',
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
                columns={columns}
                data={data}
                formComponents={{
                    brand: (props) => <FormHandle {...props} />,
                }}
                currentType="brand"
            />
        </>
    );
};

export default Brand;
