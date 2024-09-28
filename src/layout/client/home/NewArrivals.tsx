import Link from 'next/link';
import React from 'react';
import ProductItem from '../product/ProductItem';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const NewArrivals = () => {
    return (
        <section className="mb-10">
            <div className="mb-7">
                <h2 className="text-4xl font-bold uppercase">New Arrivals</h2>
            </div>
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="mb-7 w-full"
            >
                <CarouselContent className="flex">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/5">
                            <ProductItem />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-top-12 left-[93%]" />
                <CarouselNext className="-top-12 right-0" />
            </Carousel>
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

export default NewArrivals;
