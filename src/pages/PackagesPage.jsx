import { motion } from 'framer-motion';
import PackageCard from '../components/PackageCard';
import './PackagesPage.css';

const PackagesPage = ({ title, subtitle, packages, icon, heroBg = '#0f172a' }) => {
  return (
    <div className="packages-page">
      <div className="packages-hero" style={{ background: `linear-gradient(135deg, ${heroBg} 0%, #0f172a 100%)` }}>
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="container">
          <motion.div
            className="packages-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="page-icon">{icon}</span>
            <h1 className="page-title">{title}</h1>
            <p className="page-subtitle">{subtitle}</p>
            <div className="page-stats">
              <div className="stat"><span>{packages.length}+</span><p>Packages</p></div>
              <div className="stat-divider" />
              <div className="stat"><span>24/7</span><p>Support</p></div>
              <div className="stat-divider" />
              <div className="stat"><span>5000+</span><p>Happy Travellers</p></div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="packages-grid-section">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <div>
            <h2>Can't find what you're looking for?</h2>
            <p>We specialise in custom itineraries. Tell us your dream trip!</p>
          </div>
          <a href="/contact" className="btn btn-secondary">Get Custom Quote</a>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
