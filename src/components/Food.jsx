import React, { useState } from 'react';
import { data } from '../data/data';
import Skeleton from 'react-loading-skeleton';
import FilterButton from './FilterButton'; // Import the FilterButton component

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
            <h1 className='text-primary  font-bold text-2xl sm:text-3xl md:text-4xl text-center'>
                Top Rated Menu Items
            </h1>
            {/* Filters  Row*/}
            <div className='flex flex-col lg:flex-row justify-between mt-8'>
                {/* Filter Type*/}
                <div>
                    <p className='font-bold mb-4 text-gray-700 '>Filter Type</p>
                    <div className='flex overflow-x-auto space-x-2 md:space-x-4 max-w-full md:max-w-[300px]'>
                        <FilterButton onClick={() => setFoods(data)} text="All" />
                        <FilterButton onClick={() => filterType('burger')} text="Burger" />
                        <FilterButton onClick={() => filterType('pizza')} text="Pizza" />
                        <FilterButton onClick={() => filterType('salad')} text="Salads" />
                        <FilterButton onClick={() => filterType('chicken')} text="Chicken" />
                    </div>
                </div>
                {/* Filters Price */}
                <div className="mt-6 lg:mt-0">
                    <p className='font-bold text-gray-700 mb-4'>Filter Price</p>
                    <div className='flex overflow-x-auto space-x-2 md:space-x-4 max-w-full md:max-w-[300px]'>
                        <FilterButton onClick={() => filterPrice('GH₵50')} text="GH₵50" />
                        <FilterButton onClick={() => filterPrice('GH₵80')} text="GH₵80" />
                        <FilterButton onClick={() => filterPrice('GH₵100')} text="GH₵100" />
                        <FilterButton onClick={() => filterPrice('GH₵120')} text="GH₵120" />
                    </div>
                </div>
            </div>
            {/* Display Images */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((foodItem) => (
                    // Food Card
                    <div className='border shadow-lg rounded-lg hover:scale-95 duration-300 ' key={foodItem.id}>
                        {foodItem.image ? (
                            <img
                                className='w-full h-[200px] object-cover rounded-t-lg'
                                src={foodItem.image}
                                alt={foodItem.name}
                            />
                        ) : (
                            <Skeleton width={200} height={200} />
                        )}
                        <div className='flex justify-around sm:justify-between px-2 py-6'>
                            <p className='  font-bold'>{foodItem.name}</p>
                            <p>
                                <span className='bg-primary text-white p-1 text-sm sm:text-lg  rounded-md'>{foodItem.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
