import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy loading components
const HeadlineCard = lazy(() => import('./components/HeadlineCard'));
const Food = lazy(() => import('./components/Food'));
const Category = lazy(() => import('./components/Category'));

const App = () => {
  return (
    <>
      <div className='bg-white w-full h-screen'>
        <Navbar />
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <HeadlineCard />
          <Food />
          <Category />
        </Suspense>
      </div>
    </>
  );
};

export default App;
