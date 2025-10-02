import clsx from "clsx";
import Pricing from "@/components/home/pricing";
import Navbar from "@/components/common/navbar";
import Benefits from "@/components/home/benefits";
import Keypoint from "@/components/home/keypoint";
import Features from "@/components/home/feature-section";
import HeroSection from "@/components/home/hero-section";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <div className="box-border min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <Keypoint/>
      <Features/>
      <Benefits/>
      <Testimonial/>
      <Pricing/>
    </div>
  );
}
