import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import IntroSection from "../components/home/IntroSection";
import SolutionsSection from "../components/home/SolutionsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import AdvertisersSection from "../components/home/AdvertisersSection";
import PublishersSection from "../components/home/PublishersSection";
import VerticalsSection from "../components/home/VerticalsSection";
import PerformanceModelsSection from "../components/home/PerformanceModelsSection";
import WhyTdsSection from "../components/home/WhyTdsSection";
import InsightsSection from "../components/home/InsightsSection";
import FinalCtaSection from "../components/home/FinalCtaSection";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <IntroSection />
        <SolutionsSection />
        <HowItWorksSection />
        <AdvertisersSection />
        <PublishersSection />
        <VerticalsSection />
        <PerformanceModelsSection />
        <WhyTdsSection />
        <InsightsSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;