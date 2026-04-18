import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Plane, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    { name: '🌍 International', path: '/international' },
    { name: '🏔️ Domestic', path: '/domestic' },
    { name: '🕉️ Spiritual', path: '/spiritual' },
    { name: '❓ FAQ & Group Tours', path: '/faq' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Plane className="logo-icon" />
          <span className="logo-text">CPGS <span className="highlight">Tours</span></span>
        </Link>

        <div className="desktop-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>

          <div className="dropdown-wrap" onMouseEnter={() => setPackagesOpen(true)} onMouseLeave={() => setPackagesOpen(false)}>
            <button className="nav-link dropdown-trigger">Packages <ChevronDown size={14} /></button>
            <AnimatePresence>
              {packagesOpen && (
                <motion.div className="dropdown glass" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:8 }} transition={{ duration:0.2 }}>
                  {packages.map((p, i) => (
                    <NavLink key={i} to={p.path} className="dropdown-item" onClick={() => setPackagesOpen(false)}>{p.name}</NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Group & Honeymoon</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary nav-btn">Book Now</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-menu glass" initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}>
            <NavLink to="/" className="mobile-link" onClick={closeMobile}>Home</NavLink>
            <NavLink to="/international" className="mobile-link" onClick={closeMobile}>🌍 International Packages</NavLink>
            <NavLink to="/domestic" className="mobile-link" onClick={closeMobile}>🏔️ Domestic Packages</NavLink>
            <NavLink to="/spiritual" className="mobile-link" onClick={closeMobile}>🕉️ Spiritual Tours</NavLink>
            <NavLink to="/faq" className="mobile-link" onClick={closeMobile}>❓ FAQ & Group Tours</NavLink>
            <NavLink to="/contact" className="mobile-link" onClick={closeMobile}>📞 Contact Us</NavLink>
            <Link to="/contact" className="btn btn-primary w-full mt-4" onClick={closeMobile}>Book Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
