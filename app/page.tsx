import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { homeFigures } from "./lib/placeholder-data";
import Pricing from "@/components/routes/home/pricing";
import FAQ from "@/components/routes/home/FAQ-section";
import Benefits from "@/components/routes/home/benefits";
import Keypoint from "@/components/ui/keypoint";
import Testimonial from "@/components/routes/home/testimonial";
import Features from "@/components/routes/home/feature-section";
import HeroSection from "@/components/routes/home/hero-section";

export default function Home() {
    return (
        <div className="box-border min-h-screen w-full">
            <Navbar />
            <HeroSection />
            <Keypoint data={homeFigures} />
            <Features />
            <Benefits />
            <Testimonial />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
}
