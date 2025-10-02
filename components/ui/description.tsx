import clsx from "clsx";

interface Description {
    title: string;
    description: string;
    classT?: string;
    classD?: string;
}

export default function Description({
    title,
    description,
    classT,
    classD,
}: Description) {
    return (
        <span className="mx-auto box-border flex items-center flex-col">
            <p
                className={clsx(
                    "text-foreground text-center text-[30px] leading-[1.24] font-medium md:text-[42px] xl:text-[62px]",
                    classT,
                )}
            >
                {title}
            </p>
            <p
                className={clsx(
                    "text-primary-foreground text-center text-xs lg:text-sm",
                    classD,
                )}
            >
                {description}
            </p>
        </span>
    );
}
