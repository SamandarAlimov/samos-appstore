import { Download, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-samos-blue/90 via-samos-blue/70 to-samos-cyan/80" />
      
      {/* Content */}
      <div className="relative z-10 container px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Amazing
            <span className="bg-gradient-to-r from-samos-teal to-accent-secondary bg-clip-text text-transparent block">
              SAMOS Apps
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            The ultimate destination for productivity, entertainment, and innovation. 
            Download the best apps tailored for the SAMOS ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-hero text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Explore Apps
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <TrendingUp className="mr-2 h-5 w-5" />
              Top Charts
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-samos-teal" />
              <span className="font-medium">10K+ Apps</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-samos-teal" />
              <span className="font-medium">1M+ Downloads</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-samos-teal" />
              <span className="font-medium">Trusted Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;