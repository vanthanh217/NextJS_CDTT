import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = () => {
    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-2xl">
                <Link href={'#'} className="relative block overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        width={370}
                        height={220}
                        className="h-full w-full object-cover transition duration-300 ease-linear group-hover:scale-110"
                    />
                </Link>
            </div>
            <div>
                <div className="my-4">
                    <span className="text-sm font-medium text-silver">
                        September 09, 2024
                    </span>
                </div>
                <h2 className="mb-5 line-clamp-2 font-bold transition-all hover:text-primary">
                    <Link href={'#'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis dolorem deleniti illo exercitationem!
                    </Link>
                </h2>
                <Button variant={'link'} className="text-secondary">
                    <Link href={'#'} className="text-sm font-bold">
                        Read More
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default BlogItem;
