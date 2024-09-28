import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TProduct } from '@/type';
import { ChevronLeftIcon } from 'lucide-react';
import FormUpdate from './FormUpdate';
import { EProductStatus } from '@/type/enums';

async function getData(): Promise<TProduct> {
    // Fetch data from API
    const product = {
        id: 1,
        brand: 'Asus',
        category: 'Keyboard',
        name: 'Asus ROG Azot Moonlight White',
        slug: 'a',
        thumbnail:
            'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
        price: 2400000,
        status: EProductStatus.INACTIVE,
    };
    return product;
}

const UpdateProduct = async ({ params }: any) => {
    const data = await getData();
    const { id } = params;
    console.log(id);
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
            title: 'Update product',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button href="/admin/products">
                        <ChevronLeftIcon />
                        <span className="flex items-center text-base font-medium">
                            Back
                        </span>
                    </Button>
                </div>
            </div>
            <FormUpdate data={data} />
        </>
    );
};

export default UpdateProduct;
