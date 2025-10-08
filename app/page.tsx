import Keypoint from "@/components/ui/keypoint";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { homeFigures } from "./lib/placeholder-data";
import FAQSection from "@/components/routes/home/FAQ-section";
import BenefitSection from "@/components/routes/home/benefits";
import PricingSection from "@/components/routes/home/pricing";
import HeroSection from "@/components/routes/home/hero-section";
import FeatureSection from "@/components/routes/home/feature-section";
import TestimonialSection from "@/components/routes/home/testimonial";

export default function Home() {
    return (
        <div className="box-border min-h-screen w-full">
            <Navbar />
            <HeroSection />
            <Keypoint data={homeFigures} />
            <FeatureSection />
            <BenefitSection />
            <TestimonialSection />
            <PricingSection />
            <FAQSection />
            <Footer />
        </div>
    );
}
