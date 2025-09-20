import { TrendingUp, Award, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppCard from "./AppCard";

const topApps = [
  {
    id: "t1",
    name: "SAMOS Office",
    developer: "SAMOS Team",
    category: "Productivity",
    rating: 4.9,
    downloads: "500K+",
    price: 0,
    image: "",
  },
  {
    id: "t2",
    name: "Neural Network",
    developer: "AI Labs",
    category: "Developer Tools",
    rating: 4.8,
    downloads: "200K+",
    price: 49.99,
    image: "",
  },
  {
    id: "t3",
    name: "GameVerse",
    developer: "Epic Games",
    category: "Games",
    rating: 4.7,
    downloads: "1M+",
    price: 0,
    image: "",
  },
  {
    id: "t4",
    name: "VideoEdit Pro",
    developer: "MediaPro",
    category: "Graphics",
    rating: 4.6,
    downloads: "150K+",
    price: 39.99,
    image: "",
  },
];

const newApps = [
  {
    id: "n1",
    name: "CloudSync",
    developer: "DataFlow",
    category: "Productivity",
    rating: 4.5,
    downloads: "5K+",
    price: 0,
    image: "",
  },
  {
    id: "n2",
    name: "AR Designer",
    developer: "FutureTech",
    category: "Graphics",
    rating: 4.4,
    downloads: "2K+",
    price: 24.99,
    image: "",
  },
  {
    id: "n3",
    name: "MusicMaker",
    developer: "SoundLab",
    category: "Entertainment",
    rating: 4.6,
    downloads: "8K+",
    price: 19.99,
    image: "",
  },
  {
    id: "n4",
    name: "LearnFlow",
    developer: "EduTech",
    category: "Education",
    rating: 4.7,
    downloads: "12K+",
    price: 0,
    image: "",
  },
];

const TopChartsSection = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Charts & New Releases
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with trending apps and discover the latest additions to SAMOS
          </p>
        </div>

        <Tabs defaultValue="trending" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Trending</span>
            </TabsTrigger>
            <TabsTrigger value="new" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">New</span>
            </TabsTrigger>
            <TabsTrigger value="award" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Award</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {topApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="award">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[topApps[0], topApps[2], newApps[2], newApps[3]].map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TopChartsSection;