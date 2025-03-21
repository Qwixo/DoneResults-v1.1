import React from 'react';
import { cn } from '../../lib/utils';

const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-light-bg relative overflow-hidden" id="cta">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className={cn(
          "w-full h-full",
          "bg-[linear-gradient(135deg,_var(--light-aqua)_0%,_transparent_50%,_var(--dark-aqua)_100%)]"
        )}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-gray">
            Ready to Fill Your Calendar with Quality Leads?
          </h2>
          
          <p className="text-xl mb-8 text-dark-gray">
            Book your free strategy call today and discover how our AI-powered cold email system can transform your business.
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-4 text-dark-aqua">
              What You'll Get on Your Free Strategy Call:
            </h3>
            
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-light-aqua rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>A personalized assessment of your current lead generation strategy</span>
              </li>
              <li className="flex items-start">
                <div className="bg-light-aqua rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Insights into how our AI-powered system can be tailored to your business</span>
              </li>
              <li className="flex items-start">
                <div className="bg-light-aqua rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>A clear roadmap of what implementation would look like for your company</span>
              </li>
            </ul>
            
            <a 
              href="#" 
              className="primary-button text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] w-full md:w-auto"
            >
              Book Your Free Strategy Call
            </a>
          </div>
          
          <p className="text-sm text-dark-gray opacity-80">
            No obligation. No pressure. Just a straightforward conversation about how we can help you get more clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
