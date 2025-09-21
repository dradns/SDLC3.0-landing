import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RequirementsSection from "@/components/RequirementsSection";
import MetricsSection from "@/components/MetricsSection";
import SDLCDiagram from "@/components/SDLCDiagram";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AIApplicationsSection from "@/components/AIApplicationsSection";
import AnalyticsAISection from "@/components/AnalyticsAISection";
import TrainingSection from "@/components/TrainingSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIsSection />
      <ProblemsSection />
      <HowItWorksSection />
      <SDLCDiagram />
      <RequirementsSection />
      <BeforeAfterSlider />
      <MetricsSection />
      <AIApplicationsSection />
      <AnalyticsAISection />
      <TrainingSection />
      <CasesSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Index;
