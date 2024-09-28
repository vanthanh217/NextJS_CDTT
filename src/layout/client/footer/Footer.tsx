import { SendHorizonal } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="bg-light-gray">
                <div className="container mx-auto pb-5 pt-20">
                    <div className="mb-5 flex justify-between gap-x-10">
                        <div className="max-w-[25%]">
                            <h4 className="mb-5 text-xl font-semibold text-dark">
                                About us
                            </h4>
                            <p className="text-light-dark">
                                Gear-K E-Commerce is a dynamic and innovative
                                online retail platform that offers a wide range
                                of products to customers worldwide.
                            </p>
                        </div>
                        <div className="flex flex-1 gap-x-7">
                            <ul className="flex-1">
                                <h4 className="mb-5 text-xl font-semibold">
                                    Info
                                </h4>
                                <li className="mb-2">
                                    <Link
                                        href={'#'}
                                        className="text-light-dark hover:text-primary"
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href={'#'}
                                        className="text-light-dark hover:text-primary"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href={'#'}
                                        className="text-light-dark hover:text-primary"
                                    >
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex-1">
                                <h4 className="mb-5 text-xl font-semibold">
                                    Policy
                                </h4>
                                <li className="mb-2">
                                    <Link
                                        href={'#'}
                                        className="text-light-dark hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href={'#'}
                                        className="text-light-dark hover:text-primary"
                                    >
                                        Shipping Policy
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href={'#'}
                                        className="text-light-dark hover:text-primary"
                                    >
                                        Refund Policy
                                    </Link>
                                </li>
                            </ul>
                            <div className="w-[45%]">
                                <h4 className="mb-5 text-xl font-semibold">
                                    Store
                                </h4>
                                <div className="mb-7">
                                    <span>
                                        561/34 quốc lộ 1A, khu phố 3, Linh Xuân,
                                        Thủ Đức, Tp. Hồ Chí Minh
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        Call us: <strong>0835-913-025</strong>
                                    </span>
                                </div>
                                <div>
                                    <span>Mon - Sun: 8:00am - 9:00pm</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[20%]">
                            <h4 className="mb-5 text-xl font-semibold">
                                Subscribe to Our Newsletter!
                            </h4>
                            <div className="relative flex w-full items-center overflow-hidden rounded-xlg">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete="off"
                                    className="w-full border border-input py-[10px] pl-[10px] pr-10 text-sm outline-none placeholder:text-light-dark"
                                />
                                <button className="absolute right-[10px] text-light-dark hover:text-primary">
                                    <SendHorizonal className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center border-t border-t-[#dcdcdc] py-5">
                    <p className="text-xl font-medium">
                        Nguyễn Văn Thành - 2122110536
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
