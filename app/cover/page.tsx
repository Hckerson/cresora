import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { NeueMontreal } from "../fonts";

export default function Cover() {
  return (
    <div className="box-border flex h-screen w-full flex-col justify-between bg-[#FAF8F5] p-[40px] lg:p-[40px] lg:pt-[30px] xl:p-[60px] xl:pt-[50px] 2xl:p-[80px] 2xl:pt-[70px]">
      <div className="flex gap-x-[27px]">
        <div className="relative flex">
          <div className="absolute top-1/2 left-[24px] size-[16px] -translate-y-1/2 rounded-full bg-white"></div>
          <Link
            href={``}
            className="inset-0 border-[1.6px] pl-[50px] rounded-[80px] font-normal 2xl:text-[29px] px-[28px] py-[14px] bg-[#3B934E] text-white"
          >
            <p>Completed</p>
          </Link>
        </div>
        <Link
          href={``}
          className="rounded-[80px] font-normal 2xl:text-[29px] border-[1.6px] border-[#000000]/20 px-[28px] py-[14px]"
        >
          <p>Products</p>
        </Link>
        <Link
          href={``}
          className="rounded-[80px] font-normal xl:text-[29px] border-[1.6px] border-[#000000]/20 px-[28px] py-[14px]"
        >
          <p>5 July 2025</p>
        </Link>
      </div>
      <div className="relative box-border -translate-x-[20px] xl:h-[330px]">
        <p
          className={clsx(
            "leading-[1] font-normal text-[#3D3D3D] xl:text-[200px]",NeueMontreal.className
          )}
        >
          Crosera
        </p>
        <p
          className={clsx(
            "leading-[1] font-normal text-[#3D3D3D] opacity-60 xl:text-[90px]",NeueMontreal.className
          )}
        >
          Company Financial Product
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-[5px]">
          <p className="font-medium leading-[40px] text-[29px] text-[#3D3D3D]">Lely Catur Hariyanto</p>
          <p className="font-normal leading-[20px]  text-[25px] text-[#3D3D3D]/32">UI Designer</p>
        </div>
        <div className="h-fit w-fit">
          <div className="grid h-[65px] w-[198px] grid-cols-[65px_auto] gap-x-[10px]">
            <div className="shrink-0">
              <Image
                height={100}
                width={100}
                alt="Pinera icon"
                src={`/svgs/group.svg`}
              />
            </div>
            <p className="font-semibold text-wrap text-[37px] leading-[0.96] text-[#3D3D3D]">Pinara Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
