'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCart from './BurgerCart';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 768 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}

export default function PopularBurger() {
    return (
        <div className='py-[3rem]'>
            <div className="heading">
                <h1>
                    Our Popular <span className='text-red-700'>Burgers</span>
                </h1>
                <div className="w-[80%] mt-[4rem] mx-auto">
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        centerMode={false}
                        infinite
                        responsive={responsive}
                        itemClass='item'
                        showDots={false}
                    >
                        <div>
                            <BurgerCart
                                title="Salom"
                                image="/images/b1.png"
                                price="10.88$"
                                reviews="6"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
