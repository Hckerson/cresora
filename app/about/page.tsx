import Navbar from "@/components/common/navbar";
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
        </div>
    );
}
