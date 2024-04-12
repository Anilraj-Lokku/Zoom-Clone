import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
 title: string;
 img: string;
 description: string;
 className: string;
 handleClick: () => void;
}

const HomeCard = ({
 img,
 title,
 description,
 className,
 handleClick,
}: HomeCardProps) => {
 return (
  <div
   className={cn(
    "bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] cursor-pointer rounded-[14px]",
    className
   )}
   onClick={handleClick}
  >
   <div className="flex-center glassmorphism size-12 rounded-[10px]">
    <Image src={img} alt="Metting-Icon" width={27} height={27} />
   </div>

   <div className="flex flex-col gap-3">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-lg font-normal">{description}</p>
   </div>
  </div>
 );
};

export default HomeCard;
