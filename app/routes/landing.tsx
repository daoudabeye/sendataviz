import React from "react";
import AdvancedMegaMenu from "../components/landing/AdvancedMegaMenu";
import EnhancedHeroSection from "../components/landing/EnhancedHeroSection";
import Footer from "../components/landing/Footer";
import PremiumServicesSection from "../components/landing/PremiumServicesSection";
import SolutionsSection from "../components/landing/SolutionsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import TeamSection from "../components/landing/TeamSection";
import EnhancedContactSection from "../components/landing/EnhancedContactSection";

export default function Landing() {
  return (
    <main>
      <AdvancedMegaMenu />
      <EnhancedHeroSection />
      <PremiumServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <TeamSection />
      <EnhancedContactSection />
      <Footer />
    </main>
  );
}
