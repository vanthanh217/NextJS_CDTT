import {
    IconBlog,
    IconContact,
    IconOption,
    IconOrder,
    IconProduct,
    IconUser,
} from '@/components/icons';
import { TDashBoardMenu } from '@/type';
import { EPositionMenu, EProductStatus, ERole, EStatus } from '@/type/enums';

export const dashboardMenu: TDashBoardMenu[] = [
    {
        title: 'Products',
        icon: <IconProduct />,
        path: '#',
        subMenu: [
            {
                title: 'List Brand',
                path: '/admin/brands',
            },
            {
                title: 'List Category',
                path: '/admin/categories',
            },
            {
                title: 'List Product',
                path: '/admin/products',
            },
        ],
    },
    {
        title: 'Posts',
        icon: <IconBlog />,
        path: '#',
        subMenu: [
            {
                title: 'List Post',
                path: '/admin/posts',
            },
            {
                title: 'List Topic',
                path: '/admin/topics',
            },
        ],
    },
    {
        title: 'Users',
        icon: <IconUser />,
        path: '/admin/users',
    },
    {
        title: 'Orders',
        icon: <IconOrder />,
        path: '/admin/orders',
    },
    {
        title: 'Contact',
        icon: <IconContact />,
        path: '/admin/contacts',
    },
];

export const dashboardConfigMenu: TDashBoardMenu[] = [
    {
        title: 'Config',
        icon: <IconOption />,
        path: '#',
        subMenu: [
            {
                title: 'Banner',
                path: '/admin/banner',
            },
            {
                title: 'Menu',
                path: '/admin/menu',
            },
            {
                title: 'Website Info',
                path: '/admin/config',
            },
        ],
    },
];

export const productStatus: {
    label: string;
    value: EProductStatus;
}[] = [
    {
        label: 'Đang bán',
        value: EProductStatus.ACTIVE,
    },
    {
        label: 'Ngừng bán',
        value: EProductStatus.INACTIVE,
    },
    {
        label: 'Hết hàng',
        value: EProductStatus.OUT_OF_STOCK,
    },
];

export const status: {
    label: string;
    value: EStatus;
}[] = [
    {
        label: 'Active',
        value: EStatus.ACTIVE,
    },
    {
        label: 'Inactive',
        value: EStatus.INACTIVE,
    },
];

export const positionMenu: {
    label: string;
    value: EPositionMenu;
}[] = [
    {
        label: 'Main menu',
        value: EPositionMenu.MAIN_MENU,
    },
    {
        label: 'Footer menu',
        value: EPositionMenu.FOOTER_MENU,
    },
];

export const roles: {
    label: string;
    value: ERole;
}[] = [
    {
        label: 'Admin',
        value: ERole.ADMIN,
    },
    {
        label: 'Customer',
        value: ERole.CUSTOMER,
    },
];
