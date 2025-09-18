import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RequirementsSection from "@/components/RequirementsSection";
import MetricsSection from "@/components/MetricsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIsSection />
      <ProblemsSection />
      <HowItWorksSection />
      <RequirementsSection />
      <MetricsSection />
    </div>
  );
};

export default Index;
