import React from 'react';
import Hero from './components/Hero';
import FeaturesWorkflow from './components/FeaturesWorkflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] font-['Inter',sans-serif]">
      <Hero />
      <FeaturesWorkflow />
      <Pricing />
      <Testimonials />
      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0b12] py-10 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-sm">Automate the Future</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Flux Automation, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
