'use client';

import React, { useEffect, useState } from 'react';
import '@/styles/components/PageTransition.scss';
import Transition from '@/components/Transition';
import scroll from '@/animations/scroll';
import { preloadImages } from '@/utils/preload';

export default function Template({ children }) {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    scroll();
    const imageUrls = [
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719805828/875_sfafe7.jpg',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806012/new-wide_susvr7.webp',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806013/ffr_yljrjo.webp',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image1_od6wvu.png',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image2_uyh8xg.png',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image3_yxs7v3.png',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image4_mu33p6.png',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image5_pz1pca.png',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image6_qdm1mv.png',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806534/medium-shot-artisan_1_shnrwu.jpg',
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806580/empty-modern-room-with-furniture_2_sb7d2c.jpg',
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
