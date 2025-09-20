import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedAppsSection from "@/components/FeaturedAppsSection";
import TopChartsSection from "@/components/TopChartsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedAppsSection />
        <TopChartsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
