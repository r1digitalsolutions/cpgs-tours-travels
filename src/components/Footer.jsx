import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <h3 className="footer-logo">CPGS <span className="highlight">Tours</span></h3>
          <p className="footer-desc">
            Your trusted partner for memorable journeys across India and beyond. Experience the joy of traveling with expertly curated packages.
          </p>
          <div className="social-links">
            <a href="https://wa.me/919486365972" target="_blank" rel="noopener noreferrer" className="social-icon"><MessageCircle size={20} /></a>
            <a href="mailto:cpgstoursandtravels24@gmail.com" className="social-icon"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/international">International Packages</Link></li>
            <li><Link to="/domestic">Domestic Packages</Link></li>
            <li><Link to="/spiritual">Spiritual Tours</Link></li>
            <li><Link to="/faq">Group &amp; Honeymoon</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Tamil Nadu, India</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+919443597272" style={{ color: 'inherit' }}>+91 94435 97272</a>
            </li>
            <li>
              <MessageCircle size={18} className="contact-icon" />
              <a href="https://wa.me/919486365972" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+91 94863 65972 (WhatsApp)</a>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:cpgstoursandtravels24@gmail.com" style={{ color: 'inherit' }}>cpgstoursandtravels24@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-desc">Subscribe to get special offers and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CPGS Tours &amp; Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
