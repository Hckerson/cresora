import clsx from "clsx";
import { geist } from "@/app/fonts";

interface PointProps {
    figure: string;
    symbol: string;
    label: string;
}

export default function Points({ data }: { data: PointProps[] }) {
    return (
        <div className="relative box-border paddy flex w-full flex-col items-center justify-between gap-y-6 pb-18 md:flex-row">
            {data.map((datum, idx) => (
                <div className="flex flex-col items-center gap-y-0.5" key={idx}>
                    <p
                        className={clsx(
                            geist.className,
                            "text-foreground text-[32px] leading-[1.24] font-medium md:text-[62px] xl:text-[72px]",
                        )}
                    >
                        {datum.figure}
                        <span className="text-[#FAB12C]">{datum.symbol}</span>
                    </p>
                    <p className="text-primary-foreground text-[16px] font-medium">
                        {datum.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
