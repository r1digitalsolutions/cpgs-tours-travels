import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, Globe, CreditCard, XCircle, FileText, HelpCircle, Users, Heart, CheckCircle } from 'lucide-react';
import { faqs } from '../data/packagesData';
import './FAQ.css';

const tabs = [
  { key: 'general', label: 'General', icon: <Globe size={18} /> },
  { key: 'payment', label: 'Payment', icon: <CreditCard size={18} /> },
  { key: 'cancellation', label: 'Cancellation', icon: <XCircle size={18} /> },
  { key: 'passport', label: 'Passport & Visa', icon: <FileText size={18} /> },
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HelpCircle size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {tab.icon} {tab.label}
                </span>
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
              <div className="info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={40} color="var(--primary)" /></div>
              <h3>Group Tours</h3>
              <p>Travel with friends, family, or colleagues! Our group tour packages are designed for maximum fun, comfort, and value. Groups of 10+ get special discounts.</p>
              <ul className="info-list">
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Fixed departure dates</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Professional tour manager included</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Group discounts available</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Customizable for corporate groups</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Fun group activities planned</li>
              </ul>
              <a href="/contact" className="btn btn-primary mt-1">Enquire for Group Tour</a>
            </motion.div>

            <motion.div className="info-card" initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
              <div className="info-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Heart size={40} color="var(--primary)" /></div>
              <h3>Honeymoon Packages</h3>
              <p>Make your first trip as a couple absolutely magical. Our honeymoon packages are crafted for romance, privacy, and unforgettable memories.</p>
              <ul className="info-list">
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Romantic couple-friendly resorts</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Honeymoon suite with decorations</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Candle-light dinner arrangements</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Spa & wellness packages</li>
                <li><CheckCircle size={16} color="#22c55e" style={{ marginRight: '8px' }} /> Private transfers & guided tours</li>
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
