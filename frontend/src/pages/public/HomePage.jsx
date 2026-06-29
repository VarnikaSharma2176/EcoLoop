import PublicLayout from "../../components/layout/PublicLayout";
import HeroSection from "../../components/home/HeroSection";
import StatsSection from "../../components/home/StatsSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import SDGSection from "../../components/home/SDGSection";
import CTASection from "../../components/home/CTASection";

function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SDGSection />
      <CTASection />
    </PublicLayout>
  );
}

export default HomePage;