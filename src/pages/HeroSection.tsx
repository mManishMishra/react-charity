import { ImpactStats } from "../components/ImpactStats";
import Hero from "../assets/church-of-the-king-j9jZSqfH5YI-unsplash.jpg";
import HeroBanner from "../components/HeroBanner";

export const HeroSection = () => (
  <>
    <HeroBanner
      image={Hero}
      title="Protect. Educate. Empower."
      subtitle="So children can rise above adversity and thrive."
    />

    <ImpactStats />
  </>
);
