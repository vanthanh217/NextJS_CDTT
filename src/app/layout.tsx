import type { Metadata } from 'next';
import './globals.scss';
import { baiJamjuree } from '@/utils';

export const metadata: Metadata = {
    title: 'Ecommerce App',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={baiJamjuree.className}>{children}</body>
        </html>
    );
}
