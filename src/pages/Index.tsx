
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UserDashboardSection from "@/components/UserDashboardSection";
import CommissionSection from "@/components/CommissionSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { initGsapAnimations } from "@/utils/gsapUtils";

const LandingPage = () => {
  useEffect(() => {
    // Initialize all GSAP animations
    initGsapAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Aurora background effects for the entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background -z-50"></div>
      <div className="fixed top-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-primary/10 to-transparent opacity-50 blur-3xl -z-40"></div>
      <div className="fixed bottom-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-accent/10 to-transparent opacity-40 blur-3xl -z-40"></div>
      
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <UserDashboardSection />
      <TestimonialsSection />
      <CommissionSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
