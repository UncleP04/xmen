import React from 'react'
import Image from 'next/image'
import Twitter from '../../public/Images/twitter.png'
import Telegram from '../../public/Images/telegram.png'
import Discord from '../../public/Images/discord.png'
import Link from 'next/link'

const Sidebar: React.FC = () => {

    return (
        <div>
            <section className='fixed z-10 h-[100%] px-3 sidebar top-0 hidden lg:block' data-aos="zoom-in" data-aos-duration="1000">
                <ul className='flex flex-col left-4 ml-5 pt-[100px]'>
                    <Link href='' className='w-[40px] my-[50px]'>
                        <Image 
                            src={Twitter}
                            alt='twitter.png'
                            width={700}
                            height={300}
                            className='w-[100%] h-[100%]'
                        />
                    </Link>
                    <Link href='' className='w-[40px] my-[50px]'>
                        <Image 
                            src={Telegram}
                            alt='telegram.png'
                            width={700}
                            height={300}
                            className='w-[100%] h-[100%]'
                        />
                    </Link>
                    <Link href='' className='w-[40px] my-[50px]'>
                        <Image 
                            src={Discord}
                            alt='discord.png'
                            width={700}
                            height={300}
                            className='w-[100%] h-[100%]'
                        />
                    </Link>
                </ul>
            </section>
        </div>
    )
}

export default Sidebar;