"use client";
import clsx from "clsx";
import Link from "next/link";
import Button from "../common/button";
import Description from "../ui/description";
import Trigger from "../ui/collapsible-trigger";
import { faqdata } from "@/app/lib/placeholder-data";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="paddy pady">
            <Description
                title="You’re Not the First to Ask"
                description="We built Cresora to be clear and easy, and we think your questions should be too"
            />
            <div className="box-border flex lg:flex-row flex-col w-full gap-8 pt-12">
                <div className="bg-background grid h-full w-full gap-y-6">
                    {faqdata.slice(0, 3).map((feature, idx) => (
                        <Collapsible
                            key={idx}
                            open={openIndex == idx}
                            onOpenChange={() =>
                                setOpenIndex(openIndex == idx ? null : idx)
                            }
                            className={clsx(
                                "group relative min-h-[94px] rounded-3xl border border-b border-[#E4E4E4]",
                            )}
                        >
                            <div className="inset-0 flex flex-col px-6 py-8 group-[data-state='open']:space-y-8">
                                <p className="max-w-[85%] md:text-[20px] text-sm font-medium">
                                    {feature.title}
                                </p>
                                <CollapsibleContent className="flex max-w-5/6 flex-col space-y-8">
                                    <p className="text-primary-foreground text-xs xs:text-sm">
                                        {feature.subject}
                                    </p>
                                    <Link
                                        href={feature.link}
                                        className="bg-background flex h-9 w-30 items-center justify-center rounded-[8px] border border-[#E4E4E4] text-sm font-medium shadow-inner hover:bg-gray-200"
                                    >
                                        Learn More
                                    </Link>
                                </CollapsibleContent>
                            </div>
                            <CollapsibleTrigger className="absolute top-8 right-6">
                                <Trigger isOpen={openIndex} idx={idx} />
                                <span className="sr-only">Toggle</span>
                            </CollapsibleTrigger>
                        </Collapsible>
                    ))}
                </div>
                <div className="bg-background grid h-full w-full gap-y-6">
                    {faqdata.slice(3, 6).map((feature, idx) => (
                        <Collapsible
                            key={idx + 3}
                            open={openIndex == idx + 3}
                            onOpenChange={() =>
                                setOpenIndex(
                                    openIndex == idx + 3 ? null : idx + 3,
                                )
                            }
                            className={clsx(
                                "group relative min-h-[94px] rounded-3xl border border-b border-[#E4E4E4]",
                            )}
                        >
                            <div className="inset-0 flex flex-col px-6 py-8 group-[data-state='open']:space-y-8">
                                <p className="md:text-[20px] text-sm font-medium">
                                    {feature.title}
                                </p>
                                <CollapsibleContent className="flex max-w-5/6 flex-col space-y-8">
                                    <p className="text-primary-foreground text-xs xs:text-sm">
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
                            <CollapsibleTrigger className="absolute top-8 right-6">
                                <Trigger isOpen={openIndex} idx={idx} />
                                <span className="sr-only">Toggle</span>
                            </CollapsibleTrigger>
                        </Collapsible>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4 pt-8">
                <Button size="lg" style="hover:bg-blue-600">
                    Contact Us
                </Button>
                <p className="text-primary-foreground text-[14px]">
                    To make clear your question, feel free to contact us
                </p>
            </div>
        </div>
    );
}
