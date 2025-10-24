import React, { useEffect } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
// utils
import { initScrollAnimations } from './utils/animations';

const App = () => {
  useEffect(() => {
    // Inicializa as animações quando o componente é montado
    initScrollAnimations();
  }, []);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
