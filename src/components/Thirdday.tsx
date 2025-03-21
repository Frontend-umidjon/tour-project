import React from "react";
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";

const Thirdday = () => {
  return (
    <div className="thirdDay p-6 py-[100px] h-[900px]">
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
            <h2 className="font-bold text-[40px] leading-[50px] text-black">
              <span className="text-[#F47648] font-bold text-[40px] leading-[50px]">
                День 3.
              </span>{" "}
              Горные цирки и водопады вулкана Вачкажец
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-black">
              Вачкажец–горный массив и его окрестности, одно из красивейших мест
              первозданной камчатской природы. Небольшой пеший переход не успеет
              Вас утомить. <br /><br /> А в награду за труд в конце пути открывается
              великолепный вид на горное озеро в чаше кратера старого потухшего
              вулкана, обрамленное пиками старых, невысоких гор. <br /><br /> Выезд из
              гостиницы и переезд около 2 часов. Пеший переход около 5 км.в одну
              сторону к горным циркам вулкана Вачкажец, осмотр водопада. Обед.
              Отдых. <br /><br /> По прибытию в машину чай с шоколадом! Обратный переход по
              тому же пути. Продолжительность: 8 часов. Трансфер в гостиницу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdday;
