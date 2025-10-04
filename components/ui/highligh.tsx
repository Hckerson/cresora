import clsx from "clsx";
import { atkinson } from "@/app/fonts";

export default function Hightlight() {
    return (
        <div className="xs:h-7 xs:w-fit box-border flex w-[264px] items-center justify-center rounded-[2px] bg-[#FAB12C]/16 p-1">
            <p
                className={clsx(
                    "xs:w-full w-[25ch] text-center text-[#FAB12C]",
                    atkinson.className,
                )}
            >
                / #1 Finance Platform for Growing Companies
            </p>
        </div>
    );
}
