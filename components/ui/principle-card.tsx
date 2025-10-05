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
        <div className="box-border rounded-[12px] border border-[#E4E4E4] bg-[#FFFFFF]">
            <div className="flex flex-col gap-y-8 p-8 md:gap-y-12 lg:gap-y-16">
                <Icon alt={alt} iconUrl={iconUrl} />
            </div>
            <div className="flex flex-col gap-y-4">
                <p className="lg:text-2xl md:text-[20px] text-base">{title}</p>
                <p className="lg:text-base md:text-[14px] text-xs">
                    {subject}
                </p>
            </div>
        </div>
    );
}
