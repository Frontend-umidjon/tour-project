import Image from 'next/image';
import React from 'react'
import Hero1 from '@/assets/svg/hero1.svg'
import Hero2 from '@/assets/svg/hero2.svg'
import Hero3 from '@/assets/svg/hero3.svg'
import PlaneImg from "@/assets/svg/plane.svg";

const Hero = () => {
  return (
    <div className="rasm relative">
      <div className="container max-w-7xl mx-auto p-6 py-[100px]">
        <div className="grid grid-cols-2 items-end p-6">
          <div className="wrapper flex gap-10 flex-col">
            <div className="div_for_text flex flex-col gap-8">
              <h2 className="font-bold text-[48px] leading-[56px] tracking-[0%] text-[#121212]">
                Путешествие на край света начинается
              </h2>
              <h3 className="font-normal text-[24px] leading-[32px] tracking-[0%] text-[#313131]">
                Ваша мечта осуществилась, вы приняли решение, и вам предстоит
                путешествие на край света.
              </h3>
              <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#313131]">
                Этот маршрут лучший вариант для тех, кто хочет ощутить, как
                живёт самая молодая земля нашей планеты, многое увидеть,
                испытать на себе и полюбить, увезти целый рюкзак незабываемых
                чувств и впечатлений. Каждый день вы будете выезжать на
                радиальные маршруты, а проживать в комфортабельных двухместных
                номерах.
              </p>
            </div>
            <div className="div_for_images flex items-center justify-between gap-5">
              <div className="flex flex-col gap-2">
                <Image src={Hero1} alt="hero1" />
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#313131]">
                  Сложность
                </p>
                <h3 className="font-bold text-[16px] leading-[24px] tracking-[0%] text-[#212121]">
                  Для семейного отдыха
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <Image src={Hero2} alt="hero1" />
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#313131]">
                  Период
                </p>
                <h3 className="font-bold text-[16px] leading-[24px] tracking-[0%] text-[#212121]">
                  Июль - сентябрь
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                <Image src={Hero3} alt="hero1" />
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#313131]">
                  Проживание
                </p>
                <h3 className="font-bold text-[16px] leading-[24px] tracking-[0%] text-[#212121]">
                  Отель, без палаток
                </h3>
              </div>
            </div>
          </div>
          
              <Image src={PlaneImg} alt="plane"  className='absolute right-0' />
            
        </div>
        <div className="grid grid-cols-2 mt-10 p-6">
          <div className='flex flex-col gap-6'>
            <h3 className="font-semibold text-[24px] leading-[32px] tracking-[0%] text-[#DEDEDE]">
              Камчатка – земля великолепной заснеженной природы, действующих
              вулканов и диких мест, где ещё не ступала нога человека.
            </h3>
            <h4 className="font-light text-[16px] leading-[100%] tracking-[0%] text-[#DEDEDE]">
              “Когда мы подлетали к Камчатке, у меня захватило дух от
              увиденного. Это за гранью реальности. Невероятно!”
            </h4>
            <h4 className="font-light text-[24px] leading-[32px] tracking-[0%] text-[#DEDEDE]">
              Максим, @max_max
            </h4>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero