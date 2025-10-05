import clsx from "clsx";
import CustomImage from "./custom-image";

interface IconProps {
    alt: string;
    iconUrl: string;
    bClass:string
}

export default function Icon({ alt, iconUrl, bClass }: IconProps) {
    return (
        <CustomImage
            height={100}
            width={100}
            boxClass={clsx("size-[56px]  rounded-full bg-linear-to-r from-[#FEEAC1] to-[#FEC247] p-3",bClass )}
            alt={alt}
            src={iconUrl}
        />
    );
}
