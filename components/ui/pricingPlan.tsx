"use client";
import { useState } from "react";
import clsx from "clsx";
import { plans } from "@/app/lib/placeholder-data";
import PricingPlanCard from "@/components/ui/pricing-card";

export default function PricingPlan() {
    const [planName, setPlanName] = useState<"month" | "year">("month");
    return (
        <div className="flex flex-col items-center justify-center gap-y-8">
            <div className="mx-auto">
                <div
                    onClick={() => {
                        setPlanName((plan) =>
                            plan == "month" ? "year" : "month",
                        );
                    }}
                    className="flexy relative overflow-hidden rounded-3xl border border-[#cac6c6] p-[3px] text-sm"
                >
                    <div dir="ltr">
                        <div className="rounded-s-3xl px-2 py-1">Monthly</div>
                    </div>
                    <div dir="rtl">
                        <div className="rounded-s-3xl py-1 pr-2 pl-4">
                            Yearly
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "flexy absolute z-10 h-[calc(100%-4px)] w-[65px] rounded-3xl bg-[#1C77F5] text-white transition-all duration-300 ease-in-out",
                            planName === "month"
                                ? " -translate-x-[31px]"
                                : "translate-x-[31px]",
                        )}
                    >
                        {planName == "month" ? "Monthly" : "Yearly"}
                    </div>
                </div>
            </div>
            <div className="box-border grid grid-cols-1 flex-col items-center gap-x-6 gap-y-12 xl:w-[1280px] xl:grid-cols-3">
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
    );
}
