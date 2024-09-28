import {
    EContactStatus,
    EOrderStatus,
    EPositionMenu,
    EProductStatus,
    ERole,
    EStatus,
} from './enums';

// Sidebar Admin
interface IDashBoardSubMenu {
    title: string;
    path: string;
}

export type TDashBoardMenu = {
    title: string;
    icon: React.ReactNode;
    path: string;
    subMenu?: IDashBoardSubMenu[];
};

export interface IBreadcrumbs {
    title: string;
    path: string;
}

export type Action<T> = {
    label: string;
    url?: string;
    onClick?: (item: T) => void;
};

export type TBanner = {
    id: number;
    title: string;
    path: string;
    desc?: string;
    thumbnail?: string;
    status: EStatus;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TBrand = {
    id: number;
    name: string;
    thumbnail?: string;
    slug: string;
    status: EStatus;
};

export type TCategory = {
    id: number;
    name: string;
    parentId: number;
    thumbnail?: string;
    slug: string;
    sortOrder: number;
    status: EStatus;
};

export type TConfig = {
    id: number;
    configKey: string;
    configValue: string;
    updatedAt?: Date;
    status: EStatus;
};

export type TContact = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    status: EContactStatus;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TContentPage = {
    id: number;
    topicId: number;
    title: string;
    thumbnail?: string;
    desc?: string;
    content: string;
    slug: string;
    status: EStatus;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TMenu = {
    id: number;
    parentId: number;
    tableId?: number;
    label: string;
    path: string;
    position: EPositionMenu;
    sortOrder: number;
    type?: string;
    status: EStatus;
};

export type TOrderDetail = {
    id: number;
    orderId: number;
    productId: number;
    price: number;
    quantity: number;
    totalPrice: number;
};

export type TOrder = {
    id: number;
    customerId: number;
    customerName: string;
    customerEmail?: string;
    customerPhone?: string;
    shippingAddress: string;
    totalAmount: number;
    orderDate?: date;
    status: EOrderStatus;
};

export type TProduct = {
    id: number;
    brand?: string;
    category?: string;
    slug?: string;
    name: string;
    desc?: string;
    detail?: string;
    thumbnail: string;
    price: float;
    status: EProductStatus;
};

export type TTopic = {
    id: number;
    name: string;
    slug: string;
    sortOrder: number;
    status: EStatus;
};

export type TUser = {
    id: number;
    fullname: string;
    username: string;
    email: string;
    phoneNumber?: string;
    thumbnail?: string;
    role: ERole;
    status: EStatus;
};
