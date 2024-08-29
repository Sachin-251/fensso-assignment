import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-full flex flex-col mb-10'>
        <div className='flex justify-center'>
            <Image src='/assets/logos.png' alt='logos' width={1200} height={200} className='w-full' />
        </div>
    </div>
  )
}

export default Featured