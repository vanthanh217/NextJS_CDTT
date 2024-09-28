'use client';

import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import DataFormHandle from '@/components/common/DataFormHandle';
import { IBreadcrumbs, TTopic } from '@/type';
import { EStatus } from '@/type/enums';
import { useEffect, useState } from 'react';
import FormHandle from './FormHandle';
import { columns } from './columns';

async function getData(): Promise<TTopic[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            name: 'Game',
            slug: 'game',
            sortOrder: 1,
            status: EStatus.ACTIVE,
        },
        {
            id: 2,
            name: 'AI',
            slug: 'ai',
            sortOrder: 1,
            status: EStatus.ACTIVE,
        },
    ];
}

const Topic = () => {
    const [data, setData] = useState<TTopic[]>([]);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Topic',
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
                list={data}
                formComponents={{
                    topic: (props) => <FormHandle {...props} />,
                }}
                currentType="topic"
            />
        </>
    );
};

export default Topic;
