'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import manImage from '@/assets/images/medium-shot-artisan.jpg';
import { gsap } from '@/lib/gsap';
import '@/styles/components/SpecificationSection.scss';
import { useGSAP } from '@gsap/react';
import AnimatedLink from './AnimatedLink';

const SpecificationSection = () => {
  const container = useRef();
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const image = imageRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: 'top 60%',
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      });

      tl.to(image, {
        ease: 'power4.easeInOut',
        duration: 3,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }).to(
        image,
        {
          duration: 3,
          scale: 1,
        },
        '<',
      );
    },
    { scope: container },
  );

  return (
    <div className="specPage">
      <div className="specPage__container" ref={container}>
        <h2 data-animation="h">Crafting Chairs: A Blend of Materials</h2>
        <p data-animation="p" className="specPage__container__paragraph">
          Chairs can be made from wood, metal, or other strong materials, like
          stone or acrylic. In some cases, multiple materials are used to
          construct a chair.
        </p>
        <div className="specPage__container__imageBox">
          <Image
            ref={imageRef}
            src={manImage}
            alt="carpenter image"
            className="specPage__container__imageBox__image"
          />
        </div>
        <p className="specPage__container__bottomText">
          <AnimatedLink type="heading">Explore our collection</AnimatedLink>
        </p>
      </div>
    </div>
  );
};

export default SpecificationSection;
