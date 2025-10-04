import Navbar from "@/components/common/navbar";
import Hero from "@/components/routes/about/hero-section";

export default function About() {
    return (
        <div className="box-border min-h-screen w-full">
            <Navbar/>
            <Hero/>
        </div>
    );
}
