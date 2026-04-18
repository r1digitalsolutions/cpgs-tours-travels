import { motion } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/hero_bg.png" alt="Tropical Beach" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Discover The World</span>
          <h1 className="hero-title">
            Memorable trips,<br />
            made <span className="highlight">easy.</span>
          </h1>
          <p className="hero-subtitle">
            From pilgrimages to adventures, we provide comfortable, affordable packages with expert guidance across India and beyond.
          </p>
        </motion.div>

        <motion.div 
          className="search-bar glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="search-input-group">
            <MapPin className="search-icon" />
            <div className="search-field">
              <label>Location</label>
              <input type="text" placeholder="Where do you want to go?" />
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="search-input-group">
            <Calendar className="search-icon" />
            <div className="search-field">
              <label>Date</label>
              <input type="text" placeholder="Choose date" />
            </div>
          </div>

          <button className="btn btn-primary search-btn">
            <Search size={20} />
            <span>Explore Now</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
