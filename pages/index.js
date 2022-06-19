import styles from "../styles/Home.module.css";
import Nav from "../components/Nav.jsx";
import HeroSection from "../components/HeroSection.jsx";
import WhyUsSection from "../components/WhyUsSection.jsx";
import PlatformSection from "../components/PlatformSection";
import BelieveSection from "../components/BelieveSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <WhyUsSection />
      <PlatformSection />
      <BelieveSection />
    </>
  );
}
