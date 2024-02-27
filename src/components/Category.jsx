import React from 'react'
import{categories} from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-[#E60000] font-bold text-3xl md:text-4xl mb-6 text-center'>Top Rated Menu Items</h1>
        {/* Category */}
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                categories.map((foods)=>(
                    <div className='bg-gray-100 rounded-lg p-4    flex justify-around md:flex  items-center' key={foods.id}>
                        <h2 className='font-bold sm:text-xl'>{foods.name}</h2>
                        <img className='w-20' src={foods.image} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category