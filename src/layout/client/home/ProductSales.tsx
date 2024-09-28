import CountDown from '@/components/common/CountDown';
import Image from 'next/image';
import BlackFriday from '@/public/assets/images/Black-Friday_380x.webp';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Check, CheckCircle, Eye, Heart, Plus } from 'lucide-react';

const ProductSales = () => {
    const targetDate = '2024-10-22T23:59:59';

    return (
        <section className="mb-10">
            <div className="mb-7">
                <h2 className="text-4xl font-bold uppercase">
                    Deals of the day
                </h2>
            </div>
            <div className="mb-7 flex">
                {/* Image */}
                <div className="h-[470px] w-60">
                    <div className="relative h-[inherit] overflow-hidden rounded-2xl">
                        <Image
                            src={BlackFriday}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                {/* Discounted Product List */}
                <Carousel
                    opts={{
                        align: 'start',
                    }}
                    className="w-[82%]"
                >
                    <CarouselContent className="m-[5px] flex h-[460px]">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/2">
                                <div className="flex h-full rounded-2xl bg-white py-7 shadow-[2px_2px_6px_rgba(0,_0,_0,_.1)]">
                                    {/* Left */}
                                    <div className="flex-1 border-r border-r-[#dcdcdc] px-3">
                                        {/* Image */}
                                        <div className="mb-2">
                                            <Link href={'/'}>
                                                <Image
                                                    src={
                                                        'https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_2_600x.png?v=1692372496'
                                                    }
                                                    alt=""
                                                    width={250}
                                                    height={250}
                                                    className="h-full w-full object-cover"
                                                />
                                            </Link>
                                        </div>
                                        {/* Info */}
                                        <div>
                                            {/* Brand */}
                                            <div className="mb-3 font-bold uppercase text-silver hover:text-primary">
                                                <Link href={'/'}>Asus</Link>
                                            </div>
                                            <h2 className="mb-2 line-clamp-2 h-14 select-none text-lg font-semibold hover:text-primary">
                                                <Link href={'/#'}>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit.
                                                </Link>
                                            </h2>
                                            {/* Price */}
                                            <div className="flex items-center justify-center gap-x-3 font-bold">
                                                <del className="text text-silver">
                                                    527.000₫
                                                </del>
                                                <span className="text-xl text-destructive">
                                                    477.000₫
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right */}
                                    <div className="w-[53%] px-4">
                                        <div className="mb-8 text-sm">
                                            <div className="mb-4 flex items-center gap-x-4 text-emerald-400">
                                                <CheckCircle className="size-5" />
                                                <span>
                                                    20 Products in stock
                                                </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="mb-1 flex items-center gap-x-4 capitalize text-light-dark">
                                                    <Check className="size-4" />
                                                    <span>2 year warranty</span>
                                                </div>
                                                <div className="mb-1 flex items-center gap-x-4 capitalize text-light-dark">
                                                    <Check className="size-4" />
                                                    <span>
                                                        Genuine guaranteed
                                                    </span>
                                                </div>
                                                <div className="mb-1 flex items-center gap-x-4 capitalize text-light-dark">
                                                    <Check className="size-4" />
                                                    <span>Free shipping</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Countdown */}
                                        <CountDown targetDate={targetDate} />
                                        {/* Progress */}
                                        <div className="mb-10 mt-8">
                                            <div className="relative mb-4 h-[6px] rounded-full bg-[#e0e0e0]">
                                                <div
                                                    className="absolute left-0 h-[6px] rounded-full"
                                                    style={{
                                                        width: '80%',
                                                        background:
                                                            'var(--gradient-primary)',
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="select-none text-sm font-bold uppercase text-silver">
                                                <span>80% Sold</span>
                                                <span> - </span>
                                                <span>Available 20</span>
                                            </div>
                                        </div>
                                        <Button
                                            size={'xl'}
                                            className="mb-4 w-full gap-x-4 font-bold uppercase"
                                        >
                                            <Plus className="size-5" />
                                            <span>Quick add</span>
                                        </Button>
                                        <div className="flex items-center justify-between text-sm text-[#535353]">
                                            <button className="flex items-center gap-x-2 capitalize">
                                                <Eye className="size-5" />
                                                <span>Quick view</span>
                                            </button>
                                            <button className="flex items-center gap-x-2 capitalize">
                                                <Heart className="size-5" />
                                                <span>Add to wishlist</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-top-[46px] left-[92%]" />
                    <CarouselNext className="-top-[46px] right-0" />
                </Carousel>
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

export default ProductSales;
