import BreadCrumbLayout from '@/components/common/BreadCrumbLayout';
import { Button } from '@/components/ui/button';
import { IBreadcrumbs, TMenu } from '@/type';
import { ChevronLeftIcon } from 'lucide-react';
import React from 'react';
import FormUpdate from './FormUpdate';
import { EPositionMenu, EStatus } from '@/type/enums';

async function getData(): Promise<TMenu> {
    // Fetch data from API
    const menu = {
        id: 1,
        parentId: 0,
        label: 'Keyboard',
        path: '/products/categories/keyboard',
        position: EPositionMenu.MAIN_MENU,
        sortOrder: 1,
        status: EStatus.ACTIVE,
    };
    return menu;
}

const UpdateMenu = async ({ params }: any) => {
    const data = await getData();
    const { id } = params;
    console.log(id);
    const breadcrumbList: IBreadcrumbs[] = [
        {
            title: 'Dasboard',
            path: '/admin',
        },
        {
            title: 'Menu',
            path: '/admin/menu',
        },
        {
            title: 'Update',
            path: '#',
        },
    ];

    return (
        <>
            <BreadCrumbLayout list={breadcrumbList} />
            <div className="mb-5">
                <div className="mr-5 flex items-center justify-end gap-x-5">
                    <Button href="/admin/menu">
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

export default UpdateMenu;
