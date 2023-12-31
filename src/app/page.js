import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import SellSection from "@/components/home/SellProducts";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Categories />
            <SellSection />
            <HomeProducts />
        </>
    );
}
