'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/logo.png";
import { useEffect } from 'react';


const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
      <nav className="flex flex-col lg:flex-row w-[100%] justify-between align-middle bg-transparent px-[4%] relative z-20">
        <div className="w-16 h-16">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%] object-fit"
          />
        </div>
        <div className={`${isOpen ? 'h-[110vh] lg:h-auto top-[-20px]' : 'responsive opacity-0 lg:opacity-100'} fixed  lg:relative list-none navbar flex flex-col lg:flex-row justify-between align-middle lg:w-[70%] w-[100%] lg:bg-transparent bg-primary sm:top-0 sm:left-0`}>
          <ul className="float-left flex flex-col lg:flex-row justify-evenly align-middle gap-[40px] mt-[5%] lg:mt-0 h-[60%] lg:h-0">
            <li className="self-center text-center lg:my-0 my-[3%] text-white">
              <Link href="#home">Home</Link>
            </li>
            <li className="self-center text-center my-[3%] lg:my-0 text-white">
              <Link href="#about">About</Link>
            </li>
            <li className="self-center text-center lg:my-0 my-[3%] text-white">
              <Link href="#tokens">Tokenomics</Link>
            </li>
            <li className="self-center text-center lg:my-0 my-[3%] text-white">
              <Link href="#party">Party</Link>
            </li>
          </ul>
          <div className="self-center text-center pt-[70px] lg:pt-0 h-[40%] lg:h-0">
            <Link href="" className="rounded-lg py-2 px-4 text-white bg-button">
              Join Now
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex flex-col justify-between align-middle w-20 z-50 fixed top-[5%] right-[5%] lg:hidden"
          
        >
          <div className="w-7 h-[5px] hover:mb-2 bg-white self-end m-1 border border-black"></div>
          <div className="w-4 h-[5px] bg-white self-end m-1 border border-black"></div>
          <div className="w-7 h-[5px] hover:mt-2 bg-white self-end m-1 border border-black"></div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
// {`${isOpen ? 'h-[100vh] top-0' : 'h-0 lg:h-auto opacity-0 lg:opacity-5 top-[-100%] lg:top-0'} list-none navbar flex flex-col lg:flex-row justify-between align-middle lg:w-[70%] lg:bg-transparent bg-primary w-[100%] sm:top-0 sm:left-0 sm:p-4`}