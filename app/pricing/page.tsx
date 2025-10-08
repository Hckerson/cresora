import Navbar from "@/components/common/navbar"
import PricingTable from "@/components/ui/pricingTable"
import HeroSection from "@/components/routes/payment/hero-section"

export default function pricing() {
    return(
        <div className="box-border">
            <Navbar/>
            <HeroSection/>
            <PricingTable/>
        </div>
    )
}