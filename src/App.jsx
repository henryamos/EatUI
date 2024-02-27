import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import HeadlineCard from './components/HeadlineCard'
import Food from './components/Food'
import Category from './components/Category'
const App = () => {
  return (
    <>
   
    <div className='bg-gray-100 w-full  h-screen'>
     <Navbar/>
     <Hero/>
     <HeadlineCard/>
     <Food/>
     <Category/>
    </div>
    </>
  )
}

export default App
