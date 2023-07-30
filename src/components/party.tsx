import React from "react";
import Image from "next/image";
import Link from "next/link";
import Twitter from "../../public/Images/twitter.png";
import Telegram from "../../public/Images/telegram.png";
import Discord from "../../public/Images/discord.png";

const Party: React.FC = () => {
  return (
    <div>
      <section className="w-[100%] text-center h-[40vh] pt-[10%] z-10 bg-primary">
        <div className="my-8">
          <button>
            <Link
              href=""
              className="py-2 px-6 rounded-md bg-temp text-white font-semibold uppercase md:text-[30px] text-[25px]"
            >
              Join the party
            </Link>
          </button>
        </div>
        <div className="block lg:hidden">
          <ul className="flex flex-row justify-around align-middle">
            <li className="w-[40px] mx-[20px]">
              <Image
                src={Twitter}
                alt="twitter.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </li>
            <li className="w-[40px] mx-[20px]">
              <Image
                src={Telegram}
                alt="telegram.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </li>
            <li className="w-[40px] mx-[20px]">
              <Image
                src={Discord}
                alt="discord.png"
                width={700}
                height={300}
                className="w-[100%] h-[100%]"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Party;
