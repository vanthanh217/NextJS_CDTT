'use client';

import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import DataFormHandle from '@/components/common/DataFormHandle';
import { IBreadcrumbs, TConfig } from '@/type';
import { EStatus } from '@/type/enums';
import useSWR from 'swr';
import { columns } from './columns';
import FormHandle from './FormHandle';

const fetcher = async () => {
    // Fetch data from API
    return [
        {
            id: 1,
            configKey: 'Desc',
            configValue:
                'Gear-K E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.',
            status: EStatus.ACTIVE,
        },
        {
            id: 2,
            configKey: 'Email',
            configValue: 'nguyenvanthanh210704@gmail.com',
            status: EStatus.INACTIVE,
        },
        {
            id: 1,
            configKey: 'Phone number',
            configValue: '0835913025',
            status: EStatus.ACTIVE,
        },
    ];
};

const Config = () => {
    const { data, error } = useSWR<TConfig[]>('/api/config', fetcher);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Config website',
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
                    config: (props) => <FormHandle {...props} />,
                }}
                currentType="config"
                filterKey="configKey"
            />
        </>
    );
};

export default Config;
