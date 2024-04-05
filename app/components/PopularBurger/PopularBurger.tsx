'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCart from './BurgerCart';


const imageFunc = (source: string): JSX.Element => {
    return <Image src={source} alt='Image' />
}


const getImageData = [
    {
        id: 1,
        image: imageFunc('/images/b1.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 2,
        image: imageFunc('/images/b2.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 3,
        image: imageFunc('/images/b3.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 4,
        image: imageFunc('/images/b4.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 5,
        image: imageFunc('/images/b5.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 6,
        image: imageFunc('/images/b6.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 7,
        image: imageFunc('/images/b7.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 8,
        image: imageFunc('/images/b8.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
    {
        id: 9,
        image: imageFunc('/images/b9.png'),
        text: "salom 1",
        price: "$12.00",
        reviews: "saas",
    },
]


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
                            <BurgerCart func={imageFunc} getImageData={getImageData} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
