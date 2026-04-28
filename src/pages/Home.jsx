import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import { internationalPackages, domesticPackages, spiritualPackages } from '../data/packagesData';
import { Award, DollarSign, Compass, ShieldCheck, PhoneCall, Plane, Globe, Map, Sparkles, UserCircle, Star } from 'lucide-react';
import './Home.css';

const WhyUs = () => {
  const items = [
    { icon: <Award size={32} />, title: 'Trusted Since 2010', desc: 'Over 15 years of crafting unforgettable journeys with 50,000+ happy travellers.' },
    { icon: <DollarSign size={32} />, title: 'Best Price Guarantee', desc: 'We guarantee the best prices. Find it cheaper? We\'ll match it and give you an extra discount.' },
    { icon: <Compass size={32} />, title: 'Expert Travel Guides', desc: 'Our experienced local guides ensure you get authentic experiences at every destination.' },
    { icon: <ShieldCheck size={32} />, title: '100% Safe & Secure', desc: 'Your safety is our priority. All packages include travel insurance and 24/7 emergency support.' },
    { icon: <PhoneCall size={32} />, title: '24/7 Customer Support', desc: 'We\'re always available. Call, email, or WhatsApp us anytime before, during, or after your trip.' },
    { icon: <Plane size={32} />, title: 'End-to-End Service', desc: 'From visa processing to airport pickup — we handle everything so you can focus on enjoying your trip.' },
  ];
  return (
    <section className="why-us">
      <div className="container">
        <h2 className="heading">Why Choose CPGS Tours?</h2>
        <p className="subheading">We go beyond booking — we craft experiences that last a lifetime.</p>
        <div className="why-grid">
          {items.map((item, i) => (
            <motion.div key={i} className="why-card" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedPackages = ({ titleIcon: TitleIcon, title, packages, link, linkLabel, accent }) => (
  <section className="featured-packages" style={{ '--accent': accent }}>
    <div className="container">
      <div className="section-top">
        <div>
          <h2 className="heading" style={{ textAlign:'left', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {TitleIcon && <TitleIcon size={32} color={accent} />} {title}
          </h2>
        </div>
        <Link to={link} className="btn btn-primary view-all-btn">View All →</Link>
      </div>
      <div className="featured-grid">
        {packages.slice(0, 3).map((pkg, i) => <PackageCard key={pkg.id} pkg={pkg} index={i} />)}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'Absolutely amazing experience! The Rajasthan tour was perfectly organized. Every detail was taken care of. CPGS Tours is our go-to for all future trips!' },
    { name: 'Rahul Mehta', location: 'Mumbai', rating: 5, text: 'The Dubai package was exceptional value for money. Hotels were great, the desert safari was incredible. Highly recommend to everyone!' },
    { name: 'Anita Patel', location: 'Ahmedabad', rating: 5, text: 'Did the Char Dham Yatra with CPGS. The team was so supportive and spiritual throughout. A life-changing experience. Thank you!' },
    { name: 'Vikram Singh', location: 'Jaipur', rating: 5, text: 'Booked the Kerala honeymoon package. The houseboat stay was magical. My wife loved every bit of it. Will definitely book again!' },
  ];
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="heading">What Our Travellers Say</h2>
        <p className="subheading">Real stories from people who trusted us with their most precious moments.</p>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <motion.div key={i} className="review-card glass" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.15 }}>
              <div className="review-stars" style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <span className="review-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UserCircle size={40} strokeWidth={1.5} color="var(--primary)" />
                </span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="stats-section">
    <div className="container stats-grid">
      {[
        { value: '50,000+', label: 'Happy Travellers' },
        { value: '200+', label: 'Tour Packages' },
        { value: '40+', label: 'Countries Covered' },
        { value: '15+', label: 'Years Experience' },
      ].map((s, i) => (
        <motion.div key={i} className="stat-box" initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <Stats />
    <WhyUs />
    <FeaturedPackages titleIcon={Globe} title="International Packages" packages={internationalPackages} link="/international" accent="#0ea5e9" />
    <FeaturedPackages titleIcon={Map} title="Domestic Packages" packages={domesticPackages} link="/domestic" accent="#22c55e" />
    <FeaturedPackages titleIcon={Sparkles} title="Spiritual & Pilgrimage" packages={spiritualPackages} link="/spiritual" accent="#f97316" />
    <Testimonials />
    <Destinations />
  </>
);

export default Home;
