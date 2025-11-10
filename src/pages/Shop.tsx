import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import racingDrone from "@/assets/drone-racing.jpg";
import gimbal from "@/assets/gimbal.jpg";
import camera from "@/assets/camera.jpg";

const Shop = () => {
  const products = [
    { id: "1", name: "Professional Racing Drone X1", price: 1299.99, image: racingDrone, category: "Racing Drones" },
    { id: "2", name: "Cinema Pro Gimbal Stabilizer", price: 899.99, image: gimbal, category: "Gimbals" },
    { id: "3", name: "4K Ultra Camera System", price: 1599.99, image: camera, category: "Cameras" },
    { id: "4", name: "Advanced Racing Drone Pro", price: 1899.99, image: racingDrone, category: "Racing Drones" },
    { id: "5", name: "Smart Gimbal Pro", price: 1099.99, image: gimbal, category: "Gimbals" },
    { id: "6", name: "HD Action Camera", price: 799.99, image: camera, category: "Cameras" },
    { id: "7", name: "Enterprise Drone System", price: 2499.99, image: racingDrone, category: "Racing Drones" },
    { id: "8", name: "Professional Gimbal Elite", price: 1299.99, image: gimbal, category: "Gimbals" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold mb-2 tracking-tight">All Products</h1>
            <p className="text-muted-foreground text-lg">Explore our full range of professional drone equipment</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
