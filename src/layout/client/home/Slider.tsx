'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slide01 from '@/public/assets/images/slide_1.webp';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Slider = () => {
    return (
        <section className="relative mb-10 h-[600px] rounded-3xl bg-light-gray py-[60px]">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    align: 'start',
                }}
                className="mx-auto w-full max-w-[1200px] px-4"
            >
                {/* map array */}
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex items-center gap-x-5">
                            <div className="slide-animation flex-1">
                                <h1 className="mb-3 text-5xl font-semibold">
                                    Men Collection
                                </h1>
                                <div className="max-w-[400px]">
                                    <p>
                                        Elevate Your Basics with a Touch of
                                        Glam.
                                    </p>
                                </div>
                                <div className="mt-7">
                                    <Button size={'lg'}>
                                        <Link
                                            href={'/collections/men'}
                                            className="text-lg"
                                        >
                                            Shop now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Link
                                    href={'/collections/men'}
                                    className="block h-[470px] w-[500px]"
                                >
                                    <Image
                                        src={Slide01}
                                        alt="Slide"
                                        className="h-full w-full object-cover"
                                    />
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex items-center gap-x-5">
                            <div className="slide-animation flex-1">
                                <h1 className="mb-3 text-5xl font-semibold">
                                    Men Collection
                                </h1>
                                <div className="max-w-[400px]">
                                    <p>
                                        Elevate Your Basics with a Touch of
                                        Glam.
                                    </p>
                                </div>
                                <div className="mt-7">
                                    <Button size={'lg'}>
                                        <Link
                                            href={'/collections/men'}
                                            className="text-lg"
                                        >
                                            Shop now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Link
                                    href={'/collections/men'}
                                    className="block h-[470px] w-[500px]"
                                >
                                    <Image
                                        src={Slide01}
                                        alt="Slide"
                                        className="h-full w-full object-cover"
                                    />
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Slider;
