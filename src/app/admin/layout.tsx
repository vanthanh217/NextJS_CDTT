import React from 'react';
import { metadata } from '../layout';
import DashboardLayout from '@/layout/admin/DashboardLayout';

metadata.title = 'Gear-K Dashboard';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <DashboardLayout>{children}</DashboardLayout>
        </>
    );
};

export default AdminLayout;
