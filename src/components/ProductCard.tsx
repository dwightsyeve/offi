import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-primary mb-1 font-medium tracking-wide uppercase">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-primary mt-2">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
