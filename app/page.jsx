'use client';
import scroll from '@/animations/scroll';
import Hero from '@/components/Hero';
import HomeAboutSection from '@/components/HomeAboutSection';
import Newsletter from '@/components/Newsletter';
import ShowreelPreview from '@/components/ShowreelPreview';
import SpecificationSection from '@/components/SpecificationSection';
import SummerCollection from '@/components/SummerCollection';
// import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// const Hero = dynamic(() => import('@/components/Hero'), {
//   ssr: false,
// });

// const HomeAboutSection = dynamic(
//   () => import('@/components/HomeAboutSection'),
//   {
//     ssr: false,
//   },
// );

// const SpecificationSection = dynamic(
//   () => import('@/components/SpecificationSection'),
//   {
//     ssr: false,
//   },
// );

const HomePage = () => {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <>
      <Hero />
      <HomeAboutSection />
      <SpecificationSection />
      <SummerCollection />
      <ShowreelPreview />
      <Newsletter />
    </>
  );
};

export default HomePage;
