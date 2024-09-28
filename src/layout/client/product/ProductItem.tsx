import CountDown from '@/components/common/CountDown';
import { Button } from '@/components/ui/button';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductItem = () => {
    const targetDate = '2024-10-22T23:59:59';

    return (
        <div className="group">
            {/* Product Iamge */}
            <div className="relative overflow-hidden rounded-2xl">
                {/* Product Image */}
                <Link href={'#'} className="relative block overflow-hidden">
                    <Image
                        src={
                            'https://minimalin-demo.myshopify.com/cdn/shop/files/e1_39_600x.png?v=1708948259'
                        }
                        alt=""
                        width={270}
                        height={270}
                        className="h-full w-full object-cover"
                    />
                </Link>
                <Link
                    href={'#'}
                    className="invisible absolute left-0 right-0 top-0 z-10 opacity-0 transition-all duration-300 ease-linear group-hover:visible group-hover:opacity-100"
                >
                    <Image
                        src={
                            'https://minimalin-demo.myshopify.com/cdn/shop/files/e1_40_600x.png?v=1708948260'
                        }
                        alt=""
                        width={270}
                        height={270}
                        className="h-full w-full object-cover"
                    />
                </Link>
                {/* Product Actions */}
                <div className="invisible absolute bottom-12 top-auto z-50 w-full transition-all duration-300 ease-linear group-hover:visible group-hover:bottom-5">
                    <div className="flex items-center justify-center gap-x-2">
                        <Button
                            size={'icon'}
                            variant={'outline'}
                            className="duration-250 size-11 transition ease-linear"
                        >
                            <Eye />
                        </Button>
                        <Button
                            size={'icon'}
                            variant={'outline'}
                            className="duration-250 size-11 transition ease-linear"
                        >
                            <ShoppingBag />
                        </Button>
                        <Button
                            size={'icon'}
                            variant={'outline'}
                            className="duration-250 size-11 transition ease-linear"
                        >
                            <Heart />
                        </Button>
                    </div>
                </div>
                {/* Countdown */}
                <CountDown
                    targetDate={targetDate}
                    className="absolute bottom-5 left-[10px] w-[calc(100%-20px)]"
                />
                {/* Product Badge */}
                <div className="absolute right-3 top-[10px] z-10 select-none">
                    <span className="inline-block rounded-md bg-white px-[10px] py-1 text-xs font-semibold text-eerie-black shadow-[0_1px_6px_0_rgba(32,_33,_36,_.28)]">
                        -0%
                    </span>
                </div>
            </div>
            {/* Product Info */}
            <div className="px-[10px] pt-[15px]">
                {/* Product Name */}
                <h3 className="mb-[10px] select-none overflow-hidden text-ellipsis text-nowrap font-semibold text-eerie-black">
                    <Link href={'#'} className="hover:text-primary">
                        Qb. 3D Virtual Reality (VR) Box Gaming Headset
                    </Link>
                </h3>
                {/* Product Price */}
                <div className="flex items-center justify-center gap-x-3 font-bold">
                    <del className="text-sm text-silver">1.504.000₫</del>
                    <span className="text-destructive">978.000₫</span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
