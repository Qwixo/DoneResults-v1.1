import React from 'react';

const WhatWeDoSection: React.FC = () => {
  return (
    <section className="section bg-white" id="what-we-do">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">What We Do & Why It Benefits You</h2>
            <p className="text-lg mb-6">
              We handle everything from domain setup to personalizing each email, so you get warm leads booked to your calendar via Google Meet.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-light-aqua rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span><strong>Save Time:</strong> We manage the entire outreach process so you can focus on your core business.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-light-aqua rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span><strong>High-Quality Leads:</strong> Our AI-powered approach ensures you connect with genuinely interested prospects.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-light-aqua rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span><strong>Focus on Closing:</strong> We book the meetings, you close the deals. It's that simple.</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-dark-aqua to-light-aqua rounded-lg p-1">
              <div className="bg-white rounded-lg p-6">
                <div className="aspect-w-4 aspect-h-3 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-dark-aqua opacity-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="text-dark-aqua text-5xl font-bold mb-2">AI</div>
                    <div className="text-dark-gray text-xl font-medium">Powered Outreach</div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dark-aqua">10+</div>
                    <div className="text-sm text-dark-gray">Meetings/Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dark-aqua">30%+</div>
                    <div className="text-sm text-dark-gray">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-light-aqua opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dark-aqua opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
