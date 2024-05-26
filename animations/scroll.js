import Lenis from '@studio-freight/lenis';

export default function scroll() {
  const lenis = new Lenis({
    wrapper: window,
    lerp: 0.07,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
