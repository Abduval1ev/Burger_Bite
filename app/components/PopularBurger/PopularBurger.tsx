'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCart from './BurgerCart';


// const imageFunc = (source: string): JSX.Element => {
//     return <Image src={source} alt='Image' />
// }

// const getImageData = [
//     {
//         id: 1,
//         image: imageFunc('/images/b1.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 2,
//         image: imageFunc('/images/b2.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 3,
//         image: imageFunc('/images/b3.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 4,
//         image: imageFunc('/images/b4.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 5,
//         image: imageFunc('/images/b5.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 6,
//         image: imageFunc('/images/b6.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 7,
//         image: imageFunc('/images/b7.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 8,
//         image: imageFunc('/images/b8.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
//     {
//         id: 9,
//         image: imageFunc('/images/b9.png'),
//         text: "salom 1",
//         price: "$12.00",
//         reviews: "saas",
//     },
// ]


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1
    },
    laptop: {
        breakpoint: { max: 1324, min: 992 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
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
                        autoPlaySpeed={3500}
                        centerMode={false}
                        infinite
                        responsive={responsive}
                        itemClass='item'
                        showDots={false}
                    >
                        <BurgerCart
                            id={1}
                            title="Burger"
                            image="/images/b1.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={2}
                            title="Burger"
                            image="/images/b2.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={3}
                            title="Burger"
                            image="/images/b3.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={4}
                            title="Burger"
                            image="/images/b4.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={5}
                            title="Burger"
                            image="/images/b5.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={6}
                            title="Burger"
                            image="/images/b6.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={7}
                            title="Burger"
                            image="/images/b7.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={8}
                            title="Burger"
                            image="/images/b8.png"
                            reviews="6"
                            price="10.99$" />
                        <BurgerCart
                            id={9}
                            title="Burger"
                            image="/images/b9.png"
                            reviews="6"
                            price="10.99$" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
