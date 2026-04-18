import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Check, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PackageCard.css';

const PackageCard = ({ pkg, index = 0 }) => {
  return (
    <motion.div
      className="pkg-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="pkg-img-wrap">
        <img src={pkg.image} alt={pkg.title} className="pkg-img" />
        <div className="pkg-img-overlay"></div>
        {pkg.badge && (
          <span className="pkg-badge">
            <Tag size={12} /> {pkg.badge}
          </span>
        )}
        <div className="pkg-price-tag">{pkg.price} <span>/person</span></div>
      </div>

      <div className="pkg-body">
        <div className="pkg-location">
          <MapPin size={14} /> {pkg.location}
        </div>
        <h3 className="pkg-title">{pkg.title}</h3>

        <div className="pkg-meta">
          <span className="pkg-duration"><Clock size={14} /> {pkg.duration}</span>
          <span className="pkg-rating">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            {pkg.rating} <em>({pkg.reviews})</em>
          </span>
        </div>

        <ul className="pkg-highlights">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <li key={i}><Check size={13} /> {h}</li>
          ))}
        </ul>

        <div className="pkg-includes">
          {pkg.includes.map((inc, i) => (
            <span key={i} className="pkg-tag">{inc}</span>
          ))}
        </div>

        <div className="pkg-actions">
          <Link to="/contact" className="btn btn-primary pkg-btn">Book Now</Link>
          <button className="btn pkg-details-btn">View Details</button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
