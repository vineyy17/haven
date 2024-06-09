'use client';

// import Hero from '@/components/Hero';
import { useEffect } from 'react';
// import { split } from '@/animations/text';
import scroll from '@/animations/scroll';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
});

const HomeAboutSection = dynamic(
  () => import('@/components/HomeAboutSection'),
  {
    ssr: false,
  },
);

const SpecificationSection = dynamic(
  () => import('@/components/SpecificationSection'),
  {
    ssr: false,
  },
);

const HomePage = () => {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <div>
      <Hero />
      <HomeAboutSection />
      <SpecificationSection />
    </div>
  );
};

export default HomePage;
