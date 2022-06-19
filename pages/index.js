import styles from "../styles/Home.module.css";
import Nav from "../components/Nav.jsx";
import HeroSection from "../components/HeroSection.jsx";
import WhyUsSection from "../components/WhyUsSection.jsx";
import PlatformSection from "../components/PlatformSection";
import BelieveSection from "../components/BelieveSection";
import CountrySection from "../components/CountrySection";
import ClientsaySection from "../components/ClientSaySection";
import PartnerSection from "../components/PartnerSection";
import PriceSection from "../components/PriceSection";
import SubcriptionSection from "../components/SubcriptionSection";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <WhyUsSection />
      <PlatformSection />
      <BelieveSection />
      <CountrySection />
      <ClientsaySection />
      <PartnerSection />
      <PriceSection />
      <SubcriptionSection />
      <Footer />
    </>
  );
}
