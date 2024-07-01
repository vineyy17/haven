'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import '@/styles/components/Transition.scss';
import { useGSAP } from '@gsap/react';
import { split } from '@/animations/text';

const Transition = () => {
  const sceneRef = useRef(null);
  const app = useRef(null);

  useGSAP(() => {
    split();
    const tl = gsap.timeline();

    tl.set('.y__transition', {
      yPercent: 0,
    })
      .set('.y__transition_scene', {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      })
      .to('.y__transition', {
        yPercent: 0,
        duration: 1.2,
        ease: 'expo.inOut',
      })
      .to('.y__transition_scene', {
        duration: 1.2,
        delay: 0.5,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'expo.inOut',
      })
      .to('.y__transition_scene', {
        delay: 1.5,
        clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
        duration: 1,
        ease: 'expo.inOut',
      })
      .to('.y__transition', {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        display: 'none',
        ease: 'power1.inOut',
      });
  });

  return (
    <div className="y__transition" ref={app}>
      <div ref={sceneRef} id="scene" className="y__transition_scene">
        <p data-animation="h">HAVEN</p>
      </div>
    </div>
  );
};

export default Transition;
