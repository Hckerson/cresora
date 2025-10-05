import Icon from "./icon";

interface PricipleProps {
    alt: string;
    iconUrl: string;
    title: string;
    subject: string;
}

export default function PrincipleCard({ data }: { data: PricipleProps }) {
    const { alt, iconUrl, title, subject } = data;

    return (
        <div className="box-border h-fit rounded-[12px] border border-[#E4E4E4] bg-[#FFFFFF]">
            <div className="relative flex flex-col gap-y-8 p-7 md:gap-y-8 lg:gap-y-12">
                <Icon alt={alt} iconUrl={iconUrl} bClass="" />
                <div className="flex flex-col justify-between gap-y-4">
                    <p className="text-primary text-base md:text-[20px] lg:text-2xl">
                        {title}
                    </p>
                    <p className="text-primary-foreground text-xs md:text-[14px] lg:text-base">
                        {subject}
                    </p>
                </div>
            </div>
        </div>
    );
}
