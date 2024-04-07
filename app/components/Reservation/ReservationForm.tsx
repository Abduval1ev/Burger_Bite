import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

export default function ReservationForm() {
    return (
        <div className='bg-green-700 p-6 rounded-lg'>
            <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[1rem]  mx-auto' />
            <h1 className='text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white'>Reservation</h1>
            <p className='uppercase text-[20px] md:text-[25px] text-white font-semibold text-center'>Book your table</p>
            <div className="flex flex-col items-center gap-[10px] mt-[1rem]">
                <div className="flex flex-col sm:flex-row  sm:space-y-0 items-center w-[80%] justify-between gap-[8px] md:gap-[14px]">
                    <select
                        className='w-[80%] px-10 py-3 bg-transparent rounded-lg outline-none font-bold text-[18px] text-white border-[2.2px] border-gray-100'
                        name="people"
                        id="people"
                    >
                        <option
                            value="1"
                            className='text-black'>
                            1 People
                        </option>
                        <option
                            value="2"
                            className='text-black'>
                            2 People
                        </option>
                        <option
                            value="3"
                            className='text-black'>
                            3 People
                        </option>
                        <option
                            value="4"
                            className='text-black'>
                            4 People
                        </option>
                    </select>
                    <input type="date" className='w-[80%] px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[18px] text-white border-[2.2px] border-gray-100'
                    />
                </div>
                <input type="time" className='w-[80%] px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[18px] text-white border-[2.2px] border-gray-100' />
                <div className="w-[80%]  text-center">
                    <button className='w-full py-3 rounded-lg text-[16px] text-white bg-blue-950 hover:bg-red-800 transition-all duration-200'>Book Now</button>
                </div>
            </div>
        </div>
    )
}
