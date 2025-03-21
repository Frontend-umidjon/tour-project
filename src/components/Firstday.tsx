import React from 'react'
import Carousel from './ui/carousel';
import { slideData } from '@/data/slideData';

const Firstday = () => {
  return (
    <div className="firstDay p-6 py-[100px]">
      <div className="container max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-2">
          <div className='flex flex-col gap-5'>
            <h2 className="font-bold text-[40px] leading-[50px] text-white">
              <span className="text-[#F47648] font-bold text-[40px] leading-[50px]">
                День 1.
              </span>{" "}
              Прибытие. Встреча в аэропорту и размещение
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#ACACAC]">
              С высоты птичьего полета вы увидите знаменитые «домашние» вулканы
              – Корякский, Авачинский и Козельский. У выхода в аэропорту вас
              встретят с табличкой «ДРИМ ТУР». <br />
              <br />
              По пути в гостиницу сбор средств с членов группы, инструктаж по
              программе этого дня (бассейн с термальной водой, шашлык,
              знакомство с группой, алкоголь, фейерверк не раньше 20:00). <br />
              <br />
              После выезд (вид транспорта зависит от величины группы) на базу
              отдыха в курортный поселок Паратунка.
              <br />
              <br />
              Вечером, после прибытия на Камчатку всех участников (если рейсы
              разные), общая встреча, проверка снаряжения, обсуждение программы
              завтрашнего дня.
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
}

export default Firstday