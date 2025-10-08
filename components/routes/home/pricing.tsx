import Description from "@/components/ui/description";
import PricingPlan from "@/components/ui/pricing-plan";

export default function PricingSection() {
    return (
        <div className="paddy py-12 md:py-24 xl:py-32">
            <Description
                title="Flexible Plans for Every Stage of Growth"
                description="All the features you need, with pricing that makes sense."
            />
            <PricingPlan />
        </div>
    );
}
