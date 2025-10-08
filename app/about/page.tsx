import Navbar from "@/components/common/navbar";
import CTASection from "@/components/routes/about/cta";
import FAQSection from "@/components/routes/home/FAQ-section";
import HeroSection from "@/components/routes/about/hero-section";
import PrincipleSection from "@/components/routes/about/principle-section";
import PersonnelSection from "@/components/routes/about/personnel-section";

export default function About() {
    return (
        <div className="box-border min-h-screen w-full">
            <Navbar />
            <HeroSection />
            <PrincipleSection />
            <PersonnelSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
