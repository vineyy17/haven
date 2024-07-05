'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import '@/styles/components/NavMenu.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';
import AnimatedLink from './AnimatedLink';

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/contact', label: 'About' },
  { path: '/contact', label: 'Shop' },
  { path: '/contact', label: 'Contact' },
  { path: '/contact', label: 'Showreel' },
];

const NavMenu = ({ color }) => {
  const currentPath = usePathname();
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(
        '.menu-link-item-holder, .menu-preview-box-holder, .menu-info-col-holder, .menu-close-icon-box-holder',
        {
          y: 75,
          opacity: 0,
        },
      );

      tl.current = gsap
        .timeline({ paused: true })
        .to('.menu-overlay', {
          duration: 1.25,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to(
          '.menu-link-item-holder, .menu-preview-box-holder, .menu-info-col-holder, .menu-close-icon-box-holder',
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.inOut',
            delay: -0.75,
          },
        );
    },
    { scope: container },
  );

  const text = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-parent">
      <div className="menu-container" ref={container}>
        <div className={`menu-bar menu-bar--${color}`}>
          <div className={`menu-logo menu-logo--${color}`}>
            <Link href="/">HAVEN</Link>
          </div>
          <div
            className={`menu-open menu-open--${color}`}
            onClick={() => toggleMenu()}
          >
            <p>MENU</p>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className={`menu-logo menu-logo--${color}`}>
              <Link href="/">HAVEN</Link>
            </div>
            <div className="menu-close" onClick={() => toggleMenu()}>
              <p>CLOSE</p>
            </div>
          </div>
          <div className="menu-close-icon" onClick={() => toggleMenu()}>
            <div className="menu-close-icon-box">
              <div className="menu-close-icon-box-item">
                <div className="menu-close-icon-box-holder">
                  <p>&#x2715;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div key={index} className="menu-link-item">
                  <div className="menu-link-item-holder">
                    <Link href={link.path} className="menu-link">
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <div className="menu-info-col-item">
                  <div className="menu-info-col-holder">
                    <AnimatedLink url="https://twitter.com/The_vine__">
                      Twitter
                    </AnimatedLink>
                    <AnimatedLink url="https://www.linkedin.com/in/viney17">
                      Linkedin
                    </AnimatedLink>
                    <AnimatedLink url="mailto:officialkb17@gmail.com">
                      Email
                    </AnimatedLink>
                    <AnimatedLink url="https://github.com/vineyy17">
                      Github
                    </AnimatedLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-preview">
            <div className="menu-preview-box">
              <div className="menu-preview-box-item">
                <div className="menu-preview-box-holder">
                  <AnimatedLink type="custom" url="/contact">
                    Explore
                  </AnimatedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
