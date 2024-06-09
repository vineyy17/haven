'use client';

import React from 'react';
import Picture1 from '@/assets/images/agata-create.jpg';
import Picture2 from '@/assets/images/bruno.jpg';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { useRef } from 'react';
import '@/styles/components/HomeAboutSection.scss';
import Button from './Button';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { split } from '@/animations/text';

const HomeAboutSection = () => {
  const images = [Picture1, Picture2];
  const imagesRef = useRef([]);
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    split();
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1000px)', () => {
      const context = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 4,
          },
        });

        tl.fromTo(imagesRef.current[0], { y: 50 }, { y: -10 }).fromTo(
          imagesRef.current[1],
          { y: 200 },
          { y: -50 },
          0,
        );
      }, container);

      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

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
                <Image src={image} placeholder="blur" alt="image" fill />
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
            <p data-animation="p">
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
