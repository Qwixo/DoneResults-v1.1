import React from 'react';
import { cn } from '../../lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={cn(
              "text-2xl font-bold mb-4 bg-clip-text text-transparent",
              "bg-gradient-to-r from-dark-aqua to-light-aqua"
            )}>
              DoneResults
            </h3>
            <p className="text-gray-300 mb-4">
              AI-powered cold email service with a risk-free guarantee.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#what-we-do" className="text-gray-300 hover:text-light-aqua transition-colors">What We Do</a></li>
              <li><a href="#proof" className="text-gray-300 hover:text-light-aqua transition-colors">Results</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-light-aqua transition-colors">Our Process</a></li>
              <li><a href="#guarantee" className="text-gray-300 hover:text-light-aqua transition-colors">Guarantee</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-light-aqua transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              Have questions? Reach out to us.
            </p>
            <a 
              href="#cta" 
              className="inline-block bg-dark-aqua text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DoneResults. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
