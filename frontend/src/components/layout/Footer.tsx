
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">AgroSphere</h3>
            <p className="text-muted-foreground">
              Your digital companion for smart, sustainable farming. Empowering farmers with AI, data, and community.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'AgriMart', path: '/agrimart' },
                { name: 'GovConnect', path: '/govconnect' },
                { name: 'Community', path: '/community' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Features</h3>
            <ul className="space-y-2">
              {[
                { name: 'AI Crop Analysis', path: '/dashboard' },
                { name: 'Disease Detection', path: '/dashboard' },
                { name: 'Yield Prediction', path: '/dashboard' },
                { name: 'Marketplace', path: '/agrimart' },
                { name: 'Govt Schemes', path: '/govconnect' },
                { name: 'Farmer Forum', path: '/community' },
              ].map((feature, index) => (
                <li key={index}>
                  <Link 
                    to={feature.path}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {feature.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  123 Agri Tower, Green Avenue, Farm City - 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary" />
                <a href="mailto:info@agrosphere.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@agrosphere.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {year} AgroSphere. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
