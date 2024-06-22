import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/components/ShowreelPreview.scss';
import Image from 'next/image';
import lbImage from '@/assets/images/arrangement-white.jpg';

gsap.registerPlugin(ScrollTrigger);

const ShowreelPreview = () => {
  useEffect(() => {
    gsap.utils.toArray('.sReelP__imageContainer').forEach((container) => {
      let image = container.querySelector('img');
      gsap.to(image, {
        y: () => image.offsetHeight - container.offsetHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
          markers: true,
          invalidateOnRefresh: true,
        },
      });
    });
  }, []);

  return (
    <div className="sReelP">
      <div className="sReelP__imageContainer">
        <Image
          src={lbImage}
          alt="Sample"
          className="sReelP__imageContainer__image"
          //   width={1000}
          //   height={5000}
        />
      </div>
    </div>
  );
};

export default ShowreelPreview;
