"use client";
import clsx from "clsx";
import Logo from "./logo";
import Link from "next/link";
import Button from "./button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/lib/placeholder-data";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className="fixed top-0 z-50 box-border h-[93px] w-full border-b border-b-[#E4E4E4] bg-white">
            <div className="3xl:w-[1480px] mx-auto flex h-[93px] items-center justify-between px-6 md:px-12">
                <Logo />
                <div className="flex gap-x-5">
                    <div className="xs:grid-cols-3 xs:grid xs:gap-x-4 hidden max-w-[492px] md:grid-cols-5 md:gap-x-6 xl:gap-x-12">
                        {navLinks.map((link, idx) => (
                            <div
                                key={idx}
                                className={clsx(
                                    "flex items-center justify-center",
                                    pathname === link.link
                                        ? "text-foreground"
                                        : "text-primary-foreground",
                                    idx > 2 ? "hidden md:flex" : "",
                                )}
                            >
                                <Link
                                    href={link.link}
                                    style={{}}
                                    className="text-xs md:text-sm xl:text-base"
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="relative box-border flex size-[44px] rounded-[8px] border-1 border-[#E4E4E4] bg-white shadow-inner lg:hidden">
                        <div
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Menu size={24} className="" />
                        </div>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="lg"
                    visibility="lg:block hidden"
                    style="hover:bg-gray-100"
                >
                    Sign in
                </Button>
            </div>
            <div className="absolute inset-0 mt-[93px] block h-screen gap-y-4 lg:hidden">
                {isMenuOpen && (
                    <div className="xs:p-6 z-20 flex h-full flex-col gap-y-4 bg-black/50 p-4 md:p-8">
                        <ul className="box-border flex w-full flex-col gap-y-6">
                            <li className="block max-w-1/2 rounded-[8px] border border-[#E4E4E4] bg-white p-1 xs:hidden">
                                <div className="rounded-[6px] border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] p-3 text-xs text-black md:text-sm xl:text-base">
                                    <Link
                                        href="/features"
                                        style={{}}
                                        className=""
                                    >
                                        Home
                                    </Link>
                                </div>
                            </li>
                            <li className="block max-w-1/2 rounded-[8px] border border-[#E4E4E4] bg-white p-1 xs:hidden">
                                <div className="rounded-[6px] border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] p-3 text-xs text-black md:text-sm xl:text-base">
                                    <Link
                                        href="/features"
                                        style={{}}
                                        className=""
                                    >
                                        About
                                    </Link>
                                </div>
                            </li>
                            <li className="block max-w-1/2 rounded-[8px] border border-[#E4E4E4] bg-white p-1 xs:hidden">
                                <div className="rounded-[6px] border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] p-3 text-xs text-black md:text-sm xl:text-base">
                                    <Link
                                        href="/features"
                                        style={{}}
                                        className=""
                                    >
                                        Pricing
                                    </Link>
                                </div>
                            </li>

                            <li className="block max-w-1/2 rounded-[8px] border border-[#E4E4E4] bg-white p-1 md:hidden">
                                <div className="rounded-[6px] border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] p-3 text-xs text-black md:text-sm xl:text-base">
                                    <Link
                                        href="/features"
                                        style={{}}
                                        className=""
                                    >
                                        Features
                                    </Link>
                                </div>
                            </li>
                            <li className="block max-w-1/2 rounded-[8px] border border-[#E4E4E4] bg-white p-1 md:hidden">
                                <div className="rounded-[6px] border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] p-3 text-xs text-black md:text-sm xl:text-base">
                                    <Link
                                        href="/contacts"
                                        style={{}}
                                        className=""
                                    >
                                        Contace
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <Button
                                variant="default"
                                visibility="lg:hidden block"
                                size="lg"
                                style="hover:bg-gray-100"
                            >
                                Sign in
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
