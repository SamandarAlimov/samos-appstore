import { Github, Twitter, Mail, Shield, Book, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-samos-blue text-white">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">SAMOS App Store</span>
                <span className="text-sm text-white/70">Discover, Download, Create</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The official marketplace for SAMOS applications. Join millions of users discovering 
              amazing apps, games, and tools built for the SAMOS ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-samos-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-samos-teal transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-samos-teal transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-samos-teal transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-samos-teal transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-samos-teal transition-colors">Top Charts</a></li>
              <li><a href="#" className="hover:text-samos-teal transition-colors">New Releases</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold mb-4">For Developers</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-samos-teal transition-colors">
                  <Book className="h-4 w-4" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-samos-teal transition-colors">
                  <Users className="h-4 w-4" />
                  Developer Console
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-samos-teal transition-colors">
                  <Shield className="h-4 w-4" />
                  App Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2024 SAMOS App Store. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-samos-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-samos-teal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-samos-teal transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;