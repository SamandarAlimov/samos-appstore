import { 
  Gamepad2, 
  Briefcase, 
  GraduationCap, 
  Music, 
  Image, 
  Code, 
  Heart, 
  ShoppingCart 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Games", icon: Gamepad2, color: "from-red-500 to-pink-500", count: "2.5K+" },
  { name: "Productivity", icon: Briefcase, color: "from-blue-500 to-cyan-500", count: "1.8K+" },
  { name: "Education", icon: GraduationCap, color: "from-green-500 to-emerald-500", count: "1.2K+" },
  { name: "Entertainment", icon: Music, color: "from-purple-500 to-violet-500", count: "950+" },
  { name: "Graphics", icon: Image, color: "from-orange-500 to-amber-500", count: "780+" },
  { name: "Developer Tools", icon: Code, color: "from-indigo-500 to-blue-500", count: "650+" },
  { name: "Health & Fitness", icon: Heart, color: "from-rose-500 to-red-500", count: "420+" },
  { name: "Shopping", icon: ShoppingCart, color: "from-teal-500 to-cyan-500", count: "320+" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover apps organized by your interests and needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="category-hover p-6 text-center cursor-pointer border-card-border bg-card"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} apps
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;