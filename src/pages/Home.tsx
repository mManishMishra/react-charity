import Slider from "../components/Slider";
import FeaturedStory from "./FeaturedStory";
import { HeroSection } from "./HeroSection";
import { OurImpact } from "../components/OurImpact";
import SignUp from "./Signup";
import WhatsNew from "./WhatsNew";

const Home = () => {
  return (
    <>
      <Slider />
      <WhatsNew />

      <OurImpact />

      <SignUp />
      <HeroSection />
      <FeaturedStory />
    </>
  );
};

export default Home;
