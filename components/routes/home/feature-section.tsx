"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { geist } from "@/app/fonts";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { features } from "@/app/lib/placeholder-data";
import CustomImage from "@/components/ui/custom-image";
import FeatureCard from "@/components/ui/feature-card";
import Trigger from "@/components/ui/collapsible-trigger";
import { featureCardData } from "@/app/lib/placeholder-data";

export default function Features() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div
            className={clsx(
                "paddy xs:flex hidden flex-col gap-y-16 py-[144px]",
                geist.className,
            )}
        >
            <div className="box-border flex flex-col items-center xl:flex-row xl:justify-between">
                <div className="flex-1">
                    <p className="text-foreground w-[25ch] text-center text-[42px] leading-[1.24] font-medium xl:w-full xl:text-start xl:text-[60px]">
                        Smart Features for Modern Finance
                    </p>
                </div>
                <div className="flex flex-1 justify-end pt-4 xl:px-0 xl:pt-0">
                    <p className="text-primary-foreground xs:text-start max-w-[630px] px-6 text-center text-sm xl:w-[40ch] xl:px-0">
                        Explore the tools that help founders, operators, and
                        teams manage money with confidence from cash tracking to
                        budget controls
                    </p>
                </div>
            </div>
            <div className="box-border grid w-full grid-cols-1 gap-x-8 lg:grid-cols-2">
                <div className="bg-background grid h-full w-full gap-y-6">
                    {features.map((feature, idx) => (
                        <Collapsible
                            key={idx}
                            open={openIndex == idx}
                            onOpenChange={() =>
                                setOpenIndex(openIndex == idx ? null : idx)
                            }
                            className={clsx(
                                "border-foreground/30 group relative min-h-[94px] border-b",
                            )}
                        >
                            <div className="inset-0 flex flex-col py-8 pr-6 group-[data-state='open']:space-y-8">
                                <p>{feature.title}</p>
                                <CollapsibleContent className="flex max-w-5/6 flex-col space-y-8">
                                    <p className="text-primary-foreground text-sm">
                                        {feature.subject}
                                    </p>
                                    <Link
                                        href={feature.link}
                                        className="bg-background flex h-9 w-30 items-center justify-center rounded-[8px] border border-[#E4E4E4] text-sm font-medium shadow-inner"
                                    >
                                        Learn More
                                    </Link>
                                </CollapsibleContent>
                            </div>
                            <CollapsibleTrigger className="absolute top-8 right-0">
                                <Trigger isOpen={openIndex} idx={idx} />
                                <span className="sr-only">Toggle</span>
                            </CollapsibleTrigger>
                        </Collapsible>
                    ))}
                </div>
                <div className="bg-background relative box-border flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-[#dadcdf]">
                    <CustomImage
                        src="/images/guage.png"
                        alt="Score guage"
                        width={966}
                        height={722}
                        classes="max-w-[298px] max-h-[190px] -translate-y-5"
                    />
                    <CustomImage
                        src="/images/guage.png"
                        alt="Score guage"
                        width={966}
                        height={722}
                        classes="max-w-[298px] max-h-[190px]"
                        boxClass="absolute  top-1/2 -translate-y-1/2  left opacity-30"
                    />
                    <CustomImage
                        src="/images/guage.png"
                        alt="Score guage"
                        width={966}
                        height={722}
                        classes="max-w-[298px] max-h-[190px]"
                        boxClass="absolute  top-1/2 -translate-y-1/2  right opacity-30"
                    />
                    <div className="absolute bottom-10 h-[77px] w-[413px]">
                        {featureCardData.map((card, idx) => {
                            return (
                                <FeatureCard
                                    key={idx}
                                    title={card.title}
                                    idx={idx}
                                    subject={card.subject}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
