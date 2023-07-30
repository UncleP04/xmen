import React from "react";
import Image from "next/image";
import Link from "next/link";
import Circle from "../../public/Images/circle.png";
import Line from "../../public/Images/line.png";
import Twitter from "../../public/Images/twitter.png";
import Telegram from "../../public/Images/telegram.png";
import Discord from "../../public/Images/discord.png";

const Tokens: React.FC = () => {
  return (
    <div>
      <section className="relative w-[100%] bg-primary h-auto gap-20 py-[10%]">
        <div className="px-[3%]" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="lg:text-[3em] text-[2.5em] font-bold uppercase">
            Tokenomics:
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-[100%] justify-between align-middle mt-[5%]">
          <div className="ml-[5%] lg:w-[500px] lg:h-[500px] w-[80%] md:w-[400px] md:h-[400px] h-[250px] self-center items-center" data-aos="zoom-in" data-aos-duration="1000">
            <Image
              src={Circle}
              alt="circle.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="mt-[4%]">
            <span className="flex flex-col justify-start align-middle" data-aos="zoom-in" data-aos-duration="1000">
              <h2 className="lg:text-[35px] text-[30px] pl-[30%] pr-[20px] text-end uppercase text-white">
                50% Presale
              </h2>
              <Image
                src={Line}
                alt="line.png"
                width={700}
                height={300}
                className="w-[100%]"
              />
            </span>
            <div className="pl-[10%]">
              <span className="flex flex-col justify-start align-middle" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className="lg:text-[25px] text-[20px] pl-[30%] pr-[20px] uppercase text-end lg:text-none text-white">
                  20% Marketing and promotion
                </h3>
                <Image
                  src={Line}
                  alt="line.png"
                  width={700}
                  height={300}
                  className=""
                />
              </span>
              <div className="pl-8%]">
                <span className="flex flex-col justify-start align-middle" data-aos="zoom-in" data-aos-duration="1000">
                  <h3 className="lg:text-[23px] text-[20px] pl-[30%] pr-[20px] uppercase text-end lg:text-none text-white">
                    10% liquidity pool
                  </h3>
                  <Image
                    src={Line}
                    alt="line.png"
                    width={700}
                    height={300}
                    className=""
                  />
                </span>
                <span className="flex flex-col justify-start align-middle" data-aos="zoom-in" data-aos-duration="1000">
                  <h3 className="lg:text-[23px] text-[20px] pl-[30%] pr-[20px] uppercase text-end lg:text-none text-white">
                    10% partying with the community
                  </h3>
                  <Image
                    src={Line}
                    alt="line.png"
                    width={700}
                    height={300}
                    className=""
                  />
                </span>
                <span className="flex flex-col justify-start align-middle" data-aos="zoom-in" data-aos-duration="1000">
                  <h3 className="lg:text-[23px] text-[20px] pl-[30%] pr-[20px] uppercase text-end lg:text-none text-white">
                    10% the team
                  </h3>
                  <Image
                    src={Line}
                    alt="line.png"
                    width={700}
                    height={300}
                    className=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] text-center h-[40vh] pt-[15%]">
          <div className="my-8" data-aos="zoom-in" data-aos-duration="1000">
            <button>
              <Link href="" className="py-2 px-6 rounded-md bg-temp text-white font-semibold uppercase md:text-[30px] text-[25px]">
                Join the party
              </Link>
            </button>
          </div>
          <div className="block lg:hidden">
            <ul className="flex flex-row justify-around align-middle">
              <Link className="w-[40px] mx-[20px] cursor-pointer" href="" data-aos="zoom-in" data-aos-duration="1000">
                <Image
                  src={Twitter}
                  alt="twitter.png"
                  width={700}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
              </Link>
              <Link className="w-[40px] mx-[20px] cursor-pointer" href="" data-aos="zoom-in" data-aos-duration="1000">
                <Image
                  src={Telegram}
                  alt="telegram.png"
                  width={700}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
              </Link>
              <Link className="w-[40px] mx-[20px] cursor-pointer" href="" data-aos="zoom-in" data-aos-duration="1000">
                <Image
                  src={Discord}
                  alt="discord.png"
                  width={700}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokens;
