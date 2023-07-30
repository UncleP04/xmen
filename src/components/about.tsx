import React from "react";
import Image from "next/image";
import BackgroundImg from "../../public/Images/bgTwo.png";

const About: React.FC = () => {
  return (
    <div>
      <section className="relative w-[100%] flex justify-center align-middle bg-primary h-auto gap-20 overflow-x-hidden">
        <Image
          src={BackgroundImg}
          alt="backImage.png"
          width={700}
          height={300}
          className="lg:w-[400px] w-[400px] h-[400px] lg:h-[100%] absolute top-0 left-0"
        />

        <div className="flex flex-col lg:flex-row justify-between align-middle w-[100%] z-10 mt-[20%] mx-[15%]">
            <div className="h-[100%] lg:p-10">
                <h1 className="text-white text-[5em] font-bold uppercase text-center self-center mt-10" data-aos="zoom-in" data-aos-duration="1000">About</h1>
            </div>
            <div className="lg:w-[500px] lg:p-10">
                <p className="text-[20px] lg:text-[25px] text-white" data-aos="zoom-in" data-aos-duration="1000">XMEN is a memecoin to merry and party across the globe.</p>
                <p className="text-[20px] lg:text-[25px] text-white" data-aos="zoom-in" data-aos-duration="1000">With total supply of <span className="text-secondary">44 billion</span> tokens inspired from
                 the remarkable 44 billion dollars Elon Musk used to acquire Twitter</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
