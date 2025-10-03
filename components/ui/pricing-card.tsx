import clsx from "clsx";
import Link from "next/link";
import { geist } from "@/app/fonts";
import CheckIcon from "./check-mark";
import Button from "../common/button";

interface Plans {
    name: string;
    about: string;
    monthlyCost: string;
    yearlyCost: string;
    link: string;
    aiGrade: string;
    workspaceCount: string;
    users: string;
    plan: "year" | "month";
}

export default function PricingPlanCard({
    name,
    about,
    monthlyCost,
    yearlyCost,
    link,
    aiGrade,
    workspaceCount,
    users,
    plan,
}: Plans) {
    return (
        <div
            className={clsx(
                "text-foreground box-border flex flex-col gap-y-8 rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF] p-8",
                geist.className,
            )}
        >
            <div className={clsx("flex flex-col gap-y-6 rounded-[12px] bg-[#FCFBFC] p-6", name == "Growth" && "bg-linear-to-b from-[#1763CC]/4 to-[#1763CC]/32")}>
                <div className="flex flex-col gap-y-2">
                    <p className="text-foreground text-2xl leading-[1.32] font-medium">
                        {name}
                    </p>
                    <p className="text-primary-foreground text-[16px]">
                        {about}
                    </p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex">
                        <p className="leading-[1.24] font-semibold tracking-wide">
                            {plan == "month" ? monthlyCost : yearlyCost}
                            <span>/{plan == "month" ? "month" : "year"}</span>
                        </p>
                    </div>
                    <Button
                        size="custom"
                        variant={name == "Growth" ? "default" : "ghost"}
                        style={
                            name == "Growth"
                                ? "hover:bg-blue-600"
                                : "hover:bg-gray-200"
                        }
                    >
                        <Link href={link} className="h-full w-full flex items-center justify-center ">Get this plan</Link>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <p className="text-[20px] font-medium">This plan includes</p>
                <ul className="flex w-full flex-col gap-y-4">
                    <li className="flex gap-x-3">
                        <CheckIcon /> <p>{aiGrade} AI-powered spend insights</p>
                    </li>

                    <li className="flex gap-x-3">
                        <CheckIcon /> Real-time cash flow tracking
                    </li>
                    <li className="flex gap-x-3">
                        <CheckIcon /> CSV/Excel export
                    </li>
                    <li className="flex gap-x-3">
                        <CheckIcon /> Email support
                    </li>
                    <li className="flex gap-x-3">
                        <CheckIcon /> {workspaceCount} workspace
                    </li>
                    <li className="flex gap-x-3">
                        <CheckIcon /> <p>{users} user seats</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
