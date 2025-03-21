'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import headLogo from "@/assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/[0.1] w-full shadow-md">
      <div className="max-w-[1278px] mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="max-md:w-[140px]" >
          <Image src={headLogo} alt="logo" width={166} height={40} className="cursor-pointer" />
        </Link>
        <ul className="hidden md:flex gap-[40px] text-[#275553] text-[16px] font-medium items-center">
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#1d3b3b]">
            <Link href="/schedule">Расписание Тура</Link>
          </li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#1d3b3b]">
            <Link href="/registration">Как записаться</Link>
          </li>
          <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#1d3b3b]">
            <Link href="/team">Команда</Link>
          </li>
          <li className="bg-transparent border-[1px] border-[#275553] text-[#275553] py-3 px-6 rounded-md hover:bg-[#1d3b3b] hover:text-white hover:shadow-lg transition-all duration-300">
            <Link href="/booking">Забронировать</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <IoMdClose className="text-[#275553] text-3xl" /> : <RxHamburgerMenu className="text-[#275553] text-3xl" />}
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-6 flex flex-col items-center gap-4 text-[#275553] text-lg rounded-b-lg transition-all ${isOpen ? "block" : "hidden"}`}
      >
        <Link href="/schedule" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:text-[#1d3b3b] transition">Расписание Тура</Link>
        <Link href="/registration" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:text-[#1d3b3b] transition">Как записаться</Link>
        <Link href="/team" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:text-[#1d3b3b] transition">Команда</Link>
        <Link href="/booking" className="bg-[#275553] text-white py-3 px-6 rounded-md hover:bg-[#1d3b3b] transition" onClick={() => setIsOpen(false)}>Забронировать</Link>
      </motion.div>
    </header>
  );
};

export default Header;
