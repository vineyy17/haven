'use client';

import { split } from '@/animations/text';
import '@/styles/components/Hero.scss';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    split();
  });

  return (
    <div className="main">
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
      </div>
    </div>
  );
};

export default Hero;
