import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">About BaileyTonio</h1>
          <div className="h-1 w-24 bg-primary mb-12 rounded" />

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to BaileyTonio Drone Supply, your premier destination for cutting-edge drone technology
              and professional aerial equipment. Since our founding, we've been committed to providing
              enthusiasts and professionals with the highest quality drones, cameras, gimbals, and accessories.
            </p>

            <div className="bg-card border border-border rounded-lg p-8 my-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4 tracking-tight">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower creators, innovators, and professionals with state-of-the-art drone technology
                that pushes the boundaries of what's possible in aerial photography, videography, and beyond.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold text-foreground mt-12 mb-6 tracking-tight">Why Choose Us?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We source only the finest equipment from trusted manufacturers, ensuring reliability
                  and performance in every product.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our team of drone specialists is here to help you choose the right equipment and
                  provide ongoing technical support.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Get your gear quickly with our expedited shipping options and comprehensive
                  tracking system.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Warranty Protection</h3>
                <p className="text-muted-foreground">
                  All products come with manufacturer warranties and optional extended protection
                  plans for peace of mind.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 pt-12 border-t border-border">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Experience?</h2>
              <p className="text-muted-foreground mb-8">
                Explore our collection and discover the perfect drone solution for your needs.
              </p>
              <Button size="lg" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
