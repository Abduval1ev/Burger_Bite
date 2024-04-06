import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
    </div>
  )
}
