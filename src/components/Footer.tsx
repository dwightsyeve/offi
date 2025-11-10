import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 tracking-tight">
              <span className="text-primary">BAILEY</span>
              <span className="text-foreground">TONIO</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for cutting-edge drone technology and professional equipment.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Drones
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Cameras
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BaileyTonio Drone Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
