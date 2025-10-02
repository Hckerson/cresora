import Image from "next/image"

export default function Logo() {
    return(
        <div className="flex size-fit space-x-2 items-center">
            <div className="shrink-0">
                <Image width={100} height={100} alt="Favicon" src={`/svgs/logo.svg`} className="size-[36px]"/>

            </div>
            <div className="flex h-full items-center">
                Cresora
            </div>
        </div>
    )
}