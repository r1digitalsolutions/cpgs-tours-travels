import PackagesPage from './PackagesPage';
import { domesticPackages } from '../data/packagesData';

const Domestic = () => (
  <PackagesPage
    title="Domestic Tour Packages"
    subtitle="Discover the incredible diversity of India. From the snow-capped Himalayas to sun-kissed beaches — explore it all with CPGS Tours."
    packages={domesticPackages}
    icon="🏔️"
    heroBg="#0a2a1a"
  />
);
export default Domestic;
