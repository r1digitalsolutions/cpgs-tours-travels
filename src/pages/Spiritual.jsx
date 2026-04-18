import PackagesPage from './PackagesPage';
import { spiritualPackages } from '../data/packagesData';

const Spiritual = () => (
  <PackagesPage
    title="Spiritual & Pilgrimage Tours"
    subtitle="Embark on a sacred journey of faith and devotion. From Char Dham to Vaishno Devi — experience divine blessings with our guided yatras."
    packages={spiritualPackages}
    icon="🕉️"
    heroBg="#1a0a2a"
  />
);
export default Spiritual;
