import React from "react";
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";
import Image from "next/image";
import Mountain2 from "@/assets/svg/mountain2.svg";
import clouds from "@/assets/svg/clouds.svg";
const Seventhday = () => {
  return (
    <div className="p-10 py-[100px] relative ">
      <Image src={clouds} alt="clouds" className="absolute top-[-130px] left-0 w-full" />
      <div className="container max-w-7xl mx-auto p-6">
        <div className="wrapper grid gap-20 grid-cols-[60%_40%]">
          <div className="left flex flex-col gap-10">
            <h2 className="font-bold text-[40px] leading-[50px] text-[#212121]">
              <span className="font-bold text-[40px] leading-[50px] text-[#F47648]">
                День 7.
              </span>{" "}
              Вертолетная экскурсия в Долину Гейзеров и кальдеру вулкана Узон /
              свободный день
            </h2>
            <h3 className="font-normal text-[16px] leading-[24px] text-[#313131]">
              Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим
              оператором вертолётных туров на Камчатке. Выезд в аэропорт «Витязь
              –Аэро». К вашим услугам –современный аэропортовый комплекс,
              включающий в себя удобный зал ожидания, кафетерий, сувенирный
              магазин. <br /><br /> Перелёт до Долины гейзеров занимает 1 час 10 минут. По
              пути, при благоприятных условиях, вы осмотрите два действующих
              вулкана – Карымский и Малый Семячик из окон вертолёта.
            </h3>
            <div className={`h-[433px] relative`}>
              <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full border-red-500 ">
                <Carousel slides={slideData} />
              </div>
            </div>
          </div>
          <div className="right flex flex-col gap-10 items-end">
            <div className="">
              <Image src={Mountain2} width={500} height={500} alt="secondday" />
            </div>
            <div>
              <h3 className="font-normal text-[16px] leading-[24px] text-[#313131]">
                Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к
                подножию вулкана Вилючинский. Обзорная пешеходная экскурсия к
                водопаду Вилючинский. <br />
                <br /> Термос с чаем, шоколад. Возвращение назад. Обед. Купание
                в Верхне-Паратунских термальных источниках, расположенных на
                склоне сопки Горячая. <br />
                <br /> Продолжительность – 6-8 часов. Трансфер в гостиницу.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seventhday;
