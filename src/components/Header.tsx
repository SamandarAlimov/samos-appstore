import { Search, User, Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-samos-blue">SAMOS</span>
            <span className="text-xs text-muted-foreground -mt-1">App Store</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Categories
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Top Apps
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Developers
          </a>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search apps, games, and more..."
              className="pl-10 pr-4 bg-background-secondary border-card-border focus:search-focus"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <ShoppingBag className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;