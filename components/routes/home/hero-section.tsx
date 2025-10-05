import clsx from "clsx";
import Blank from "./blank";
import Image from "next/image";
import { geist, atkinson } from "@/app/fonts";
import Button from "@/components/common/button";
import { roundedImages } from "@/app/lib/placeholder-data";

export default function HeroSection() {
    return (
        <div className="grid grid-cols-1 gap-y-[72px] px-6 pt-[98px] md:px-12 3xl:text-base 3xl:w-[1480px] mx-auto">
            <div className="flex w-full flex-col lg:flex-row">
                <div className="flex flex-1 flex-col gap-y-[24px]">
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
                    <div
                        className={clsx(
                            "xs:text-start flex flex-col gap-y-6 text-center text-[25px] leading-[1.24] text-[#030E1F] md:text-[62px] xl:text-[72px]",
                            geist.className,
                        )}
                    >
                        <p className="max-w-[25ch]">
                            Modern Finance Tools for Growing Companies
                        </p>
                        <p
                            className={clsx(
                                "xs:text-base max-w-[45ch] text-sm font-normal text-[#B6B7B8]",
                            )}
                        >
                            Built for founders, operators, and teams to stay on
                            top of cash flow, budgets, and runway in real time
                        </p>
                    </div>
                </div>
                <div className="flexy xs:items-end xs:flex-row box-border w-full flex-col justify-between pt-12 lg:w-fit lg:flex-col lg:justify-end lg:pt-0">
                    <Button
                        size="sm"
                        style="hover:bg-blue-600"
                        isLoading={false}
                    >
                        Start free trial
                    </Button>
                    <div className="flexy justify-between gap-x-4">
                        <p className="leading-1.1 text-base text-[#B6B7B8]">
                            Trusted by{" "}
                            <span className="block text-[#030E1F]">
                                1,200+ teams
                            </span>
                        </p>
                        <span className="flex items-center -space-x-2">
                            {roundedImages.map((image, idx) => (
                                <div
                                    key={idx}
                                    className="shrink-0 rounded-full"
                                >
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="Pinera icon"
                                        className="size-6 rounded-full"
                                        src={`/svgs/group.svg`}
                                    />
                                </div>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
            <Blank />
        </div>
    );
}
