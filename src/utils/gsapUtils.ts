
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize common animations
export const initGsapAnimations = () => {
  // Register scroll triggers
  ScrollTrigger.refresh();
  
  // Common fade-in animation for sections
  gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
  
  // Staggered items animation
  gsap.utils.toArray('.stagger-item').forEach((item: any, i: number) => {
    gsap.from(item, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  });
};

// Register animation for a page when it loads
export const animatePage = (callback: () => void) => {
  const tl = gsap.timeline();
  
  // Reset scroll position
  window.scrollTo(0, 0);
  
  // Execute any additional animations
  if (callback) {
    callback();
  }
  
  return tl;
};

// Text reveal animation
export const textReveal = (element: string, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay,
    stagger: 0.1
  });
};
