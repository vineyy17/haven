'use client';

import React, { useEffect, useState } from 'react';
import '@/styles/components/PageTransition.scss';
// import Transition from '@/components/Transition';
import scroll from '@/animations/scroll';
import { preloadImages } from '@/utils/preload';

import dynamic from 'next/dynamic';

const Transition = dynamic(() => import('@/components/Transition'), {
  ssr: false,
});

export default function Template({ children }) {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    scroll();
    const imageUrls = [
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719805828/875_sfafe7.jpg',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806580/empty-modern-room-with-furniture_2_sb7d2c.jpg',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1720081432/empty-modern-room-with-furniture_3_1_cfj5rk.jpg',
    ];

    console.log('Preloading started');

    preloadImages(imageUrls)
      .then(() => {
        console.log('Preloading finished');
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
      });
    const timer = setTimeout(() => {
      setShowChildren(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Transition />
      {showChildren && children}
    </div>
  );
}
