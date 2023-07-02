import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const MainSection = () => {
  return (
    <body>
      <div className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      </div>
    </body>
  );
};

export default MainSection;
