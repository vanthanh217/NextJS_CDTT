import BlogItem from '@/layout/client/blog/BlogItem';
import Slider from '@/layout/client/home/Slider';
import ProductCategory from '@/layout/client/home/ProductCategory';
import ProductSales from '@/layout/client/home/ProductSales';
import NewArrivals from '@/layout/client/home/NewArrivals';

const HomePage = () => {
    return (
        <>
            {/* Slider */}
            <Slider />
            {/* New Arrivals */}
            <NewArrivals />
            {/* Deals of the day */}
            <ProductSales />
            {/* Products by category */}
            <ProductCategory />
            {/* Latest Blog */}
            <section className="mx-auto mb-10 max-w-[1280px]">
                <div className="mb-10">
                    <h2 className="text-center text-4xl font-bold uppercase">
                        Latest Blog
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-x-10">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
            </section>
        </>
    );
};

export default HomePage;
