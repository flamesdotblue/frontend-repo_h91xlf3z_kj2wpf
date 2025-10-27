import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesWorkflow from './components/FeaturesWorkflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] font-['Inter',sans-serif]">
      <Header />
      <Hero />
      <FeaturesWorkflow />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
