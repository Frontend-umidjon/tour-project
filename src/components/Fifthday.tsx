import React from "react";
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";

const Fifthday = () => {
  return (
    <div className="py-[100px]  p-6">
      <div className="container max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className={`h-[433px] relative`}>
              <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full border-red-500 ">
                <Carousel slides={slideData} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-[40px] leading-[50px] text-white">
              <span className="text-[#F47648] font-bold text-[40px] leading-[50px]">
                День 5.
              </span>{" "}
              Морская прогулка к острову Старичков
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#ACACAC]">
              Инструктаж по поведению группы при передвижении на плавсредствах,
              приему таблеток от морской болезни. <br /><br /> Выезд на причал. Морская
              прогулка по Авачинской бухте. Осмотр панорамы города
              Петропавловска-Камчатского, Авачинской губы и Авачинского залива.
              Маршрут пролегает мимо бухты Тихая, острова Бабушкин камень, мыса <br /><br />
              Станицкого, камней «Три брата». Увлекательная возможность донной
              рыбалки на терпуга, ленка, камбалу у «Трех братьев», мыса
              Безымянный, у острова Старичков. Осмотр птичьих базаров -
              смешанных колонии кайр, моевок и бакланов. <br /><br /> Трансфер в гостиницу.
              Продолжительность 6 часов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthday;
