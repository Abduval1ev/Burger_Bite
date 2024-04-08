import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/f1.jpg';
import img2 from '@/public/images/f2.jpg';
import img3 from '@/public/images/f3.jpg';

export default function Features() {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className="heading">
                Burgers made with
                <br />
                love and
                <span className='text-red-700'>Care</span>
            </h1>
            <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                >
                    <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                        <Image src={img1} alt='image' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] text-center text-[24ox] text-black font-semibold '>
                            Our Burger
                        </h1>
                        <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus perspiciatis a illum beatae accusamus in!
                        </p>
                    </div>
                </div>
                {/* ! Cart */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-anchor-placement="top-center"
                >
                    <div className="p-6 hover:bg-white rounded-lg lg:translate-y-[3rem] transition-all duration-200">
                        <Image src={img2} alt='image' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] text-center text-[24ox] text-black font-semibold '>
                            Your Oponiun is Important
                        </h1>
                        <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus perspiciatis a illum beatae accusamus in!
                        </p>
                    </div>
                </div>
                {/* ! Cart */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-anchor-placement="top-center"
                >
                    <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                        <Image src={img3} alt='image' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] text-center text-[24ox] text-black font-semibold '>
                            Checken Burgers
                        </h1>
                        <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus perspiciatis a illum beatae accusamus in!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
