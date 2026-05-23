import { RefObject, useEffect } from 'react';

const useReveal = (rootRef: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
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
      { threshold: 0.1 },
    );

    root.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [rootRef]);
};

export default useReveal;
