import React from "react";
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";

const Sixthday = () => {
  return (
    <div className="py-[100px] p-6">
      <div className="container max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[40px] leading-[50px] text-white">
              <span className="text-[#F47648] font-bold text-[40px] leading-[50px]">
                День 6.
              </span>{" "}
              Берег Тихого океана, экскурсия по городу
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#ACACAC]">
              Поездка на берег Тихого океана, в район Халактырского пляжа.
              Прогулка. Обед в городе. Обзорная экскурсия по г.
              Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный
              рынок. Продолжительность -5 часов. Трансфер в гостиницу.
              <br /><br /> Пешеходная экскурсия к горе Верблюд, представляющую собой
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

export default Sixthday;
