import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import ContentSection from "./components/landing/ContentSection";
import TestimonialSection from "./components/landing/TestimonialSection";
import PricingSection from "./components/landing/PricingSection";
import Footer from "./components/landing/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="text-gray-800 bg-white dark:bg-gray-950 dark:text-white">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
