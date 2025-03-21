import React from 'react';

const PersonalNoteSection: React.FC = () => {
  return (
    <section className="section bg-white" id="personal-note">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image Column */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-light-aqua shadow-xl">
                {/* Placeholder for Jan's photo */}
                <div className="w-full h-full bg-gradient-to-br from-dark-gray to-dark-blue flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-light-bg opacity-30" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-dark-aqua opacity-20 rounded-full blur-lg"></div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-8">
            <h2 className="section-title">We Failed (a Lot)—So You Don't Have To</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                I'm Jan, founder of DoneResults. I tested countless cold email strategies—most flopped—until I finally cracked the code.
              </p>
              
              <p className="mb-4">
                This worked so well for my video marketing agency that I had to hire more people just to handle the lead flow. The system consistently generated 10+ qualified meetings every week, with many converting into long-term clients.
              </p>
              
              <p className="mb-4">
                After seeing how transformative this approach was for my own business, I realized other service providers could benefit from the same system. That's why I created DoneResults—to share this proven method with you.
              </p>
              
              <p className="font-medium text-dark-aqua">
                Now, I'd love to share that same system with you.
              </p>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div className="text-sm text-dark-gray italic">
                  Jan Doe, Founder of DoneResults
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalNoteSection;
