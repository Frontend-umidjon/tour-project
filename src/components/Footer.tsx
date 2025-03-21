import Image from "next/image";
import React from "react";
import FooterImg from "@/assets/svg/footerLogo.svg";
import F1 from "@/assets/svg/f1.svg";
import F2 from "@/assets/svg/f2.svg";
import F3 from "@/assets/svg/f3.svg";
import F4 from "@/assets/svg/f4.svg";
import F5 from "@/assets/svg/f5.svg";
import F7 from "@/assets/svg/f7.svg";
import F8 from "@/assets/svg/f8.svg";
import F10 from "@/assets/svg/f10.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#212121] text-white">
      <div className="container p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-6 wrapper">
          <div className="flex flex-col first_div gap-5">
            <div className="flex gap-2 items-center">
              <Link className="flex gap-3 items-center" href="/">
                <Image src={FooterImg} alt="footerImg" />
                <h3>
                  DREAMKAM <br /> TOUR
                </h3>
              </Link>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]"
                    href="#"
                  >
                    Расписание тура
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]"
                    href="#"
                  >
                    Стоимость
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]"
                    href="#"
                  >
                    Как записаться
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]"
                    href="#"
                  >
                    Команда
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 second_div">
            <div className="flex gap-6">
              <a className="text-[#BABABA] text-[16px] cursor-pointer font-normal hover:underline leading-[24px] tracking-[0%]">
                @dreamkamtour
              </a>
              <button className="border border-white h-[42px] rounded-[5px] text-[14px] text-white w-[157px] cursor-pointer font-normal leading-[24px]">
                Подписаться
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Image src={F1} alt="f1" />
              <Image src={F2} alt="f2" />
              <Image src={F3} alt="f3" />
              <Image src={F4} alt="f4" />
              <Image src={F3} alt="f3" />
              <Image src={F1} alt="f1" />
            </div>
          </div>

          <div className="flex flex-col gap-6 third_div">
            <div className="flex gap-4">
              <div>
                <Image src={F5} alt="f4" />
              </div>
              <div>
                <h3>Смотрите видео отзывы наших клиентов</h3>
                <h4 className="text-[#BABABA] text-[16px] cursor-pointer font-normal hover:underline leading-[24px] tracking-[0%]">
                  Перейти в Instagram
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <h3>Социальные сети</h3>
              </div>
              <div className="flex gap-4">
                <Image className="cursor-pointer" src={F7} alt="f7" />
                <Image className="cursor-pointer" src={F8} alt="f10" />
                <Image className="cursor-pointer" src={F10} alt="f10" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <a href="tel:+ 7 (760) 354-23-23">+ 7 (760) 354-23-23</a>
              <p className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]">
                Работаем с 9:00 до 18:00
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]"
                href="mailto:info@dreamkamtour.ru"
              >
                info@dreamkamtour.ru
              </a>
              <p className="text-[#BABABA] text-[16px] font-normal hover:underline leading-[24px] tracking-[0%]">
                ул. Рубиннштерна, 41
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
