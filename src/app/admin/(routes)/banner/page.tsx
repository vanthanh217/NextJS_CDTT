'use client';

import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import DataFormHandle from '@/components/common/DataFormHandle';
import { IBreadcrumbs, TBanner } from '@/type';
import { EStatus } from '@/type/enums';
import useSWR from 'swr';
import { columns } from './columns';
import FormHandle from './FormHandle';

const fetcher = async () => {
    // Fetch data from API
    return [
        {
            id: 1,
            title: 'Bàn phím cơ',
            path: '/products/categories/ban-phim-co',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            status: EStatus.ACTIVE,
        },
        {
            id: 2,
            title: 'Chuột gaming',
            path: '/products/categories/chuot-gamin',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            status: EStatus.INACTIVE,
        },
    ];
};

const Banner = () => {
    const { data, error } = useSWR<TBanner[]>('/api/banner', fetcher);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Banner',
            path: '#',
        },
    ];

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <DataFormHandle
                columns={columns}
                data={data}
                formComponents={{
                    banner: (props) => <FormHandle {...props} />,
                }}
                currentType="banner"
                filterKey="title"
            />
        </>
    );
};

export default Banner;
