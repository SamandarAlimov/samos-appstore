import { ArrowLeft, Star, Download, Share, Heart, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppDetail = () => {
  const app = {
    name: "SAMOS Tasks Pro",
    developer: "SAMOS Team",
    category: "Productivity",
    rating: 4.8,
    downloads: "100K+",
    price: 0,
    version: "2.1.4",
    size: "24.5 MB",
    updated: "Dec 15, 2024",
    description: "The ultimate task management app designed specifically for the SAMOS ecosystem. Organize your projects, track deadlines, and collaborate seamlessly with your team. Features advanced AI-powered insights and deep integration with SAMOS services.",
    features: [
      "Smart task prioritization with AI",
      "Real-time team collaboration",
      "Advanced project analytics",
      "Cross-platform synchronization",
      "Offline mode support",
      "Custom workflow automation"
    ],
    screenshots: [1, 2, 3, 4, 5], // Placeholder for screenshot numbers
    permissions: [
      "Access to calendar",
      "Network access",
      "File storage access"
    ]
  };

  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      date: "Dec 10, 2024",
      text: "This app has completely transformed how I manage my projects. The AI suggestions are incredibly helpful!"
    },
    {
      id: 2,
      user: "John D.",
      rating: 4,
      date: "Dec 8, 2024",
      text: "Great app overall. Love the clean interface and smooth performance. Looking forward to more features."
    },
    {
      id: 3,
      user: "Maria L.",
      rating: 5,
      date: "Dec 5, 2024",
      text: "Perfect integration with SAMOS ecosystem. Syncs beautifully across all my devices."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 -ml-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* App Header */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{app.name}</h1>
                    <p className="text-muted-foreground text-lg">{app.developer}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{app.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{app.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{app.downloads}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button className="bg-gradient-accent text-white px-8 py-3">
                    <Download className="h-4 w-4 mr-2" />
                    Install
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{app.price === 0 ? "Free" : `$${app.price}`}</p>
                    <p>In-app purchases</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {app.screenshots.map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 h-80 rounded-lg bg-gradient-to-br from-muted to-background-secondary border border-card-border flex items-center justify-center"
                  >
                    <span className="text-muted-foreground">Screenshot {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About this app</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{app.description}</p>
              
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {app.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* App Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">App Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span>{app.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span>{app.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Updated</span>
                  <span>{app.updated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Downloads</span>
                  <span>{app.downloads}</span>
                </div>
              </div>
            </Card>

            {/* Permissions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Permissions
              </h3>
              <ul className="space-y-2 text-sm">
                {app.permissions.map((permission, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {permission}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Safety */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="h-4 w-4" />
                Safety & Security
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Verified Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Malware Scanned</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Privacy Compliant</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppDetail;