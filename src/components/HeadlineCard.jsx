import React from 'react'
import food1 from '/src/assets/food1.jpg'
import food2 from '/src/assets/food2.jpg'
import Meat from '/src/assets/meat.jpg'
const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-10 grid md:grid-cols-3 gap-6'>
          {/* Card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
             <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BOGO's Out </p>
                <p className='px-2'>Through 8/25</p>
                <button className='border-white bg-white  text-black mx-2  absolute bottom-6'>Order Now</button>
             </div>
             <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={food1} alt="" />
          </div>
          {/* Card-2 */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
             <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> We Deliver Desserts Too </p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white  text-black mx-2  absolute bottom-6'>Order Now</button>
             </div>
             <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={food2} alt="" />
          </div>
          {/* Card-3 */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
             <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Meat Resturant</p>
                <p className='px-2'>Recently Added</p>
                <button className='border-white bg-white  text-black mx-2  absolute bottom-6'>Order Now</button>
             </div>
             <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Meat} alt="" />
          </div>
    </div>
  )
}

export default HeadlineCard