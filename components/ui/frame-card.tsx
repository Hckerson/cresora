import clsx from "clsx";
import { Ellipsis } from "lucide-react";
import { inter } from "@/app/fonts";

export interface FrameProps {
    name: string;
    value: string;
    amount: string;
    action: string;
    percentage: string;
}

export default function FrameCard({ data }: { data: FrameProps }) {
    const { name, value, amount, action, percentage } = data;
    return (
        <div
            className={clsx(
                "box-border border border-[#F0F0F0] p-3",
                inter.className,
            )}
        >
            <div className="bg-background flex flex-col gap-y-4 rounded-[12px] p-4 drop-shadow-lg">
                <div className="flexy items-center justify-between">
                    <p className="text-[12px] md:text-[15px] lg:text-[18px]">
                        {name}
                    </p>
                    <Ellipsis />
                </div>
                <div className="box-border w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-[15px] leading-[1.32] font-medium md:text-[20px] lg:text-[28px]">
                            {value}
                        </p>
                        <span
                            className={clsx(
                                "h-fit w-fit rounded-full px-1 py-0.5 text-xs",
                                percentage.startsWith("+")
                                    ? "bg-[#02A83C]/24"
                                    : "bg-[#F23D3F]/24",
                            )}
                        >
                            {percentage}
                        </span>
                    </div>
                    <p className="text-primary-foreground text-xs">
                        You {action}{" "}
                        <span className="text-foreground font-semibold">{`${amount}`}</span>{" "}
                        this month
                    </p>
                </div>
            </div>
        </div>
    );
}
