import CustomImage from "./custom-image";

interface IconProps {
    alt: string;
    iconUrl: string;
}

export default function Icon({ alt, iconUrl }: IconProps) {
    return (
        <CustomImage
            height={100}
            width={100}
            boxClass="size-[56px] xs:absolute mb-4 top-0 right-0 rounded-full bg-linear-to-r from-[#FEEAC1] to-[#FEC247] p-3"
            alt={alt}
            src={iconUrl}
        />
    );
}
