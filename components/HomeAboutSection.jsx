'use client';

import React, { useEffect } from 'react';
import Picture1 from '@/assets/images/new-wide.webp';
import Picture2 from '@/assets/images/ffr.webp';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { useRef } from 'react';
import '@/styles/components/HomeAboutSection.scss';
import Button from './Button';

import { useGSAP } from '@gsap/react';

const HomeAboutSection = () => {
  const images = [
    'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806012/new-wide_susvr7.webp',
    'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806013/ffr_yljrjo.webp',
  ];
  const imagesRef = useRef([]);
  const container = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1050px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 4,
          },
        });

        tl.fromTo(
          imagesRef.current[0],
          { y: '9.25vh' },
          { y: '-2.25vh' },
        ).fromTo(imagesRef.current[1], { y: '10.25vh' }, { y: '-15.25vh' }, 0);
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <div className="homeAbout" ref={container}>
      <div className="homeAbout__wrapper">
        <div className="homeAbout__wrapper__images">
          {images.map((image, i) => {
            return (
              <div
                key={`i_${i}`}
                ref={(el) => (imagesRef.current[i] = el)}
                className="homeAbout__wrapper__image"
              >
                <Image
                  src={image}
                  alt="image"
                  fill
                  priority
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8fv1oPQAINAMEp+xU5QAAAABJRU5ErkJggg=="
                />
              </div>
            );
          })}
        </div>
        <div className="homeAbout__wrapper__text">
          <h2 data-animation="h">
            EXPLORE OUR FURNITURE HAVEN, WHERE ELEGANCE AND INNOVATION COME TO
            LIFE THROUGH DESIGN.
          </h2>
          <div className="homeAbout__wrapper__text__paragraph">
            <p data-animation="h">
              Our furniture collection blends modern design with classic appeal,
              crafted to transform your living spaces and make them uniquely
              yours.
            </p>
          </div>

          <Button color="brown">About us</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
