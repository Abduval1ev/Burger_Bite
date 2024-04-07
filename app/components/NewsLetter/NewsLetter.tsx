import React from 'react'

export default function NewsLetter() {
  return (
    <div className='py-[5rem]'>
      <div className="text-center">
        <h1 className='text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase'>join for hot offers</h1>
        <p className='w-[85%] md:w-[60%] mx-auto text-black text-opacity-70'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis dolores illo doloremque nihil nesciunt. Aut provident perferendis molestias beatae nesciunt quos iure quam sunt vel ipsa excepturi maiores, natus totam consectetur ipsum quaerat repellendus odit facilis minima eaque esse.
        </p>
        <div className="flex items-center space-x-2 mt-[2rem] justify-center">
          <input
            type="email"
            placeholder='Email Address'
            className='px-5 py-4 bg-gray-400 w-[40%] font-medium outline-none rounded-lg placeholder:text-black'
          />
          <button className='px-8 py-4 bg-green-700 font-medium hover:bg-green-900 transition-all text-white rounded-lg duration-200'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
