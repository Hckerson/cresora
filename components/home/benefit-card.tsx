import CustomImage from "../ui/custom-image";

interface BenefitCardProps {
    title: string;
    subject: string;
    imageSrc: string;
    iconSrc: string;
    alt: string;
}

export default function BenefitCard({
    title,
    subject,
    imageSrc,
    iconSrc,
    alt,
}: BenefitCardProps) {
    return (
        <div className="bg-background box-border flex h-full flex-col justify-between gap-y-8 overflow-hidden rounded-3xl p-8">
            <div className="relative">
                <CustomImage
                    height={100}
                    width={100}
                    boxClass="size-[56px] xs:absolute mb-4 top-0 right-0 rounded-full bg-linear-to-r from-[#FEEAC1] to-[#FEC247] p-3"
                    alt={alt}
                    src={iconSrc}
                />
                <div className="flex flex-col gap-y-4 xl:pr-12">
                    <p className="text-foreground text-[20px] leading-[1.24] md:text-2xl">
                        {title}
                    </p>
                    <p className="text-primary-foreground text-xs md:text-sm">
                        {subject}
                    </p>
                </div>
            </div>
            <div className="bg-background box-border w-full rounded-3xl">
                <CustomImage
                    height={1080}
                    width={1920}
                    boxClass="rounded-3xl "
                    alt={alt}
                    classes="xl:h-[326px] min-h-[120px]"
                    src={imageSrc}
                />
            </div>
        </div>
    );
}
