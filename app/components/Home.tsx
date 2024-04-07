import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import NewsLetter from './NewsLetter/NewsLetter'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <NewsLetter />
    </div>
  )
}
