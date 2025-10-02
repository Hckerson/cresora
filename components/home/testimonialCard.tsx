import CustomImage from "../ui/custom-image";

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
        <div className="bg-background box-border flex  flex-col justify-between lg:h-[310px] gap-y-6 rounded-3xl border border-[#E4E4E4] p-8">
            <div className="relative flex w-full">
                <div className="box-border flex flex-col md:flex-row gap-y-3 flex-1 items-start gap-x-3">
                    <CustomImage
                        height={100}
                        width={100}
                        boxClass="size-[56px] shadow-inner drop-shadow-md rounded-full"
                        alt={alt}
                        classes="rounded-full h-full w-full object-cover  border"
                        src={avatarSrc}
                    />
                    <div className="flex flex-col">
                        <p className="text-foreground text-[18px] leading-[1.24] font-medium md:text-2xl">
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
                    boxClass="size-[56px]   rounded-full bg-linear-to-r from-[#FEEAC1] to-[#FEC247] p-3"
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
                <div className="span flex flex-col gap-y-6">
                    <p className="text-foreground text-[20px] leading-[1.24] md:text-2xl">
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
