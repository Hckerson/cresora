import CustomImage from "./custom-image";

interface TestimonialCardProps {
    title: string;
    subject: string;
    iconSrc: string;
    avatarSrc: string;
    name: string;
    role: string;
    alt: string;
}

export default function TestimonialCard({
    title,
    subject,
    avatarSrc,
    name,
    role,
    iconSrc,
    alt,
}: TestimonialCardProps) {
    return (
        <div className="bg-background box-border flex flex-col justify-between gap-y-6 rounded-3xl border border-[#E4E4E4] p-5 md:p-8 lg:h-[310px]">
            <div className="relative flex w-full">
                <div className="box-border flex flex-1 flex-col items-start gap-x-3 gap-y-3 md:flex-row">
                    <CustomImage
                        height={100}
                        width={100}
                        boxClass="size-[36px] md:size-[56px] shadow-inner drop-shadow-md rounded-full"
                        alt={alt}
                        classes="rounded-full h-full w-full object-cover  border"
                        src={avatarSrc}
                    />
                    <div className="flex flex-col">
                        <p className="text-foreground text-[12px] md:text-[18px] leading-[1.24] font-medium md:text-2xl">
                            {name}
                        </p>
                        <p className="text-primary-foreground text-xs md:text-sm">
                            {role}
                        </p>
                    </div>
                </div>
                <CustomImage
                    height={100}
                    width={100}
                    boxClass="size-[36px] md:size-[56px]   rounded-full bg-linear-to-r from-[#FEEAC1] to-[#FEC247] p-3"
                    alt={alt}
                    src={iconSrc}
                />
            </div>
            <div className="bg-background box-border w-full rounded-3xl">
                <CustomImage
                    height={20}
                    width={100}
                    boxClass="rounded-3xl "
                    alt={alt}
                    classes=""
                    src={"/images/stars.png"}
                />
                <div className="span flex flex-col gap-y-3 md:gap-y-6 pt-4">
                    <p className="text-foreground md:text-[16px] text-[12px] lg:text-[20px] leading-[1.24] md:text-2xl">
                        {title}
                    </p>
                    <p className="text-primary-foreground text-xs md:text-sm">
                        {subject}
                    </p>
                </div>
            </div>
        </div>
    );
}
