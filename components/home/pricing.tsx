"use client";
import { useState } from "react";
import Description from "../ui/description";
import PricingPlanCard from "../ui/pricing-card";
import { plans } from "@/app/lib/placeholder-data";

export default function Pricing() {
    const [planName, setPlanName] = useState<"month" | "year">("month");
    return (
        <div className="paddy py-12 md:py-24 xl:py-32">
            <Description
                title="Flexible Plans for Every Stage of Growth"
                description="All the features you need, with pricing that makes sense."
            />
            <div className="flex flex-col items-center justify-center gap-y-8">
                <div className="mx-auto">

                </div>
                <div className="box-border grid grid-cols-1 flex-col items-center gap-x-6 gap-y-12 xl:grid-cols-3 xl:w-[1280px]">
                    {plans.map((plan, idx) => {
                        return (
                            <PricingPlanCard
                            key={idx}
                                name={plan.name}
                                about={plan.about}
                                monthlyCost={plan.monthlyCost}
                                yearlyCost={plan.yearlyCost}
                                link={plan.link}
                                aiGrade={plan.aiGrade}
                                workspaceCount={plan.workspaceCount}
                                users={plan.users}
                                plan={planName}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
