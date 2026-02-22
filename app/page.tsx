import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import AboutSection from "./components/AboutSection";
import SkillMatrix from "./components/SkillMatrix";
import FeaturedWork from "./components/FeaturedWork";
import HowIThink from "./components/HowIThink";
import CallToAction from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <AboutSection/>
      <SkillMatrix/>
      <FeaturedWork/>
      <HowIThink/>
      <CallToAction/>
      <Footer/>
    </>
  );
}