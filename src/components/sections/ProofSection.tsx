import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section className="section bg-light-bg" id="proof">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Real Results & Proof</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Here's what our system is doing right now—consistently scheduling 10+ meetings a week.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Performance Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-dark-aqua text-white py-3 px-4">
              <h3 className="font-semibold">Email Campaign Performance</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Open Rate</span>
                  <span className="font-bold text-dark-aqua">78.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-dark-aqua h-2 rounded-full" style={{ width: '78.3%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Reply Rate</span>
                  <span className="font-bold text-dark-aqua">32.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-dark-aqua h-2 rounded-full" style={{ width: '32.5%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Meeting Conversion</span>
                  <span className="font-bold text-dark-aqua">12.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-dark-aqua h-2 rounded-full" style={{ width: '12.8%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Weekly Stats Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-dark-blue text-white py-3 px-4">
              <h3 className="font-semibold">Weekly Performance</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-light-bg rounded-lg">
                  <div className="text-4xl font-bold text-dark-aqua mb-2">10+</div>
                  <div className="text-dark-gray font-medium">Meetings Booked</div>
                  <div className="text-sm text-gray-500">Per Week</div>
                </div>
                
                <div className="text-center p-4 bg-light-bg rounded-lg">
                  <div className="text-4xl font-bold text-dark-aqua mb-2">42%</div>
                  <div className="text-dark-gray font-medium">Close Rate</div>
                  <div className="text-sm text-gray-500">From Meetings</div>
                </div>
                
                <div className="text-center p-4 bg-light-bg rounded-lg">
                  <div className="text-4xl font-bold text-dark-aqua mb-2">3.2x</div>
                  <div className="text-dark-gray font-medium">ROI</div>
                  <div className="text-sm text-gray-500">Average</div>
                </div>
                
                <div className="text-center p-4 bg-light-bg rounded-lg">
                  <div className="text-4xl font-bold text-dark-aqua mb-2">24h</div>
                  <div className="text-dark-gray font-medium">Response Time</div>
                  <div className="text-sm text-gray-500">Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium">
            These aren't just numbers—they're potential clients waiting to work with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
