'use client';

import React from 'react';
import { gsap } from '@/lib/gsap';
import '@/styles/components/ShowreelPreview.scss';
import Image from 'next/image';
import Button from './Button';
import { useGSAP } from '@gsap/react';

const ShowreelPreview = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 500px)', () => {
      gsap.utils.toArray('.sReelP__imageContainer').forEach((container) => {
        let image = container.querySelector('img');
        gsap.to(image, {
          y: () => image.offsetHeight - container.offsetHeight,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.to('.sReelP__textContainer', {
        scrollTrigger: {
          trigger: '.sReelP__textContainer',
          pin: true,
          start: 'top-=2% top',
          end: 'bottom top',
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="sReelP">
      <div className="sReelP__imageContainer">
        <Image
          src="https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806207/arrangement-white_jrdnxr.jpg"
          alt="Sample"
          className="sReelP__imageContainer__image"
          //   width={1000}
          //   height={5000}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="sReelP__textContainer">
        <p data-animation="h" className="sReelP__textContainer__text">
          At Haven, we understand that your home is your refuge. Our mission is
          to design furniture that not only serves a purpose but also enhances
          the tranquility and beauty of your space, creating a true haven of
          comfort and elegance.
        </p>
        <div className="sReelP__textContainer__button">
          <Button color="brown">See showreel</Button>
        </div>
      </div>
    </div>
  );
};

export default ShowreelPreview;
