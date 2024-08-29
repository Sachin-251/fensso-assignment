import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='md:px-8 flex flex-col md:flex-row justify-center items-center gap-16 my-20'>
        <div className='md:w-1/2 w-full flex justify-center md:order-1 order-2'>
        <div className='flex flex-col justify-center gap-10'>
            <h2 className='md:text-7xl text-5xl font-medium'>{'Navigating the digital landscape for success'}</h2>
            <p className='md:text-3xl text-xl'>{'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.'}</p>
            <button className='bg-black text-white rounded-md p-3 md:w-fit'>Book a consultation</button>
        </div>
        </div>

        <div className='md:w-1/2 w-full flex justify-center items-center md:order-2 order-1'>
            <Image src='/assets/hero.png' alt='hero' width={800} height={800} />
        </div>
    </div>
  )
}

export default HeroSection