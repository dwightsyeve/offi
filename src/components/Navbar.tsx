import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-heading font-bold tracking-tight">
              <span className="text-primary">BAILEY</span>
              <span className="text-foreground">TONIO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              DRONES
            </Link>
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              CAMERAS & SENSORS
            </Link>
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              GIMBALS
            </Link>
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              ACCESSORIES
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              CONTACT
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Link
              to="/shop"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Drones
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cameras & Sensors
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gimbals
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
