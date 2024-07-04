import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HomeAboutSection from '@/components/HomeAboutSection';
import Newsletter from '@/components/Newsletter';
import ShowreelPreview from '@/components/ShowreelPreview';
import SpecificationSection from '@/components/SpecificationSection';
import SummerCollection from '@/components/SummerCollection';
// import dynamic from 'next/dynamic';

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
