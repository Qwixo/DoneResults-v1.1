import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & ICP",
      description: "We learn about your business and define your ideal client.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "AI-Powered Outreach",
      description: "We craft & send personalized emails, set up subdomains, and ensure deliverability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Meetings on Your Calendar",
      description: "We book calls via Google Meet; you close the deals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section bg-light-bg" id="process">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Simple 3-Step Process</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We've streamlined our approach to get you results quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line between steps (only for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_16px)] w-full h-0.5 bg-light-aqua z-0"></div>
              )}
              
              <div className="bg-white rounded-lg shadow-md p-8 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-light-aqua flex items-center justify-center text-dark-blue mb-6">
                    {step.icon}
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-dark-aqua flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-dark-gray">{step.title}</h3>
                  <p className="text-center">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="primary-button"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
