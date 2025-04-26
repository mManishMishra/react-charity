import StorySection from "../components/StorySection";
import Hero from "../assets/pexels-ritesh-arya-1423700-3079978.jpg";
import GodHeader from "../components/GodHeader";
const FeaturedStory = () => {
  return (
    <div className="py-16">
      {/* God-tier Title */}
      <GodHeader title="Featured Story" />

      <StorySection
        image={Hero}
        title="How Peter Went Back to Learning"
        description=" When schools shut down, Peter feared his dream of becoming a teacher
        was over. But with the help of community-led programs and your
        support, Peter found his way back to learning — and hope."
        buttonText="Read Peter's Full Story →"
        link="/stories/peter-story"
      />
    </div>
  );
};

export default FeaturedStory;
