import clsx from "clsx";
import Image from "next/image";
export default function first() {
    return (
        <div className="flexy h-screen">
            <div
                className={clsx(
                    "max-h-[165px] max-w-[106px] flex items-center justify-center rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF]",
                )}
            >
                <Image
                    className="rounded-2xl relative h-full drop-shadow-xl"
                    alt="Node image"
                    src={"/images/logo.png"}
                    width={300}
                    height={200}
                ></Image>
            </div>
        </div>
    );
}
