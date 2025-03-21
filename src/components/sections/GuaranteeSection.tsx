import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-dark-aqua text-white" id="guarantee">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Guaranteed Meetings. Or You Don't Pay.
          </h2>
          
          <p className="text-xl mb-8 text-white text-opacity-90">
            We're so confident in our ability to book you warm, high-intent leads that if we ever fail, you only cover system fees—nothing more.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Our Risk-Free Guarantee</h3>
                <p className="mb-0">
                  If we don't deliver the agreed-upon number of qualified meetings each month, you'll only pay for the system costs—our service fee is waived completely. That's how confident we are in our process.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <a 
              href="#cta" 
              className="bg-white text-dark-aqua font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 inline-block shadow-lg"
            >
              Get Started Risk-Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
