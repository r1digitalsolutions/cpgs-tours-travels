import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Phone size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">Ready to plan your dream trip? Our travel experts are just a message away.</p>
          </motion.div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">

          <motion.div className="contact-info" initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <h2>Contact Information</h2>
            <p className="contact-info-sub">Fill out the form and our team will get back to you within 24 hours.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon"><Phone size={22} /></div>
                <div>
                  <strong>Phone</strong>
                  <p>+91 123 456 7890</p>
                  <p>+91 987 654 3210</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Mail size={22} /></div>
                <div>
                  <strong>Email</strong>
                  <p>info@cpgstours.com</p>
                  <p>support@cpgstours.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><MapPin size={22} /></div>
                <div>
                  <strong>Office Address</strong>
                  <p>123 Travel Lane, Connaught Place,</p>
                  <p>New Delhi – 110001, India</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Clock size={22} /></div>
                <div>
                  <strong>Office Hours</strong>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p>Sunday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrap" initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            {submitted ? (
              <div className="form-success">
                <div className="success-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <CheckCircle size={48} color="#22c55e" />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll contact you within 24 hours to discuss your travel plans.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">-- Select a Topic --</option>
                    <option>International Package Enquiry</option>
                    <option>Domestic Package Enquiry</option>
                    <option>Spiritual / Pilgrimage Tour</option>
                    <option>Honeymoon Package</option>
                    <option>Group Tour</option>
                    <option>Visa Assistance</option>
                    <option>Custom Itinerary</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your dream trip — destination, dates, number of travellers..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
