'use client';

import { split } from '@/animations/text';
import '@/styles/components/Hero.scss';
import '@/styles/pages/Homepage.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import Header from './Header';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const app = useRef(null);
  const title = useRef(null);
  const container = useRef(null);

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
            trigger: title.current,
            start: 'top 100%',
            end: 'bottom top',
            scrub: 1,
            ease: 'power1.out',
          },
        });

        tl.fromTo(title.current, { y: 0 }, { y: -200, duration: 2 }); // Increase duration
      });

      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="homePage" ref={container}>
      <Header />
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
          <Button>Explore Collection</Button>
          <div className="main__about__box">
            <h1 ref={title}>
              <span data-animation="h">TIMELESS DESIGN </span> <br />
              <span data-animation="h"> INSPIRATION: LASTING </span> <br />
              <span data-animation="h"> COLLECTIONS FOR </span> <br />
              <span data-animation="h"> YOUR SPACE </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
