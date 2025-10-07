import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import { medias } from "@/app/lib/placeholder-data";
import { footerData } from "@/app/lib/placeholder-data";

export default function Footer() {
    return (
        <div className="paddy pad-y pb-0 text-[18px] 3xl:w-[1480px] mx-auto">
            <div className="flex h-full w-full flex-col gap-y-12">
                <div className="relative flex flex-col justify-between gap-y-6 lg:h-[264px] lg:flex-row">
                    <div className="flex h-full flex-col justify-between text-[18px]">
                        <div className="flex flex-col gap-y-6 lg:h-full">
                            <Logo />
                            <p className="text-primary-foreground max-w-[30ch] text-xs md:text-sm xl:text-base">
                                We bring clarity and control to your company's
                                financial management
                            </p>
                        </div>
                        <div className="flex gap-x-6 pt-6">
                            {medias.map((media, idx) => (
                                <Link href={media.link} key={idx}>
                                    <Image
                                        height={50}
                                        width={50}
                                        alt={`${media.name} logo`}
                                        src={media.src}
                                        className="size-6"
                                    />
                                </Link>
                            ))}
                            <p className="font-medium">Contra</p>
                        </div>
                    </div>
                    <div className="grid w-fit gap-y-6 md:grid-cols-2">
                        <ul className="flex flex-col gap-y-3 lg:max-w-[200px] lg:gap-y-6">
                            <li className="font-semibold">Company</li>
                            {footerData.company.map((data, idx) => (
                                <li key={idx}>
                                    <Link
                                        className="text-xs md:text-sm xl:text-base"
                                        href={data.link}
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-y-3 lg:gap-y-6">
                            <li className="font-semibold">
                                Contact Information
                            </li>
                            {footerData.contactInformation.map((data, idx) => (
                                <li key={idx} className="flex flex-col gap-y-2">
                                    <p className="text-xs md:text-sm xl:text-base">
                                        {data.label}
                                    </p>
                                    <p className="text-xs lg:text-sm">
                                        {data.value}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="buttom flex flex-col justify-between text-[18px] md:flex-row">
                    <p className="text-xs md:text-sm xl:text-base">
                        © {new Date().getFullYear()} Cresora Inc. All Rights
                        Reserved
                    </p>
                    <span className="flex flex-col gap-x-6 text-xs md:flex-row md:text-sm xl:text-base">
                        <p>
                            <Link className="" href={"/terms"}>
                                Terms of Service
                            </Link>
                        </p>
                        <p>
                            <Link className="" href={"/privacy"}>
                                Privacy Policy
                            </Link>
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}
