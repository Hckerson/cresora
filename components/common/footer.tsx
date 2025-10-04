import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import { medias } from "@/app/lib/placeholder-data";
import { footerData } from "@/app/lib/placeholder-data";

export default function Footer() {
    return (
        <div className="paddy pad-y pb-0 text-[18px] ">
            <div className="flex h-full w-full flex-col gap-y-12">
                <div className="relative flex flex-col justify-between lg:h-[264px] gap-y-6 lg:flex-row">
                    <div className="flex h-full flex-col justify-between text-[18px]">
                        <div className="flex flex-col gap-y-6 lg:h-full">
                            <Logo />
                            <p className="text-primary-foreground max-w-[30ch]">
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
                    <div className="grid w-fit md:grid-cols-2 gap-y-6">
                        <ul className="flex lg:max-w-[200px] flex-col gap-y-3 lg:gap-y-6">
                            <li className="font-semibold">Company</li>
                            {footerData.company.map((data, idx) => (
                                <li key={idx}>
                                    <Link className="lg:text-base text-sm" href={data.link}>{data.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-y-3 lg:gap-y-6">
                            <li className="font-semibold">Contact Information</li>
                            {footerData.contactInformation.map((data, idx) => (
                                <li key={idx} className="flex flex-col gap-y-2">
                                    <p className="lg:text-base text-sm" >{data.label}</p>
                                    <p className="lg:text-sm text-xs" >{data.value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="buttom  flex md:flex-row flex-col justify-between text-[18px]">
                    <p className="lg:text-base text-sm ">
                        © {new Date().getFullYear()} Cresora Inc. All Rights
                        Reserved
                    </p>
                    <span className="flex md:flex-row flex-col lg:text-base text-sm gap-x-6">
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
