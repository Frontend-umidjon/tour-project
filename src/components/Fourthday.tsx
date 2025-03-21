import React from "react";
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";
import Image from "next/image";
import chayka from "@/assets/chayka.png";
const Fourthday = () => {
  return (
    <div className="bg-black py-[100px] p-6 relative">
      <Image src={chayka} alt="chayka" className="absolute bottom-[-120px] right-[180px]" />
      <div className="container max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[40px] leading-[50px] text-white">
              <span className="text-[#F47648] font-bold text-[40px] leading-[50px]">
                День 4.
              </span>{" "}
              Экскурсия к подножию Авачинского вулкана
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#ACACAC]">
              Инструктаж по поведению группы в горах. Проверка снаряжения.Выезд
              на автомашине на вулканическое плато (высота 900 м) к подножию
              Авачинского вулкана (2 часа). <br />
              <br /> Пешеходная экскурсия к горе Верблюд, представляющую собой
              вулканическую экструзию. Находится в седловине между Корякским и
              Авачинским вулканами, относительная высота 100-150 м, <br />
              <br />
              ширина - около 100 м и по длине она протягивается на 500 м.,
              состоит из трех сросшихся блоков. Обед. Поездка в Паратунку с
              купанием. Продолжительность – 8 часов. Трансфер в гостиницу.
            </p>
          </div>
          <div>
            <div className={`h-[433px] relative`}>
              <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full border-red-500 ">
                <Carousel slides={slideData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthday;
