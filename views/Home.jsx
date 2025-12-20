"use client";
import React, { useEffect } from 'react';
import { Banner, Nav, About, Services, Work, Contact } from '../components';
import { scroller } from 'react-scroll';
import Spotify from '../components/Spotify';

export const Home = ({ profile, experiences, projects }) => {
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
      <Banner profile={profile} />
      <Nav />
      <About profile={profile} />
      <Services />
      <Work projects={projects} />
      <Contact />
      {/* <Spotify track={{ title: "Mock Song", artist: "Mock Artist" }} /> */}
    </>
  );
};

export default Home;
