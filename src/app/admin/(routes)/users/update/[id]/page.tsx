import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TUser } from '@/type';
import { ChevronLeftIcon } from 'lucide-react';
import FormEdit from './FormEdit';
import { ERole, EStatus } from '@/type/enums';

async function getData(): Promise<TUser> {
    const user = {
        id: 1,
        fullname: 'Nguyễn Văn Thành',
        username: 'vkent217',
        phoneNumber: '0835913025',
        email: 'kent21072004@gmail.com',
        thumbnail:
            'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
        role: ERole.ADMIN,
        status: EStatus.INACTIVE,
    };

    return user;
}

const UpdateUser = async ({ params }: any) => {
    const { id } = params;
    console.log(id);
    const data = await getData();
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
            title: 'Edit user',
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
            <FormEdit data={data} />
        </>
    );
};

export default UpdateUser;
