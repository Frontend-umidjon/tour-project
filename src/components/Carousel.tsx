"use client";
import Carousel from "./ui/carousel";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { slideData } from "@/data/slideData";

export function CarouselDemo() {
  

  return (
    <div className="h-[833px] hero-image relative">
      <div className="absolute top-[163px] h-[380px] left-[96px] flex flex-col">
        <h1 className="max-w-[616px] text-white leading-[64px] text-[64px] font-extrabold">Мечты о далекой Камчатке - близко</h1>
        <span className="px-[24px] bg-[#F47648] max-w-[481px] rounded-[16px] mt-[25px] flex justify-center">
          <h2 className="text-[30px] text-white font-bold leading-[56px]">23.06 - 04.07  DREAM TOUR</h2>
        </span>
        <p className="max-w-[384px] mt-[40px] text-[20px] text-white leading-[28px]">Тур перевернет ваш мир с ног на голову и оставит впечатления на всю жизнь. </p>
        <span className="flex items-center mt-[18px] gap-[18px]">
          <p className="text-[18px] leading-[24px]  text-white hover:underline cursor-pointer underline-gray-400">Расписание тура</p>
          <button className="flex items-center p-[10px] border border-white rounded-full" >
           <IoIosArrowRoundUp className="text-white cursor-pointer transform rotate-45 text-[34px]  " />
          </button>
        </span>
        <div className="flex items-center gap-4 mt-[151px] ">
          <span className="flex items-center mt-[18px] gap-[18px]">
           
            <FaFacebookF className="text-white cursor-pointer text-[18px]  " />
          </span>
          <span className="flex it <ems-center mt-[18px] gap-[18px]">
           
           <RiInstagramFill className="text-white cursor-pointer  text-[18px]  " /> 
            </span>
        </div>
      </div>
      <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden md:w-[60%] ">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}