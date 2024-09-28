import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TContentPage } from '@/type';
import { EStatus } from '@/type/enums';
import { ChevronLeftIcon } from 'lucide-react';
import FormUpdate from './FormUpdate';

async function getData(): Promise<TContentPage> {
    // Fetch data from API
    const product = {
        id: 1,
        topicId: 1,
        title: 'ABC',
        slug: 'abc',
        content: 'ABC',
        thumbnail:
            'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
        status: EStatus.INACTIVE,
    };
    return product;
}

const UpdatePost = async ({ params }: any) => {
    const data = await getData();
    const { id } = params;
    console.log(id);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Content page',
            path: '/admin/posts',
        },
        {
            title: 'Update content page',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button href="/admin/posts">
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

export default UpdatePost;
