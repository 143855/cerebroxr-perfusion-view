import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DownloadZipButton from "@/components/DownloadZipButton";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-4 right-4 z-50">
        <DownloadZipButton />
      </div>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Index;
