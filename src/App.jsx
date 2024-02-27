import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Skeleton from 'react-loading-skeleton';

// Lazy loading components
const LazyHeadlineCard = lazy(() => import('./components/HeadlineCard'));
const LazyFood = lazy(() => import('./components/Food'));
const LazyCategory = lazy(() => import('./components/Category'));

const App = () => {
  return (
    <div className='bg-white w-full h-screen'>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSkeleton />}>
        <LazyHeadlineCard />
        <LazyFood />
        <LazyCategory />
      </Suspense>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="text-center mx-auto">
     Loading...  <Skeleton height={400} width={400} count={2}   />
    </div>
  );
};

export default App;
