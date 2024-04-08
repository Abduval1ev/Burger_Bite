import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div className='py-[3rem] bg-gray-900'>
            <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] items-start">
                <div>
                    <div className="flex items-center text-white space-x-2">
                        <FaBurger className='w-[1.2rem] h-[1.2rem] sm:w-[1.2rem] sm:h-[1.4rem] text-orange-500' />
                        <h1 className='text-[20px] sm:text-[30px] font-semibold'>BurgerBite</h1>
                    </div>
                    <p className='text-white text-opacity-60 mt-[0.4rem] ff'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, excepturi!
                    </p>
                    <p className='mt-[1rem] text-white'>support@example.com</p>
                    <p className='text-red-300 text-[18px] font-bold'>+998 (90) 064-28-09</p>
                </div>
                <div>
                    <h1 className='text-[22px] font-semibold mb-[2rem] text-white'>Products</h1>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Beeef Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Crispy Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Classic Burger</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Delight Burger</p>
                </div>
                <div>
                    <h1 className='text-[22px] font-semibold mb-[2rem] text-white'>Products</h1>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Quick Link</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Home</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>About</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Products</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>NewsLetter</p>
                </div>
                <div>
                    <h1 className='text-[22px] font-semibold mb-[2rem] text-white'>Opening Hours</h1>
                    <p className='text-white text-[18px]'>Monday - Friday : <span className='text-yellow-300'>8am - 4pm</span></p>
                    <p className='text-white text-[18px]'>Saturday : <span className='text-yellow-300'>8am - 12am</span></p>
                    <div className="flex mt-[2rem] items-center space-x-6">
                        <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400' />
                        <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400' />
                        <FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-300' />
                    </div>
                </div>
            </div>
            <p className='text-center text-white opacity-50 mt-[1.5rem]'>
                Copyright @ 2024 <span className='text-yellow-300'>Webdev Warriors.</span> All rights reserved
            </p>
        </div>
    )
}
