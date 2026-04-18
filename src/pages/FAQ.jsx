import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { faqs } from '../data/packagesData';
import './FAQ.css';

const tabs = [
  { key: 'general', label: '🌍 General' },
  { key: 'payment', label: '💳 Payment' },
  { key: 'cancellation', label: '❌ Cancellation' },
  { key: 'passport', label: '🛂 Passport & Visa' },
];

const AccordionItem = ({ q, a, isOpen, toggle }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggle}>
    <div className="faq-question">
      <span>{q}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <ChevronDown size={20} />
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="faq-answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="page-icon">❓</span>
            <h1 className="page-title">Frequently Asked Questions</h1>
            <p className="page-subtitle">Got questions? We've got answers. Find everything you need to plan your perfect trip.</p>
          </motion.div>
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="faq-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`faq-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => { setActiveTab(tab.key); setOpenIndex(0); }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {faqs[activeTab].map((item, i) => (
              <AccordionItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="faq-contact-strip">
        <div className="container faq-contact-inner">
          <h2>Still have questions?</h2>
          <p>Our travel experts are here to help you plan your perfect trip.</p>
          <div className="faq-contact-btns">
            <a href="tel:+911234567890" className="btn btn-primary faq-contact-btn">
              <Phone size={18} /> Call Us Now
            </a>
            <a href="mailto:info@cpgstours.com" className="btn faq-email-btn">
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Group Tour & Honeymoon Info Sections */}
      <section className="info-sections">
        <div className="container">
          <div className="info-grid">
            <motion.div className="info-card" initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <div className="info-icon">👨‍👩‍👧‍👦</div>
              <h3>Group Tours</h3>
              <p>Travel with friends, family, or colleagues! Our group tour packages are designed for maximum fun, comfort, and value. Groups of 10+ get special discounts.</p>
              <ul className="info-list">
                <li>✅ Fixed departure dates</li>
                <li>✅ Professional tour manager included</li>
                <li>✅ Group discounts available</li>
                <li>✅ Customizable for corporate groups</li>
                <li>✅ Fun group activities planned</li>
              </ul>
              <a href="/contact" className="btn btn-primary mt-1">Enquire for Group Tour</a>
            </motion.div>

            <motion.div className="info-card" initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <div className="info-icon">💑</div>
              <h3>Honeymoon Packages</h3>
              <p>Make your first trip as a couple absolutely magical. Our honeymoon packages are crafted for romance, privacy, and unforgettable memories.</p>
              <ul className="info-list">
                <li>✅ Romantic couple-friendly resorts</li>
                <li>✅ Honeymoon suite with decorations</li>
                <li>✅ Candle-light dinner arrangements</li>
                <li>✅ Spa & wellness packages</li>
                <li>✅ Private transfers & guided tours</li>
              </ul>
              <a href="/contact" className="btn btn-secondary mt-1">Plan Your Honeymoon</a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
