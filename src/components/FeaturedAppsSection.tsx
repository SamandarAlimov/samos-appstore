import AppCard from "./AppCard";

const featuredApps = [
  {
    id: "1",
    name: "SAMOS Tasks",
    developer: "SAMOS Team",
    category: "Productivity",
    rating: 4.8,
    downloads: "100K+",
    price: 0,
    image: "",
    featured: true,
  },
  {
    id: "2",
    name: "CodeForge Pro",
    developer: "DevStudio",
    category: "Developer Tools",
    rating: 4.7,
    downloads: "50K+",
    price: 29.99,
    image: "",
  },
  {
    id: "3",
    name: "PixelCraft",
    developer: "ArtLabs",
    category: "Graphics",
    rating: 4.9,
    downloads: "80K+",
    price: 19.99,
    image: "",
    featured: true,
  },
  {
    id: "4",
    name: "MindMap Studio",
    developer: "ThinkSoft",
    category: "Education",
    rating: 4.6,
    downloads: "35K+",
    price: 0,
    image: "",
  },
  {
    id: "5",
    name: "StreamFlow",
    developer: "MediaCorp",
    category: "Entertainment",
    rating: 4.5,
    downloads: "120K+",
    price: 9.99,
    image: "",
  },
  {
    id: "6",
    name: "FitTracker Pro",
    developer: "HealthTech",
    category: "Health & Fitness",
    rating: 4.8,
    downloads: "90K+",
    price: 14.99,
    image: "",
  },
];

const FeaturedAppsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Apps
            </h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked applications for the best SAMOS experience
            </p>
          </div>
          <button className="text-accent hover:text-accent-secondary font-medium transition-colors hidden sm:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <button className="text-accent hover:text-accent-secondary font-medium transition-colors">
            View All Featured Apps →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAppsSection;