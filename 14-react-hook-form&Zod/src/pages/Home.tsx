import BlogGrid from "../components/BlogGrid";
import HeroSection from "../components/HeroSection";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import TwoColumnLayout from "../components/TwoColumnLayout";


export default  function Home() {
  return (
    <div>
      <TwoColumnLayout />
      <ThreeColumnGrid />
      <HeroSection />
      <BlogGrid />
    </div>
  )
}

