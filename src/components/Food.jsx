import React, { useState, Suspense, lazy } from 'react';
import { data } from '../data/data';
import Skeleton from 'react-loading-skeleton';

const Food = () => {
    const [foods, setFoods] = useState(data);

    // Filter Type
    const filterType = (category) => {
        setFoods(
            data.filter((foodCategory) => {
                return foodCategory.category === category;
            })
        );
    };

    // Filter price
    const filterPrice = (price) => {
        setFoods(
            data.filter((foodPrice) => {
                return foodPrice.price === price;
            })
        );
    };

    return (
        <div className='max-w-[1640px] mx-auto px-4 p-10'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>
            {/* Filters  Row*/}
            <div className='flex flex-col lg:flex-row justify-between mt-8'>
                {/* Filter Type*/}
                <div>
                    <p className='font-bold mt-6 text-gray-700 '>Filter Type</p>
                    <div className='flex overflow-x-auto space-x-2 md:space-x-4 max-w-full md:max-w-[300px]'>
                        <button
                            onClick={() => setFoods(data)}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            All
                        </button>
                        <button
                            onClick={() => filterType('burger')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            Burger
                        </button>
                        <button
                            onClick={() => filterType('pizza')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType('salad')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            Salads
                        </button>
                        <button
                            onClick={() => filterType('chicken')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            Chicken
                        </button>
                    </div>
                </div>
                {/* Filters Price */}
                <div className="mt-6 lg:mt-0">
                    <p className='font-bold text-gray-700 mb-4'>Filter Price</p>
                    <div className='flex overflow-x-auto space-x-2 md:space-x-4 max-w-full md:max-w-[300px]'>
                        <button
                            onClick={() => filterPrice('GH₵50')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            GH₵50
                        </button>
                        <button
                            onClick={() => filterPrice('GH₵80')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            GH₵80
                        </button>
                        <button
                            onClick={() => filterPrice('GH₵100')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            GH₵100
                        </button>
                        <button
                            onClick={() => filterPrice('GH₵120')}
                            className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded'>
                            GH₵120
                        </button>
                    </div>
                </div>
            </div>
            {/* Display Images */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((foodItem) => (
                    // Food Card
                    <div className='border shadow-lg rounded-lg hover:scale-95 duration-300 ' key={foodItem.id}>
                            <img
                                className='w-full h-[200px] object-cover rounded-t-lg'
                                src={foodItem.image || <Skeleton width={200} height={200} count={5}/>}
                                alt={foodItem.name}
                            />
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
    );
};

export default Food;
