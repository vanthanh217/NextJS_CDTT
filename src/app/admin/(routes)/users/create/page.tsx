import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs } from '@/type';
import { ChevronLeftIcon } from 'lucide-react';
import FormCreate from './FormCreate';

const CreateUser = () => {
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'User',
            path: '/admin/users',
        },
        {
            title: 'Create user',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button href="/admin/users">
                        <ChevronLeftIcon />
                        <span className="flex items-center text-base font-medium">
                            Back
                        </span>
                    </Button>
                </div>
            </div>
            <FormCreate />
        </>
    );
};

export default CreateUser;
