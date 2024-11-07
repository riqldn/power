import React from 'react'
import Image from 'next/image'
export default function Card({svg, heading, text}) {
  return (
    <div className='bg-grey border-grey border-solid border flex rounded-[20px] shadow flex-col gap-8 md:gap-6 px-8 md:px-6 md:py-8 py-12 lg:py-12 lg:px-8'>
    <div className='object-contain max-w-[60px] md:max-w-[50px]'>
        <Image alt='Car featured in our fleet'  src={svg}/>
    </div>
    
    <h3 className='font-bold md:text-lg md:leading-[100%] text-2xl md:text-md lg:text-xl'>{heading}</h3>
    <p className='text-sm md:text-xs lg:text-sm lg:text-md md:max-w-[25ch] md:leading-tight font-semibold'>{text}</p>
    </div>
  )
}
