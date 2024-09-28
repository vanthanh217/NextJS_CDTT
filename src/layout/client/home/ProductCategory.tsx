import React from 'react';
import ProductItem from '../product/ProductItem';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProductCategory = () => {
    return (
        <section className="mb-10">
            <div className="mb-7 flex items-center justify-between">
                <h2 className="text-4xl font-bold uppercase">Collection</h2>
                {/* Category */}
                <ul className="flex items-center gap-x-7 text-lg font-bold capitalize">
                    <li className="relative cursor-pointer py-2 text-primary before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-primary before:content-['']">
                        All
                    </li>
                    <li className="cursor-pointer py-2">Keyboard</li>
                    <li className="cursor-pointer py-2">Mouse</li>
                    <li className="cursor-pointer py-2">Headphone</li>
                    <li className="cursor-pointer py-2">Smart watches</li>
                    <li className="cursor-pointer py-2">Smart band</li>
                </ul>
            </div>
            {/* List product by category */}
            <div className="mb-7 grid grid-cols-5 gap-x-5 gap-y-8">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
            <div className="flex items-center justify-center">
                <Button size={'xl'}>
                    <Link
                        href={'#'}
                        className="text-lg font-semibold capitalize"
                    >
                        See more
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default ProductCategory;
