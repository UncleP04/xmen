import React from "react";
import Image from "next/image";
import BackgroundImg from "../../public/Images/bgOne.png";
import Logo from '../../public/Images/logo.png'

const Header: React.FC = () => {
  return (
    <div>
      <section className="relative w-[100%] flex justify-center align-middle lg:h-auto h-[100vh] overflow-x-hidden bg-primary">
        <Image
          src={BackgroundImg}
          alt="backImage.png"
          width={700}
          height={300}
          className="lg:w-[400px] w-[300px] lg:h-[600px] h-[500px] fixed top-0 lg:left-[30%] left-0"
        />

        <div className="mt-[15%] lg:mt-[3%] z-10">
          <span className="flex justify-center align-center" data-aos="zoom-in" data-aos-duration="1000">
            <Image src={Logo} alt="logo.png" width={700} height={300} className="lg:w-[180px] w-[100px] h-[100px] lg:h-[180px] self-center items-center" />
            <h1 className="uppercase text-[5em] lg:text-[10rem] font-bold text-white">Men</h1>
          </span>
          <span><p className="text-[2em] font-semibold uppercase text-center text-white" data-aos="zoom-in" data-aos-duration="1000">Join the party now</p></span>
        </div>
      </section>
    </div>
  );
};

export default Header;
