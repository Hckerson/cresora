import CTA from "@/components/routes/about/cta";
import Navbar from "@/components/common/navbar";
import FAQ from "@/components/routes/home/FAQ-section";
import Hero from "@/components/routes/about/hero-section";
import Principle from "@/components/routes/about/principle-section";
import Personnel from "@/components/routes/about/personnel-section";

export default function About() {
    return (
        <div className="box-border min-h-screen w-full">
            <Navbar/>
            <Hero/>
            <Principle/>
            <Personnel/>
            <FAQ/>
            <CTA/>
        </div>
    );
}
