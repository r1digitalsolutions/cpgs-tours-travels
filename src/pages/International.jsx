import PackagesPage from './PackagesPage';
import { internationalPackages } from '../data/packagesData';
import { Globe } from 'lucide-react';

const International = () => (
  <PackagesPage
    title="International Tour Packages"
    subtitle="Explore the world with our expertly crafted international packages. From Dubai to Bali, we make every journey unforgettable."
    packages={internationalPackages}
    icon={<Globe size={48} color="var(--primary)" />}
    heroBg="#0c1a3a"
  />
);
export default International;
