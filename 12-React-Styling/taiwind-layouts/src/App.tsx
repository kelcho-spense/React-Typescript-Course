import BlogGrid from "./components/BlogGrid";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ThreeColumnGrid from "./components/ThreeColumnGrid";
import TwoColumnLayout from "./components/TwoColumnLayout";

export default function App() {
  return (
    <>
       <Navbar />
    <TwoColumnLayout />
    <ThreeColumnGrid />
    <HeroSection />
    <BlogGrid />
    <Footer />
    </>
  )
}