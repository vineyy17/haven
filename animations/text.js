import Splitting from 'splitting';
import { IO } from './observe';
import gsap from 'gsap';

export const split = () => {
  const blurredText = document.querySelectorAll("[data-animation='blurIn']");
  const opacIn = document.querySelectorAll("[data-animation='opacIn']");
  const custom = document.querySelectorAll("[data-animation='custom']");
  const bCustom = document.querySelectorAll("[data-animation='bouncecustom']");
  const hCustom = document.querySelectorAll("[data-animation='hCustom']");
  const H = document.querySelectorAll("[data-animation='h']");

  const p = document.querySelectorAll("[data-animation='p']");
  const B = document.querySelectorAll("[data-animation='bounce']");

  p.forEach((item) => {
    const line = Splitting({
      target: item,
      by: 'lines',
    });
    line.forEach((splitResult) => {
      const wrappedLines = splitResult.words
        .map(
          (wordsArr) => `
                       <span className="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`,
        )
        .join('');
      splitResult.el.innerHTML = wrappedLines;
    });

    gsap.set(item.querySelectorAll('.word'), {
      yPercent: 105,
      opacity: 0,
      rotateX: 50,
      transformStyle: 'preserve-3d',
    });
    IO(item, { threshold: 0.8 }).then(() => {
      const elem = item.querySelectorAll('.word');
      gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: elem.length > 100 ? 0.02 : 0.03,
        duration: elem.length > 100 ? 0.65 : 0.75,
        ease: 'easeOut',
      });
    });
  });

  blurredText.forEach((item) => {
    const line = Splitting({
      target: item,
      by: 'lines',
    });
    line.forEach((splitResult) => {
      const wrappedLines = splitResult.words
        .map(
          (wordsArr) => `
                       <span className="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`,
        )
        .join('');
      splitResult.el.innerHTML = wrappedLines;
    });

    gsap.set(item.querySelectorAll('.word'), {
      yPercent: 50,
      opacity: 0,
      filter: 'blur(2px) contrast(0%)',
      rotateX: 50,
      transformStyle: 'preserve-3d',
    });
    IO(item, { threshold: 0.8 }).then(() => {
      const elem = item.querySelectorAll('.word');
      gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        filter: 'blur(0px) contrast(100%)',
        rotateX: 0,
        stagger: elem.length > 30 ? 0.01 : 0.02,
        duration: elem.length > 30 ? 0.5 : 0.6,
        ease: 'power1.inOut',
      });
    });
  });

  opacIn.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    gsap.set(item.querySelectorAll('.char'), {
      opacity: 0.05,
      transformStyle: 'preserve-3d',
    });
    IO(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.to(elem, {
        opacity: 1,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: 'power1.inOut',
      });
    });
  });

  custom.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    gsap.set(item.querySelectorAll('.char'), {
      opacity: 0,
      yPercent: 100,
      transformStyle: 'preserve-3d',
    });
    IO(item).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        delay: 1.2,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: 'easeOut',
      });
    });
  });

  hCustom.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    gsap.set(item.querySelectorAll('.char'), {
      opacity: 0,
      yPercent: 100,
      transformStyle: 'preserve-3d',
    });
    IO(item).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        delay: 1.5,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: 'easeOut',
      });
    });
  });

  H.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    gsap.set(item.querySelectorAll('.char'), {
      opacity: 0,
      yPercent: 100,
      transformStyle: 'preserve-3d',
    });
    IO(item).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        delay: 0.2,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: 'easeOut',
      });
    });
  });

  B.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    IO(item).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.fromTo(
        elem,
        {
          yPercent: 40,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          delay: 1.2,
          duration: 3,
          stagger: 0.05,
          ease: 'elastic.out(1, 0.3)',
        },
      );
    });
  });

  bCustom.forEach((item) => {
    Splitting({
      target: item,
      by: 'chars',
    });
    IO(item).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.fromTo(
        elem,
        {
          yPercent: 40,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          delay: 0.5,
          duration: 3,
          stagger: 0.05,
          ease: 'elastic.out(1, 0.3)',
        },
      );
    });
  });
};
