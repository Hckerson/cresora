import Image from "next/image";
import clsx from "clsx";

export interface ImageProps {
    height: number;
    width: number;
    classes?: string;
    boxClass?: string;
    alt: string;
    src: string;
}

export default function CustomImage({
    width,
    height,
    classes,
    boxClass,
    alt,
    src,
}: ImageProps) {
    return (
        <div className={clsx("box-border", boxClass)}>
            <Image
                src={src}
                width={width}
                height={height}
                className={classes}
                alt={alt}
            />
        </div>
    );
}
