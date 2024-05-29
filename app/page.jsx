'use client';

import Hero from '@/components/Hero';
import { useEffect } from 'react';
import { split } from '@/animations/text';
import scroll from '@/animations/scroll';
import SummerCollection from '@/components/SummerCollection';

const HomePage = () => {
  useEffect(() => {
    scroll();
    split();
  }, []);

  return (
    <div>
      <Hero />
      <SummerCollection />
    </div>
  );
};

export default HomePage;
