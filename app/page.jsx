import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HomeAboutSection from '@/components/HomeAboutSection';
import Newsletter from '@/components/Newsletter';
import ShowreelPreview from '@/components/ShowreelPreview';
import SpecificationSection from '@/components/SpecificationSection';
import SummerCollection from '@/components/SummerCollection';

// import dynamic from 'next/dynamic';

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

// const SummerCollection = dynamic(
//   () => import('@/components/SummerCollection'),
//   {
//     ssr: false,
//   },
// );

// const ShowreelPreview = dynamic(() => import('@/components/ShowreelPreview'), {
//   ssr: false,
// });

// const Newsletter = dynamic(() => import('@/components/Newsletter'), {
//   ssr: false,
// });

// const Footer = dynamic(() => import('@/components/Footer'), {
//   ssr: false,
// });

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeAboutSection />
      <SpecificationSection />
      <SummerCollection />
      <ShowreelPreview />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
