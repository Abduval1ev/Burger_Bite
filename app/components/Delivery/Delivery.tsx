'use client'

import Image from 'next/image'
import React from 'react'
import deliveryImg from '@/public/images/delivery.svg'


export default function Delivery() {
    return (
        <div className='pt-[8rem] pb-[3rem]'>
            <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
                <div className="">
                    <Image src={deliveryImg} alt='image' />
                </div>
            </div>
        </div>
    )
}
