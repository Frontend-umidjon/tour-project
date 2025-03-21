import { CarouselDemo } from "@/components/Carousel";
import Eighthday from "@/components/Eighthday";
import Fifthday from "@/components/Fifthday";
import Firstday from "@/components/Firstday";
import Footer from "@/components/Footer";
import Fourthday from "@/components/Fourthday";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Secondday from "@/components/Secondday";
import SecondHalfday from "@/components/SecondHalfday";
import Seventhday from "@/components/Seventhday";
import Sixthday from "@/components/Sixthday";
import Thirdday from "@/components/Thirdday";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselDemo/>
      <Hero/>
      <Firstday/>
      <Secondday  />
      <SecondHalfday/>
      <Thirdday/>
      <Fourthday/>
     <div className="ocean">
     <Fifthday/>
     <Sixthday/>
     </div>
      <Seventhday/>
      <Eighthday/>
      <Footer/>
    </>
  );
}
