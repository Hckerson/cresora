"use client";
import Logo from "./logo";
import Link from "next/link";
import Button from "./button";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/lib/placeholder-data";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 box-border border-b border-b-[#E4E4E4] bg-white z-50 flex w-full items-center justify-between px-6 h-[93px]  md:px-12">
      <Logo />
      <div className="hidden max-w-[492px] md:grid md:grid-cols-5 md:gap-x-6 xl:gap-x-12">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.link}
            className={clsx("flex items-center justify-center",
              pathname === link.link
                ? "text-foreground"
                : "text-primary-foreground",
            )}
          >
            {link.name}
          </Link>             
        ))}
      </div>
      <Button variant="ghost" size="sm" visibility="md:block hidden">
        Sign in
      </Button>
    </div>
  );
}
