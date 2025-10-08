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
                "text-foreground xs:p-8 box-border flex flex-col gap-y-8 rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF] p-5",
                geist.className,
            )}
        >
            <div
                className={clsx(
                    "xs:p-6 flex flex-col gap-y-6 rounded-[12px] bg-[#FCFBFC] p-3",
                    name == "Growth" &&
                        "bg-linear-to-b from-[#1763CC]/4 to-[#1763CC]/32",
                )}
            >
                <div className="flex flex-col gap-y-2">
                    <p className="text-foreground xs:text-2xl text-sm leading-[1.32] font-medium">
                        {name}
                    </p>
                    <p className="text-primary-foreground xs:text-[16px] text-xs">
                        {about}
                    </p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex">
                        <p className="xs:text-base text-xs leading-[1.24] font-semibold tracking-wide">
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
                        <Link
                            href={link}
                            className="xs:text-[16px] flex h-full w-full items-center justify-center text-xs"
                        >
                            Get this plan
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <p className="text-[14px] font-medium md:text-[16px] xl:text-[20px]">
                    This plan includes
                </p>
                <ul className="flex w-full flex-col gap-y-4 text-xs md:text-[12px] xl:text-[18px]">
                    <li className="flex items-center gap-x-3 ">
                        <CheckIcon /> <p>{aiGrade} AI-powered spend insights</p>
                    </li>

                    <li className="flex items-center gap-x-3">
                        <CheckIcon /> Real-time cash flow tracking
                    </li>
                    <li className="flex items-center gap-x-3">
                        <CheckIcon /> CSV/Excel export
                    </li>
                    <li className="flex items-center gap-x-3">
                        <CheckIcon /> Email support
                    </li>
                    <li className="flex items-center gap-x-3">
                        <CheckIcon /> {workspaceCount} workspace
                    </li>
                    <li className="flex items-center gap-x-3">
                        <CheckIcon /> <p>{users} user seats</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
