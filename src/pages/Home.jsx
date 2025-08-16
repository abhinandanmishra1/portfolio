import React, { useEffect } from 'react';
import { Banner, Nav, About, Services, Work, Contact } from '../components';
import { scroller } from 'react-scroll';

export const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const target = window.location.hash.replace('#', '');
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 600,
          offset: 0,
        });
      }, 0);
    }
  }, []);

  return (
    <>
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
};

export default Home;


