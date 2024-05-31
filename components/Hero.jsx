'use client';

import { split } from '@/animations/text';
import '@/styles/components/Hero.scss';
import '@/styles/pages/Homepage.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import imageSrc from '@/assets/images/875.jpg';
import NavMenu from './NavMenu';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const app = useRef(null);
  const title = useRef(null);
  const footerText = useRef(null);
  const footer = useRef(null);
  const image = useRef(null);
  const container = useRef(null);

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const tl = gsap.timeline();
    const init = () => {
      tl.from(app.current, { ease: 'linear', autoAlpha: 0 }).to(app.current, {
        ease: 'linear',
        autoAlpha: 1,
      });
    };

    init();
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top 100%',
            end: 'bottom top',
            scrub: 1,
            ease: 'power1.out',
          },
        });

        tl.fromTo(title.current, { y: 0 }, { y: -300, duration: 2 }).fromTo(
          footer.current,
          { y: -180 },
          { y: -430, duration: 2 },
          '<+=41%',
        );
        // .fromTo(
        //   footerText.current,
        //   { y: -280 },
        //   { y: -380, duration: 2 },
        //   '<',
        // );
      });

      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="homePage">
      <NavMenu />
      <div className="main" ref={app}>
        <p className="main__heading" data-animation="bounce">
          HAVEN
        </p>
        <div className="main__about">
          <p className="main__about__text">
            <span data-animation="opacIn">
              Immerse yourself in a world of refined aesthetics.
            </span>{' '}
            <br />
            <span data-animation="opacIn">
              Our curated selection of timeless pieces is{' '}
            </span>{' '}
            <br />
            <span data-animation="opacIn">
              crafted to add a touch of sophistication.{' '}
            </span>
          </p>
          <div className="main__about__button">
            <Button>Explore Collection</Button>
          </div>

          <div ref={container}>
            <div className="main__about__box">
              <h1 ref={title}>
                <span data-animation="opacIn">TIMELESS DESIGN </span> <br />
                <span data-animation="opacIn"> ELEMENTS: LASTING </span> <br />
                <span data-animation="opacIn"> COLLECTIONS FOR </span> <br />
                <span data-animation="opacIn"> YOUR SPACE </span>
              </h1>
            </div>

            <div ref={footer}>
              <div ref={image} className="main__about__model">
                {isDesktop ? (
                  <Scene />
                ) : (
                  // <div className="main__about__model__imageBox">
                  <Image
                    height={300}
                    width={230}
                    src={imageSrc}
                    alt="Model"
                    placeholder="blur"
                    className="main__about__model__image"
                  />
                  // </div>
                )}
              </div>
              <h1
                ref={footerText}
                className="main__about__footerText"
                data-animation="opacIn"
              >
                LUXURY AT YOUR DOORSTEP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
