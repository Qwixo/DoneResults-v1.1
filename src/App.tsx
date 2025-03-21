import React from 'react';
import HeroSection from './components/sections/HeroSection';
import WhatWeDoSection from './components/sections/WhatWeDoSection';
import ProofSection from './components/sections/ProofSection';
import PersonalNoteSection from './components/sections/PersonalNoteSection';
import DifferentiatorsSection from './components/sections/DifferentiatorsSection';
import ProcessSection from './components/sections/ProcessSection';
import GuaranteeSection from './components/sections/GuaranteeSection';
import FaqSection from './components/sections/FaqSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans bg-light-bg min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="relative z-20 bg-white">
          <WhatWeDoSection />
          <ProofSection />
          <PersonalNoteSection />
          <DifferentiatorsSection />
          <ProcessSection />
          <GuaranteeSection />
          <FaqSection />
          <FinalCtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
