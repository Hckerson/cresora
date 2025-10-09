import Link from "next/link";
import Image from "next/image";
import CustomImage from "./custom-image";

interface PersonnelProps {
    name: string;
    role: string;
    imgSrc: string;
    link: string;
}

export default function PersonnelCard({ data }: { data: PersonnelProps }) {
    const { name, role, imgSrc, link } = data;
    return (
        <div className="box-border flex flex-col gap-y-6 rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF] p-4 md:p-6 xl:p-8">
            <CustomImage
                boxClass="rounded-[8px] bg-[#F2F2F2] "
                height={600}
                width={1280}
                classes=""
                alt={`Image of ${name}`}
                src={imgSrc}
            />
            <div className="flexy items-center justify-between">
                <div className="flex flex-1 flex-col items-start ">
                    <p className="text-sm md:text-[20px] text-start xl:text-2xl">{name}</p>
                    <p className="text-xs md:text-sm text-start xl:text-base">{role}</p>
                </div>
                <Link
                    href={link}
                    className="border=[#E4E4E4] size-[52px] rounded-[8px] border bg-[#FFFFFF] border-[#E4E4E4] p-3 shadow-inner"
                >
                    <Image
                        height={50}
                        width={50}
                        alt={`Linkedin logo`}
                        src={"/svgs/LinkedinLogo.svg"}
                        className="absolut inset-0"
                    />
                </Link>
            </div>
        </div>
    );
}
