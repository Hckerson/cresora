import Navbar from "@/components/common/navbar"
import CTASection from "@/components/routes/about/cta"
import PricingTable from "@/components/ui/pricingTable"
import HeroSection from "@/components/routes/payment/hero-section"
import TestimonialSection from "@/components/routes/home/testimonial"

export default function pricing() {
    return(
        <div className="box-border">
            <Navbar/>
            <HeroSection/>
            <PricingTable/>
            <TestimonialSection/>
            <CTASection/>
        </div>
    )
}