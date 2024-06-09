'use client';

import React, { useRef } from 'react';
import manImage from '@/assets/images/medium-shot-artisan.jpg';
import Image from 'next/image';
import '@/styles/components/SpecificationSection.scss';
import { gsap } from '@/lib/gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { split } from '@/animations/text';

const SpecificationSection = () => {
  const container = useRef(null);
  const image = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(
    '.specPage__container__imageBox::after',
  );

  useIsomorphicLayoutEffect(() => {
    split();

    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      });

      tl.to(imageReveal, {
        duration: 3,
        width: '0%',
        ease: 'power4.easeInOut',
      }).from(image.current, {
        duration: 3,
        scale: 1.6,
        ease: 'power4.easeInOut',
        delay: -3,
      });
    }, container);

    return () => context.revert();
  }, []);

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
          <Image ref={image} src={manImage} alt="carpenter image" />
        </div>
        <p data-animation="bounce" className="specPage__container__bottomText">
          Explore our collection &#8599;
        </p>
      </div>
    </div>
  );
};

export default SpecificationSection;
