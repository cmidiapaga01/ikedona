import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';

const MainSection = () => {
  return (
    <div className="main">
    <Home />
    <About />
    <Skills />
    <Services />
    </div>
  );
};

export default MainSection;
