import React from 'react';
import Picture1 from '@/assets/images/agata-create.jpg';
import Picture2 from '@/assets/images/jonny-caspari.jpg';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import '@/styles/components/HomeAboutSection.scss';
import Button from './Button';

const HomeAboutSection = () => {
  const images = [Picture1, Picture2];
  const imagesRef = useRef([]);
  const container = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
        .to(imagesRef.current[0], { y: -100 }, 0)
        .to(imagesRef.current[1], { y: -240 }, 0);
    });
    return () => context.revert();
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
              Our furniture collection combines modern design with classic
              appeal, thoughtfully crafted to transform your living spaces,
              making them feel uniquely yours.
            </p>
          </div>

          <Button color="brown">About us</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
