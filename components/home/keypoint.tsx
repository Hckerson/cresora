import clsx from "clsx";
import { geist } from "@/app/fonts";

export default function Keypoint() {
  return (
    <div className="relative paddy pb-18 box-border md:flex-row flex-col flex w-full items-center justify-between">
      <div className="flex  flex-col gap-y-0.5">
        <p
          className={clsx(
            geist.className,
            "text-foreground text-[42px] leading-[1.24] font-medium md:text-[62px] xl:text-[72px]",
          )}
        >
          5K
          <span className="text-[#FAB12C]">+</span>
        </p>
        <p></p>
      </div>
      <div className="flex  flex-col gap-y-0.5">
        <p
          className={clsx(
            geist.className,
            "text-foreground text-[42px] leading-[1.24] font-medium md:text-[62px] xl:text-[72px]",
          )}
        >
          2.5
          <span className="text-[#FAB12C]">x</span>
        </p>
        <p></p>
      </div>
      <div className="flex  flex-col gap-y-0.5">
        <p
          className={clsx(
            geist.className,
            "text-foreground text-[42px] leading-[1.24] font-medium md:text-[62px] xl:text-[72px]",
          )}
        >
          2K
          <span className="text-[#FAB12C]">+</span>
        </p>
        <p></p>
      </div>
    </div>
  );
}
