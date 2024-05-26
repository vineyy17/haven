'use client';

import { split } from '@/animations/text';
import '@/styles/components/Hero.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';

const Hero = () => {
  const app = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const init = () => {
      tl.from(app.current, { ease: 'linear', autoAlpha: 0 }).to(app.current, {
        ease: 'linear',
        autoAlpha: 1,
      });
      split();
    };

    init();

    // window.addEventListener('load', function (e) {
    //   init();
    // });
  }, []);

  return (
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
      </div>
    </div>
  );
};

export default Hero;
