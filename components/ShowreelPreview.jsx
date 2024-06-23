import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/components/ShowreelPreview.scss';
import Image from 'next/image';
import lbImage from '@/assets/images/arrangement-white.jpg';
import Button from './Button';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowreelPreview = () => {
  useGSAP(() => {
    gsap.utils.toArray('.sReelP__imageContainer').forEach((container) => {
      let image = container.querySelector('img');
      gsap.to(image, {
        y: () => image.offsetHeight - container.offsetHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        },
      });
    });

    gsap.to('.sReelP__textContainer', {
      scrollTrigger: {
        trigger: '.sReelP__textContainer',
        pin: true,
        start: 'top-=7% top',
        end: 'bottom -83.5%',
        scrub: true,
        markers: true,
      },
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
      <div className="sReelP__textContainer">
        <p className="sReelP__textContainer__text">
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
