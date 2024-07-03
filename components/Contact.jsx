'use client';

import React, { useRef } from 'react';
import '@/styles/components/Contact.scss';
import Button from './Button';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from '@/lib/gsap';

const Contact = () => {
  const app = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();
    const init = () => {
      tl.from(app.current, { ease: 'linear', autoAlpha: 0 }).to(app.current, {
        ease: 'linear',
        autoAlpha: 1,
      });
    };

    init();
  }, []);

  return (
    <div className="contact" ref={app}>
      <div className="contact__box">
        <div className="contact__box__top">
          <p>Reach out to us</p>
        </div>
        <div className="contact__box__bottom">
          <p className="contact__box__bottom__first">
            We appreciate your interest in our furniture collection! Please note
            that this is a demo site, and purchases are not available here. Our
            goal is to demonstrate our capabilities in web development and
            design.
          </p>
          <p className="contact__box__bottom__second">
            For inquiries about similar projects or any of your web development
            needs, feel free to contact us. Let&apos;s create something
            beautiful together! Send us an email to get started on your next
            project.
          </p>
          <div className="contact__box__bottom__button">
            <Button color="brown">Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
