import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    title: 'Taj Mahal, India',
    image: '/destination_1.png',
    tours: '12 Tours',
    price: 'From $499'
  },
  {
    id: 2,
    title: 'Himalayas, Nepal',
    image: '/destination_2.png',
    tours: '8 Tours',
    price: 'From $899'
  },
  {
    id: 3,
    title: 'Kerala Backwaters',
    image: '/destination_1.png', // Using placeholder
    tours: '15 Tours',
    price: 'From $399'
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading">Popular Destinations</h2>
            <p className="subheading">Explore our highly rated and most requested destinations around the world.</p>
          </motion.div>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              className="destination-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="destination-img-wrapper">
                <img src={dest.image} alt={dest.title} className="destination-img" />
                <div className="destination-overlay"></div>
                <div className="destination-price">{dest.price}</div>
              </div>
              <div className="destination-info glass">
                <h3 className="destination-title">{dest.title}</h3>
                <div className="destination-meta">
                  <span className="flex items-center gap-1 text-sm text-muted">
                    <MapPin size={16} /> {dest.tours}
                  </span>
                  <button className="btn btn-secondary btn-sm">Explore</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
