import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { DataTable } from '@/components/common/data-table';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TOrder } from '@/type';
import { EOrderStatus } from '@/type/enums';
import { FileDownIcon } from 'lucide-react';
import { columns } from './columns';

async function getData(): Promise<TOrder[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            customerId: 1,
            customerName: 'Kent',
            customerEmail: 'vanthanh210704@gmail.com',
            shippingAddress: 'Tp. Hồ Chí Minh',
            totalAmount: 2400000,
            orderDate: '23/09/2024',
            status: EOrderStatus.PENDING,
        },
    ];
}

const Order = async () => {
    const data = await getData();
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Order',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button
                        variant={'custom'}
                        className="bg-emerald-500 text-white"
                    >
                        <FileDownIcon className="size-5" />
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={data} filterKey="customerName" />
        </>
    );
};

export default Order;
