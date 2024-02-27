import React, { useState } from 'react'
import {data} from '../data/data'

const Food = () => {
    const [foods,setFoods]=useState(data);

    //Filter Type
    const filterType =(category)=>{
        setFoods(
            data.filter((foodCategory)=>{
                return foodCategory.category===category;
            })
        )
    }

    //Filter price
    const filterPrice=(price)=>{
        setFoods(
            data.filter((foodPrice)=>{
                return foodPrice.price==price
            })
        )
    }
  return (
    <div className='max-w-[1640px] mx-auto px-4 p-10'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filters  Row*/}
        <div className='flex flex-col lg:flex-row justify-between '>
            {/* Filter Type*/}
            <div>
                <p className='font-bold text-gray-700 '>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={()=>filterType('burger')} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                <button onClick={()=>filterType('pizza')} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button  onClick={()=>filterType('salad')}  className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                <button  onClick={()=>filterType('chicken')}    className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
                {/* Filters Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button  onClick={()=>filterPrice('$')} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button  onClick={()=>filterPrice('$$')} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button  onClick={()=>filterPrice('$$$')} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button  onClick={()=>filterPrice('$$$$')} className=' mr-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>

        </div>
            {/* Display Images */}
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {foods.map((foodItem)=>(
                // Food Card
                <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={foodItem.id}>
                    <img
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    src={foodItem.image} alt={foodItem.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{foodItem.name}</p>
                        <p>
                            <span className='bg-orange-600 text-white p-1 rounded-xl'>{foodItem.price}</span>
                        </p>
                    </div>
                </div>
            ))}
         </div>
    </div>
  )
}

export default Food