import Slider from "../components/Slider";
// import FeaturedStory from "./FeaturedStory";
import { HeroSection } from "./HeroSection";
import { OurImpact } from "../components/OurImpact";
import SignUp from "./Signup";
import WhatsNew from "./WhatsNew";
import GodHeader from "../components/GodHeader";

const Home = () => {
  return (
    <>
      <Slider />
      <GodHeader title="Whats New" />
      <WhatsNew />

      <OurImpact />

      <SignUp />
      <HeroSection />
      {/* <FeaturedStory /> */}
    </>
  );
};

export default Home;
