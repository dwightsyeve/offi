import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-drone.jpg";
import racingDrone from "@/assets/drone-racing.jpg";
import gimbal from "@/assets/gimbal.jpg";
import camera from "@/assets/camera.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Professional Racing Drone X1",
      price: 1299.99,
      image: racingDrone,
      category: "Racing Drones",
    },
    {
      id: "2",
      name: "Cinema Pro Gimbal Stabilizer",
      price: 899.99,
      image: gimbal,
      category: "Gimbals",
    },
    {
      id: "3",
      name: "4K Ultra Camera System",
      price: 1599.99,
      image: camera,
      category: "Cameras",
    },
    {
      id: "4",
      name: "Advanced Racing Drone Pro",
      price: 1899.99,
      image: racingDrone,
      category: "Racing Drones",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero Drone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight tracking-tight">
              Elevate Your
              <span className="text-primary block">Flight Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium drones, cameras, and accessories for professionals and enthusiasts
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-heading font-bold text-center mb-12 tracking-tight">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Professional Drones", link: "/shop" },
            { name: "Cameras & Sensors", link: "/shop" },
            { name: "Gimbals", link: "/shop" },
            { name: "Accessories", link: "/shop" },
          ].map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary hover:shadow-glow transition-all duration-300 group"
            >
              <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 tracking-tight">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Discover our top-rated drone equipment</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-accent rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-primary-foreground tracking-tight">
            Ready to Take Flight?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 font-medium">
            Join thousands of satisfied customers worldwide
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
