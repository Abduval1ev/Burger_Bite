'use client'

import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import { BiShoppingBag } from 'react-icons/bi';


interface Props {
    id: number,
    title: string;
    image: string;
    price: string;
    reviews: string;
}

export default function BurgerCart({ title, price, image, reviews }: Props) {
    return (
        <div className='w-[340px] md:w-[270px] bg-white p-4 rounded-lg'>
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className='w-[220px] h-[200px] object-cover mx-auto'
            />
            <h6 className='flex items-end mt-[1.3rem] text-[22px] text-black font-semibold'>
                {title}
            </h6>
            <div className="flex items-center mt-[0.5rem] space-x-3">
                <div className="flex items-center">
                    <FaStar className='w-[1rem] h-[1rem] text-yellow-500' />
                    <FaStar className='w-[1rem] h-[1rem] text-yellow-500' />
                    <FaStar className='w-[1rem] h-[1rem] text-yellow-500' />
                    <FaStar className='w-[1rem] h-[1rem] text-yellow-500' />
                    <FaStar className='w-[1rem] h-[1rem] text-gray-400' />
                </div>
                <div className="text-black opacity-40 text-[18px] leading-none">({reviews})</div>
            </div>
            <p className='mt-[0.5rem] text-black text-opacity-70 text-[18px] leading-none'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="flex mt-[1.4rem] items-center justify-between">
                <div className="text-[25px] font-bold text-red-600">{price}</div>
                <button className='px-4 py-2 hover:bg-green-600 transition-all duration-200 bg-red-600 flex items-center rounded-md text-white'>
                    <BiShoppingBag className='w-[1.3rem] h-[1.3rem]' />
                </button>
            </div>
        </div>
    )
}
