import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import racingDrone from "@/assets/drone-racing.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={racingDrone}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">RACING DRONES</p>
            <h1 className="text-4xl font-heading font-bold mb-4 tracking-tight">Professional Racing Drone X1</h1>
            <p className="text-3xl font-bold text-primary mb-6">$1,299.99</p>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground">
                Experience unparalleled performance with the Professional Racing Drone X1. 
                Built for speed, agility, and precision, this cutting-edge drone is perfect 
                for competitive racing and advanced aerial maneuvers.
              </p>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 4K Ultra HD Camera with 60fps</li>
                  <li>• Max Speed: 140 km/h</li>
                  <li>• Flight Time: 25 minutes</li>
                  <li>• Advanced GPS Navigation</li>
                  <li>• Obstacle Avoidance System</li>
                  <li>• Remote Control Range: 8km</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button size="lg" className="flex-1" onClick={() => navigate('/cart')}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-4">Product Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">SKU:</span> DRONE-X1-{id}</p>
                <p><span className="font-semibold text-foreground">Warranty:</span> 2 Years Manufacturer Warranty</p>
                <p><span className="font-semibold text-foreground">Shipping:</span> Free shipping on orders over $100</p>
                <p><span className="font-semibold text-foreground">Returns:</span> 30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
