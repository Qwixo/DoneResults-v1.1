import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-dark-gray focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-dark-aqua transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      <div className={`mt-2 transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-dark-gray">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How soon until I see results?",
      answer: "Most clients start seeing responses within the first week of launching their campaign. Typically, you can expect to have your first meetings booked within 2-3 weeks. Our system is designed to ramp up gradually to ensure optimal deliverability and results."
    },
    {
      question: "Does this work for any industry?",
      answer: "While our system works exceptionally well for B2B services, some industries see better results than others. During our initial strategy call, we'll evaluate your specific niche and target audience to determine if our approach is the right fit for your business. We only take on clients we're confident we can help."
    },
    {
      question: "Seriously, no results = no pay?",
      answer: "Yes, we stand by our guarantee. If we don't deliver the agreed-upon number of qualified meetings in a given month, you'll only pay for the basic system costs (email infrastructure, etc.), and our service fee is completely waived. We're that confident in our ability to deliver results."
    },
    {
      question: "What if I'm new to cold email?",
      answer: "That's perfectly fine! Our system is designed to handle everything for you, from technical setup to campaign management. We'll guide you through the entire process and provide all the training you need to handle the meetings we book for you."
    }
  ];
  
  return (
    <section className="section bg-white" id="faq">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Get answers to common questions about our service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6">Still have questions?</p>
          <a 
            href="#cta" 
            className="primary-button"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
