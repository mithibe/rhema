import React from 'react';
import VisionaryMenHeader from './VisionaryMenHeader';
import VisionaryMenFooter from './VisionaryMenFooter';
import VisionaryMenHome from './VisionaryMenHome';
import Cards from './ThreeCards'
import Hero from './HeroSection'
import Events from './Events';

const VisionaryMen = () => {
  return (
    <div>
      <VisionaryMenHeader />
      <Hero />
      <Cards />
      <Events />
      <VisionaryMenHome />
      <VisionaryMenFooter />
    </div>
  );
};

export default VisionaryMen;
