import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TProduct } from '@/type';
import { EProductStatus } from '@/type/enums';
import { ChevronLeftIcon, EditIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

async function getData(): Promise<TProduct> {
    // Fetch data from API
    const product = {
        id: 1,
        brand: 'Asus',
        category: 'Keyboard',
        name: 'Asus ROG Azot Moonlight White',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, quisquam.',
        detail: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab error repellendus nulla blanditiis nesciunt animi autem? Illum similique voluptas dolor recusandae commodi nesciunt, vel, quidem est officiis eum quos.',
        thumbnail:
            'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
        price: 2400000,

        status: EProductStatus.INACTIVE,
    };
    return product;
}

const ViewProduct = async ({ params }: any) => {
    const { id } = params;
    const data = await getData();
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Product',
            path: '/admin/products',
        },
        {
            title: 'View product',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button href="/admin/products" className="gap-x-2">
                        <ChevronLeftIcon />
                        <span className="flex items-center text-base font-medium">
                            Back
                        </span>
                    </Button>
                    <Button
                        variant={'secondary'}
                        href={`/admin/products/update/${id}`}
                        className="gap-x-2"
                    >
                        <EditIcon size={20} />
                        <span className="flex items-center text-base font-medium">
                            Update
                        </span>
                    </Button>
                </div>
            </div>
            <div className="mb-10">
                <div className="mb-7 flex gap-x-7">
                    <div className="flex-1 p-3">
                        <div className="w-full overflow-hidden rounded-lg">
                            <Image
                                src={data.thumbnail}
                                alt=""
                                width={150}
                                height={50}
                                className="h-full max-h-[350px] w-full object-cover"
                            />
                        </div>
                        {/* Gallery */}
                    </div>
                    <div className="mt-4 w-3/5">
                        <h4 className="mb-2 line-clamp-3 text-xl font-semibold">
                            {data.name}
                        </h4>
                        <div className="">
                            <p className="mb-1">
                                <span className="font-medium">Brand: </span>
                                <span className="ml-4 text-lg font-semibold uppercase text-slate-400">
                                    {data.brand}
                                </span>
                            </p>
                            <p className="mb-1">
                                <span className="font-medium">Category: </span>
                                <span className="ml-4 text-lg font-semibold uppercase text-slate-400">
                                    {data.category}
                                </span>
                            </p>
                            <p className="mb-1">
                                <span className="font-medium">Price: </span>
                                <span className="ml-4 text-lg font-semibold uppercase text-destructive">
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(data.price)}
                                </span>
                            </p>
                            <p className="mb-1">
                                <span className="font-medium">Status: </span>
                                <>
                                    {(data.status === 'inactive' ||
                                        data.status === 'out of stock') && (
                                        <span className="ml-4 inline-block cursor-default rounded-md border border-destructive bg-destructive/10 px-5 py-[2px] font-medium uppercase text-destructive">
                                            {data.status}
                                        </span>
                                    )}
                                    {(data.status === 'active' ||
                                        data.status === 'in stock') && (
                                        <span className="ml-4 inline-block cursor-default rounded-md border border-emerald-500 bg-emerald-500/20 px-5 py-[2px] font-medium uppercase text-emerald-500">
                                            {data.status}
                                        </span>
                                    )}
                                </>
                            </p>
                            <p className="mb-1">
                                <span className="font-medium">
                                    Created At:{' '}
                                </span>
                                <span className="ml-4 text-lg font-semibold uppercase">
                                    20/09/2024
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <>
                    <div className="mb-3 rounded-lg bg-white p-4 shadow">
                        <h5 className="mb-2 text-lg font-semibold">
                            Description
                        </h5>
                        <p>{data.desc}</p>
                    </div>
                    <div className="mb-3 rounded-lg bg-white p-4 shadow">
                        <h5 className="mb-2 text-lg font-semibold">Detail</h5>
                        <p>{data.detail}</p>
                    </div>
                </>
            </div>
        </>
    );
};

export default ViewProduct;
