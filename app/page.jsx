import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HomeAboutSection from '@/components/HomeAboutSection';
import Newsletter from '@/components/Newsletter';
import ShowreelPreview from '@/components/ShowreelPreview';
import SpecificationSection from '@/components/SpecificationSection';
import SummerCollection from '@/components/SummerCollection';
import Head from 'next/head';
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
      <Head>
        <link rel="icon" href="/public/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/public/apple-touch-icon.png>" />
        <meta property="og:title" content="Haven" />
        <meta
          property="og:description"
          content="A variety of elegant chairs that blend style and comfort. Explore our modern and chic chair collection."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg"
        />
        <meta property="og:url" content="https://haven-furniture.vercel.app/" />
        \
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Haven" />
        <meta
          name="twitter:description"
          content="A variety of elegant chairs that blend style and comfort. Explore our modern and chic chair collection."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719892368/scandinavian-living-room-interior-design-zoom-background_1_rui1xk.jpg"
        />
        <meta name="twitter:site" content="@The_vine__" />
      </Head>
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
