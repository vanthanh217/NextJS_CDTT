export enum EStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum EContactStatus {
    PENDING = 'pending',
    RESOLVED = 'resolved',
}

export enum EPositionMenu {
    MAIN_MENU = 'Main menu',
    FOOTER_MENU = 'Footer menu',
}

export enum EOrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}

export enum EProductStatus {
    ACTIVE = EStatus.ACTIVE,
    INACTIVE = EStatus.INACTIVE,
    IN_STOCK = 'in stock',
    OUT_OF_STOCK = 'out of stock',
}

export enum ERole {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
}
