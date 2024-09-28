import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { DataTable } from '@/components/common/data-table';
import { IBreadcrumbs, TContact } from '@/type';
import { EContactStatus } from '@/type/enums';
import { columns } from './columns';

async function getData(): Promise<TContact[]> {
    // Fetch data from API
    return [
        {
            id: 1,
            name: 'Kent',
            email: 'vanthanh210704@gmail.com',
            phoneNumber: '0835913025',
            message: 'Test',
            status: EContactStatus.PENDING,
        },
    ];
}

const Contact = async () => {
    const data = await getData();
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Contact',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} className="mb-7" />

            <DataTable columns={columns} data={data} />
        </>
    );
};

export default Contact;
