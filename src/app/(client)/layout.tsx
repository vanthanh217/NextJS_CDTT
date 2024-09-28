import React from 'react';
import { metadata } from '../layout';
import Header from '@/layout/client/header/Header';
import Footer from '@/layout/client/footer/Footer';

metadata.title = 'Gear-K Home';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto mb-10 mt-7">{children}</main>
            <Footer />
        </>
    );
};

export default ClientLayout;
