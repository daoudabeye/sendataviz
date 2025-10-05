import React from "react";
import "./App.css";
import AdvancedMegaMenu from "./components/AdvancedMegaMenu";
import EnhancedHeroSection from "./components/EnhancedHeroSection";
import PremiumServicesSection from "./components/PremiumServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TeamSection from "./components/TeamSection";
import EnhancedContactSection from "./components/EnhancedContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AdvancedMegaMenu />
      <EnhancedHeroSection />
      <PremiumServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <TeamSection />
      <EnhancedContactSection />
      <Footer />
    </div>
  );
}

export default App;