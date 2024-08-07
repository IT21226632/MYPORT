'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Landing from './components/Landing';
import Description from './components/Description';
import Contact from './components/Contact';
import Slide from './components/SlidingImages';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Service from './components/Services'
import Gallery from './components/Gallery'

import './page.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
     
        <Landing />
      
      <div id="about">
        <Description />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="work">
        <Projects />
      </div>
      <div id="slides">
        <Slide />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
