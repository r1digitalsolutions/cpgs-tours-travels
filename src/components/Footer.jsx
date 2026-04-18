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
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="#" className="social-icon"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Destinations</Link></li>
            <li><Link to="/">Tour Packages</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>New Delhi, India</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 123 456 7890</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>info@cpgstours.com</span>
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
        <p>&copy; {new Date().getFullYear()} CPGS Tours & Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
