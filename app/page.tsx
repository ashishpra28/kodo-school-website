import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeStrip from "./components/MarqueeStrip";
import WhySection from "./components/WhySection";
import ComparisonSection from "./components/ComparisonSection";
import CoursesSection from "./components/CoursesSection";
import ContestSection from "./components/ContestSection";
import CommunitySection from "./components/CommunitySection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <WhySection />
        <ComparisonSection />
        <CoursesSection />
        <ContestSection />
        <CommunitySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
