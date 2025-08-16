import { useEffect } from 'react';

export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return null;
};

export default ScrollToTop;


