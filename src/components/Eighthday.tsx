import React from "react";

const Eighthday = () => {
  return (
    <div className="relative h-screen bg-cover bg-center eighth">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h2 className="font-bold text-[40px] leading-[50px] tracking-normal text-white">
          <span className="text-[#F47648]">День 8.</span> Отъезд с <br />{" "}
          Камчатки. Трансфер <br /> в аэропорт
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-white mt-4">
          Заезд на рынок, прощальное посещение <br /> «медведей», фото на
          память. <br />
          Возвращайтесь следующим летом!
        </p>
      </div>
    </div>
  );
};

export default Eighthday;
