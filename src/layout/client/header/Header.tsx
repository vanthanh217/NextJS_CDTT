import { IconShoppingCart, IconUser } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/images/Logo.png';
import { Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white py-3">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="inline-block select-none">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="h-[50px] w-[250px] object-cover"
                        />
                    </Link>
                    {/* Menu */}
                    <nav>
                        <ul className="flex items-center gap-x-4">
                            <li>
                                <Link
                                    href={'/'}
                                    className="inline-block px-4 py-3 text-xl font-semibold uppercase hover:text-primary"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/collections/all'}
                                    className="inline-block px-4 py-3 text-xl font-semibold uppercase hover:text-primary"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/collections'}
                                    className="inline-block px-4 py-3 text-xl font-semibold uppercase hover:text-primary"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/blogs/all'}
                                    className="inline-block px-4 py-3 text-xl font-semibold uppercase hover:text-primary"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'#'}
                                    className="inline-block px-4 py-3 text-xl font-semibold uppercase hover:text-primary"
                                >
                                    Pages
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Actions */}
                    <div className="flex items-center gap-x-5">
                        <button className="p-2">
                            <Search />
                        </button>
                        <button className="p-2">
                            <IconUser />
                        </button>
                        <button className="relative p-2 hover:text-primary">
                            <IconShoppingCart />
                            <span className="absolute -right-1 top-1 text-sm font-bold">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
