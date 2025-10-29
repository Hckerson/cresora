import clsx from "clsx";
import { Ellipsis } from "lucide-react";
import { inter } from "@/app/fonts";
import Button from "@/components/common/button";

export interface FrameProps {
    name: string;
    value: string;
    amount: string;
    action: string;
    percentage: string;
    showButton?: boolean;
}

export default function Pressable({
    data,
    showButton,
}: {
    data: FrameProps;
    showButton?: boolean;
}) {
    const { name, value, amount, action, percentage } = data;
    return (
        <div
            className={clsx(
                "box-border rounded-2xl border border-[#F0F0F0] p-2",
                inter.className,
            )}
        >
            <div className="bg-background flex flex-col gap-y-2 rounded-[10px] p-2 drop-shadow-lg">
                <div className="flexy items-center justify-between">
                    <p className="text-[10px] md:text-[13px] lg:text-[16px]">
                        {name}
                    </p>
                    <Ellipsis />
                </div>
                <div className="box-border w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-[13px] leading-[1.22] font-medium md:text-[16px] lg:text-[20px]">
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
                    <p className="text-primary-foreground py-1 text-xs">
                        {action}{" "}
                        <span className="text-foreground font-semibold">{`${amount}`}</span>{" "}
                        this month
                    </p>
                    {showButton && (
                        <button className="h-9 w-full rounded-[8px] border border-[#E4E4E4] bg-transparent text-sm hover:hover:bg-gray-100">
                            Analyze
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
