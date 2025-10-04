import clsx from "clsx";
import { geist } from "@/app/fonts";
import BenefitCard from "../ui/benefit-card";
import { benefitCardData } from "@/app/lib/placeholder-data";

// email-template.types.ts
export interface BenefitCardProps {
    title: string;
    subject: string;
    iconUrl: string;
    imageUrl: string;
}

export default function Benefits() {
    return (
        <div
            className={clsx(
                "paddy flex flex-col gap-y-12 pt-12 md:py-24 lg:pt-32",
                geist.className,
            )}
        >
            <span className="mx-auto box-border">
                <p className="text-foreground pb-3 text-center text-[20px] leading-[1.24] font-medium md:text-[42px] xl:text-[62px]">
                    Clarity and Control Financial Move
                </p>
                <p className="text-primary-foreground text-center text-xs">
                    Simplify how you track, plan, and report finances. Cresora
                    brings it all together so you can focus on what matters
                    most.
                </p>
            </span>
            <div className="box-border grid">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:grid-rows-2">
                    {benefitCardData.map((cardData, idx) => {
                        const { title, iconUrl, imageUrl, subject } = cardData;
                        const big = idx == 1 || idx == 2;
                        return (
                            <div
                                key={idx}
                                className={clsx(
                                    "box-border rounded-3xl border border-[#E4E4E4]",
                                    big ? "lg:col-span-3" : "lg:col-span-2",
                                )}
                            >
                                <BenefitCard
                                    title={title}
                                    iconSrc={iconUrl}
                                    imageSrc={imageUrl}
                                    subject={subject}
                                    alt={title}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
