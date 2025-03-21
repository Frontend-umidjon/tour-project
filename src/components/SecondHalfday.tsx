import Image from 'next/image';
import React from 'react'
import Half1 from '@/assets/svg/half1.svg'
import Half2 from '@/assets/svg/half2.svg'
import Half3 from '@/assets/svg/half3.svg'
import Half4 from '@/assets/svg/half4.svg'

const SecondHalfday = () => {
  return (
    <div className="bg-[#F1F1F1] py-[50px]">
      <div className="container max-w-7xl mx-auto p-6">
        <div className="title mb-10">
          <h2 className="font-bold text-[36px] leading-[28px] tracking-normal text-black ">
            На протяжении маршрута вас ожидает:
          </h2>
        </div>
        <div className="wrapper grid grid-cols-4">
          <div className="card w-[288px] h-[373px] rounded-md flex bg-white flex-col gap-3">
            <div>
              <Image src={Half1} alt="half1" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <h3 className="font-bold text-[18px] leading-[24px] tracking-normal text-[#212121]">
                Аудиосопровождение
              </h3>
              <p className="font-normal text-[14px] leading-[24px] tracking-normal text-[#5A5A5A]">
                Новый способ увидеть и услышать, то место, где вы находитесь. С
                помощью аудиогида вы сможете совершить увлекательную экскурсию
                по городу.
              </p>
            </div>
          </div>

          <div className="card w-[288px] h-[373px] rounded-md flex bg-white flex-col gap-3">
            <div>
              <Image src={Half2} alt="half1" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <h3 className="font-bold text-[18px] leading-[24px] tracking-normal text-[#212121]">
                Разнообразное питание
              </h3>
              <p className="font-normal text-[14px] leading-[24px] tracking-normal text-[#5A5A5A]">
                Каждый обед мы готовим с большой любовью. Кормим вас
                традиционными камчатскими блюдами. Еда - залог хорошего отдыха!
              </p>
            </div>
          </div>

          <div className="card w-[288px] h-[373px] rounded-md flex bg-white flex-col gap-3">
            <div>
              <Image src={Half3} alt="half1" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <h3 className="font-bold text-[18px] leading-[24px] tracking-normal text-[#212121]">
                Безопасность на маршруте
              </h3>
              <p className="font-normal text-[14px] leading-[24px] tracking-normal text-[#5A5A5A]">
                Наша команда проводит инструктаж, рассказывает как правильно
                себя вести, как избежать опасных ситуаций.
              </p>
            </div>
          </div>

          <div className="card w-[288px] h-[373px] rounded-md flex bg-white flex-col gap-3">
            <div>
              <Image src={Half4} alt="half1" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <h3 className="font-bold text-[18px] leading-[24px] tracking-normal text-[#212121]">
                Потрясающие фото
              </h3>
              <p className="font-normal text-[14px] leading-[24px] tracking-normal text-[#5A5A5A]">
                Можете не переживать, что не успели сделать фото. Наш фотограф
                успевает везде и за всеми. У вас будут самые лучшие фото!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHalfday