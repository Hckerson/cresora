import Hightlight from "@/components/ui/highlight";
import PricingPlan from "@/components/ui/pricingPlan";
import Description from "@/components/ui/description";

export default function HeroSection() {
    return (
        <div className="paddy 3xl:max-w-[1480px] mx-auto pt-[100px]">
            <div className="flexy flex-col gap-y-10 md:gap-y-14 xl:gap-y-18">
                <Hightlight />
                <Description
                    title="Flexible Plans for Every Stage of Growth"
                    classT="max-w-[25ch]"
                    description="All the features you need, with pricing that makes sense."
                />
                <PricingPlan />
            </div>
        </div>
    );
}
