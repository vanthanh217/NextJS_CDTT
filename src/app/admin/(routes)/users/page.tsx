import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { DataTable } from '@/components/common/data-table';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TUser } from '@/type';
import { PlusIcon } from 'lucide-react';
import { columns } from './columns';
import { ERole, EStatus } from '@/type/enums';

async function getData(): Promise<TUser[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            fullname: 'Nguyễn Văn Thành',
            username: 'vkent217',
            phoneNumber: '0835913025',
            email: 'kent21072004@gmail.com',
            thumbnail:
                'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
            role: ERole.ADMIN,
            status: EStatus.INACTIVE,
        },
    ];
}

const User = async () => {
    const data = await getData();
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'User',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button
                        href="/admin/users/create"
                        variant={'secondary'}
                        className="gap-x-[6px]"
                    >
                        <PlusIcon className="size-5" strokeWidth={2.5} />
                        <span className="text-base font-medium">Create</span>
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={data} filterKey="fullname" />
        </>
    );
};

export default User;
