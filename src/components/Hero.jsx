import React from 'react'
import Chips from '/src/assets/chips.jpg'
export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-100 max-h-[500px] bg-black/60 flex flex-col justify-center '>
                <h1 className='px-4 text-2xl sm:text-5xl md:text-6xl lg-tetx-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-2xl sm:text-5xl md:text-6xl lg-tetx-7xl font-bold'><span className='text-orange-500'> Foods</span> Delivered</h1>
            </div>
            <img  className='w-full max-h-[500px] object-cover' src={Chips} alt="Pizza" />
       
        </div>
    </div>
  )
}
