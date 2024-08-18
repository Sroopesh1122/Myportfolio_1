import React, { createContext, useState, useEffect, useRef } from 'react';
import HeroPage from './pages/HeroPage';
import Navbar from './components/Navbar';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutPage from './pages/AboutPage';
import { menuData } from './Data/MenuData';
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

export const DataContext = createContext();

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (val) => {
    setSelectedMenu(val);
    window.location = `#${menuData[val].title.toLowerCase()}`;
  };

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observers = Object.keys(sectionRefs).map((key,idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleSectionInView(idx);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        }
      );

      const section = sectionRefs[key].current;
      if (section) {
        observer.observe(section);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        const section = sectionRefs[Object.keys(sectionRefs)[index]].current;
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleSectionInView = (sectionKey) => {
    setSelectedMenu(sectionKey);
  };
  return (
    <DataContext.Provider value={{ selectedMenu, handleMenuClick }}>
      <Navbar />
      <div className='main md:custom-scrollbar'>
        <div ref={sectionRefs.hero} id="hero">
          <HeroPage />
        </div>
        <div ref={sectionRefs.about} id="about">
          <AboutPage />
        </div>
        <div ref={sectionRefs.skills} id="skills">
          <SkillsPage />
        </div>
        <div ref={sectionRefs.projects} id="projects">
          <ProjectPage />
        </div>
        <div ref={sectionRefs.contact} id="contact">
          <ContactPage />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default App;

