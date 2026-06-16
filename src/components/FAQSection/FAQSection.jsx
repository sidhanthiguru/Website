import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  { 
    question: "How do I book a class?", 
    answer: "You can book any of our classes directly through our website by visiting the booking page or contacting our front desk." 
  },
  { 
    question: "Do I need prior Yoga experience?", 
    answer: "Not at all! We offer classes for all levels, from beginners to advanced practitioners." 
  },
  { 
    question: "What should I bring?", 
    answer: "Please bring a yoga mat, a water bottle, and a towel. Wear comfortable clothing that allows you to move freely." 
  },
  { 
    question: "Do you offer private sessions?", 
    answer: "Yes, we offer one-on-one sessions tailored specifically to your individual goals and needs. Please reach out to us for more information." 
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
                initial={false}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="faq-question-row">
                  <span className="faq-icon">
                    {isOpen ? <Minus size={16} strokeWidth={1} /> : <Plus size={16} strokeWidth={1} />}
                  </span>
                  <h3 className="faq-question">{faq.question}</h3>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-wrapper open"
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
