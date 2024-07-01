'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '@/styles/components/NavMenu.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';
import AnimatedLink from './AnimatedLink';

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/shop', label: 'Shop' },
  { path: '/contact', label: 'Contact' },
  { path: '/showreel', label: 'Showreel' },
];

const NavMenu = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navigatePath, setNavigatePath] = useState(null);

  const tl = useRef();

  const toggleMenu = (path = null) => {
    if (path) {
      setNavigatePath(path);
    }
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

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen && navigatePath) {
      const timeoutId = setTimeout(() => {
        router.push(navigatePath);
        setNavigatePath(null);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isMenuOpen, navigatePath, router]);

  return (
    <div className="menu-parent">
      <div className="menu-container" ref={container}>
        <div className="menu-bar">
          <div className="menu-logo">
            <Link href="/">HAVEN</Link>
          </div>
          <div className="menu-open" onClick={() => toggleMenu()}>
            <p>MENU</p>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
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
                  <div
                    className={`menu-link-item-holder ${
                      link.path === currentPath &&
                      'menu-link-item-holder--active'
                    }`}
                  >
                    <Link
                      href={link.path}
                      className="menu-link"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu(link.path);
                      }}
                    >
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
                    <AnimatedLink>Twitter</AnimatedLink>
                    <AnimatedLink>Linkedin</AnimatedLink>
                    <AnimatedLink>Email</AnimatedLink>
                    <AnimatedLink>Github</AnimatedLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-preview">
            <div className="menu-preview-box">
              <div className="menu-preview-box-item">
                <div className="menu-preview-box-holder">
                  <AnimatedLink>Explore</AnimatedLink>
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
