import React from 'react'
import { BiPhone } from 'react-icons/bi'
import ReservationForm from './ReservationForm'

export default function Reservation() {
    return (
        <div className='py-[5rem]  bg-cover relative my-[2rem] bg-[url("/images/bg-black.jpg")]'>
            <div className="absolute w-full h-full top-0 right-0 bottom-0"></div>
            <div className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
                <div>
                    <h1 className='text-[30px] md:text-[40px] lg:text-[50px] uppercase text-white font-bold leading-[3rem] md:leading-[4rem] '>
                        Do you have any dinner plan Today? reserve your tablet
                    </h1>
                    <p className='text-[18px] mt-[1rem] text-white text-opacity-50'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vel perspiciatis impedit quam in? Saepe ad ex officiis aperiam ipsum? Adipisci impedit nemo dolores.
                    </p>
                    <div className="flex mt-[2rem] items-center space-x-4">
                        <div className="flex items-center justify-center flex-col w-[3rem] h-[3rem] bg-red-500 rounded-full">
                            <BiPhone className='w-[1.7rem] h-[1.7rem] text-white ' />
                        </div>
                        <div>
                            <h1 className="text-[25px] text-white font-semibold">Quick order 24/7</h1>
                            <h1 className='text-yellow-300 text-[30px] font-bold'>+998 (90) 064-28-09</h1>
                        </div>
                    </div>
                </div>
                <ReservationForm />
            </div>
        </div>
    )
}
