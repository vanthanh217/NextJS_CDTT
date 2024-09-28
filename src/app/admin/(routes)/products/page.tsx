import { DataTable } from '@/components/common/data-table';
import { IBreadcrumbs, TProduct } from '@/type';
import { columns } from './columns';
import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { FileDownIcon, FileUpIcon, PlusIcon } from 'lucide-react';
import { EProductStatus } from '@/type/enums';

async function getData(): Promise<TProduct[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            brand: 'Asus',
            category: 'Keyboard',
            name: 'Asus ROG Azot Moonlight White',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            price: 2400000,
            status: EProductStatus.INACTIVE,
        },
        {
            id: 2,
            brand: 'Rapoo',
            category: 'Mouse',
            name: 'Chuột Rapoo VT350S Black',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            price: 1190000,
            status: EProductStatus.INACTIVE,
        },
        {
            id: 3,
            brand: 'DareU',
            category: 'Headphone',
            name: 'Tai nghe DareU EH469 7.1 RGB Pink',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            price: 440000,
            status: EProductStatus.ACTIVE,
        },
    ];
}

const Product = async () => {
    const data = await getData();

    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Product',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button
                        href="/admin/products/create"
                        variant={'secondary'}
                        className="gap-x-[6px]"
                    >
                        <PlusIcon className="size-5" strokeWidth={2.5} />
                        <span className="text-base font-medium">Create</span>
                    </Button>
                    <Button
                        variant={'custom'}
                        className="bg-emerald-500 text-white"
                    >
                        <FileUpIcon className="size-5" />
                    </Button>
                    <Button
                        variant={'custom'}
                        className="bg-emerald-500 text-white"
                    >
                        <FileDownIcon className="size-5" />
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </>
    );
};

export default Product;
