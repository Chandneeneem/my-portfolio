import { useEffect } from 'react';

/**
 * Simple hook that finds all elements with the 'fade-section' class
 * and adds 'is-visible' when they enter the viewport.
 *
 * This powers the scroll-based fade-in animation defined in CSS.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.fade-section');

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};


