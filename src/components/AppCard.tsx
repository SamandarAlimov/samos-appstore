import { Star, Download, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  app: {
    id: string;
    name: string;
    developer: string;
    category: string;
    rating: number;
    downloads: string;
    price: number;
    image: string;
    featured?: boolean;
  };
}

const AppCard = ({ app }: AppCardProps) => {
  const formatPrice = (price: number) => {
    return price === 0 ? "Free" : `$${price.toFixed(2)}`;
  };

  return (
    <Card className="app-card p-4 border-card-border bg-card">
      <div className="flex flex-col h-full">
        {/* App Icon */}
        <div className="relative mb-3">
          <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto shadow-md">
            <span className="text-white font-bold text-xl">
              {app.name.charAt(0)}
            </span>
          </div>
          {app.featured && (
            <Badge className="absolute -top-1 -right-1 bg-gradient-accent text-white border-0 text-xs">
              Featured
            </Badge>
          )}
        </div>

        {/* App Info */}
        <div className="flex-1 text-center">
          <h3 className="font-semibold text-card-foreground mb-1 truncate">
            {app.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 truncate">
            {app.developer}
          </p>
          
          {/* Category */}
          <Badge variant="secondary" className="mb-3 text-xs">
            {app.category}
          </Badge>
          
          {/* Rating and Downloads */}
          <div className="flex items-center justify-center gap-4 mb-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{app.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>{app.downloads}</span>
            </div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {app.price > 0 && <DollarSign className="h-3 w-3 text-muted-foreground" />}
            <span className="font-semibold text-sm text-foreground">
              {formatPrice(app.price)}
            </span>
          </div>
          <Button size="sm" className="bg-gradient-accent text-white border-0 hover:shadow-glow">
            Get
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AppCard;