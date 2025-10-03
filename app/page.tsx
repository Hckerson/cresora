import clsx from "clsx";
import FAQ from "@/components/home/FAQ-section";
import Pricing from "@/components/home/pricing";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Benefits from "@/components/home/benefits";
import Keypoint from "@/components/home/keypoint";
import Testimonial from "@/components/home/testimonial";
import Features from "@/components/home/feature-section";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
    return (
        <div className="box-border min-h-screen w-full">
            <Navbar />
            <HeroSection />
            <Keypoint />
            <Features />
            <Benefits />
            <Testimonial />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
}
