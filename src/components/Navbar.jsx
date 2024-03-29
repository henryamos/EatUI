import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { data } from '../data/data';
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-2 flex-wrap gap-6'>
      {/* left Side */}
      <div className='flex items-center'>
        {/* Menu Container*/}
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        {/* Menu Br ends here */}
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best<span className='font-bold'>Eat</span>
        </h1>
        {/* Side text */}
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
        {/* Side text end here */}
      </div>
      {/* Left Container End here */}

      {/* Search Input */}
     
      {/* Search Input Ends here */}
      {/*  Cart Button*/}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />
        cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-120%] w-[250px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-3 cursor-pointer' />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-2 text-gray-700'>
            <li className='text-xl p-2 flex'>
              <TbTruckDelivery size={25} className='mr-4' />
              Order
            </li>

            <li className='text-xl p-2 flex'>
              <MdFavorite size={25} className='mr-4' />
              Favourite
            </li>

            <li className='text-xl p-2 flex'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='text-xl p-2 flex'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
            <li className='text-xl p-2 flex'>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </li>
            <li className='text-xl p-2 flex'>
              <BsFillSaveFill size={25} className='mr-4' />
              Best One
            </li>
            <li className='text-xl p-2 flex'>
              <FaUserFriends size={25} className='mr-4' />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
      {/* Side drawer menu end */}
    </div>
  );
};
