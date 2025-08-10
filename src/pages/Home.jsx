import React, { useEffect } from 'react';
import { Banner, Nav, About, Services, Work, Contact } from '../components';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace('#', '');
      // Wait a tick to ensure sections are mounted
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 600,
          offset: 0,
        });
      }, 0);
    }
  }, [location]);

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


