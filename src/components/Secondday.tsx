import React from "react";
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";
import Image from "next/image";
import Mountain from '@/assets/svg/secondday.svg'
import clouds from '@/assets/svg/clouds.svg'
import mountainClouds from '@/assets/svg/mountainClouds.svg'
const Secondday = () => {
  return (
    <div className="p-10 py-[100px] relative ">
      <Image src={clouds} alt="clouds" className="absolute top-[-130px] left-0 z-10 w-full" />
      <div className="container max-w-7xl mx-auto p-6">
        <div className="wrapper grid gap-10 grid-cols-[60%_40%]">
          <div className="left flex flex-col gap-10">
            <h2 className="font-bold text-[40px] leading-[50px] text-[#212121]">
              <span className="font-bold text-[40px] leading-[50px] text-[#F47648]">
                День 2.
              </span>{" "}
              Вилючинский водопад, вулкан и Верхне-Паратунские термальные
              источники
            </h2>
            <h3 className="font-normal text-[16px] leading-[24px] text-[#313131]">
              Инструктаж перед поездкой (передвижение и поведение группы в лесу,
              общение с медведями, форма одежды, ), снаряжение, (взять тару для
              воды при заезде на Зайкин ключ, купальные принадлежности). <br /><br /> Сбор
              участников на Роуп Джамп для прыжков с высоты над водопадом.
              Заранее решаем кто прыгает.
            </h3>
            <div className={`h-[433px] relative`}>
              <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full  ">
                <Carousel slides={slideData} />
              </div>
            </div>
          </div>
          <div className="right flex flex-col gap-10 items-end">
            <div className="w-full relative ">
              <Image src={Mountain} width={600} height={600}  alt="secondday" />
            </div>
            <div>
              <h3 className="font-normal text-[16px] leading-[24px] text-[#313131]">
              Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к
              подножию вулкана Вилючинский. Обзорная пешеходная экскурсия к
              водопаду Вилючинский. <br /><br /> Термос с чаем, шоколад. Возвращение назад.
              Обед. Купание в Верхне-Паратунских термальных источниках,
              расположенных на склоне сопки Горячая. <br /><br /> Продолжительность – 6-8
              часов. Трансфер в гостиницу.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondday;
