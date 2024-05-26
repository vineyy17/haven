'use client';

import Hero from '@/components/Hero';
import { useEffect } from 'react';
import { split } from '@/animations/text';
import scroll from '@/animations/scroll';

const HomePage = () => {
  useEffect(() => {
    scroll();
    split();
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
