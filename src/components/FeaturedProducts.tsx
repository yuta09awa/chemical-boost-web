
import { ChevronRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/chemicals";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4); // Display up to 4 products

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our selection of high-quality chemical products, trusted by laboratories and
            industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-gray-200 h-full">
              <div className="relative">
                <Badge 
                  variant="default" 
                  className="absolute top-3 right-3 bg-primary"
                >
                  Featured
                </Badge>
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain h-32 w-32"
                  />
                </div>
                <Badge
                  variant="outline"
                  className="absolute bottom-3 left-3 bg-white"
                >
                  {product.category}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                {product.formula && product.casNumber && (
                  <div className="text-sm text-gray-500 mt-1">
                    <span className="font-medium">{product.formula}</span> · CAS: {product.casNumber}
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {product.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.applications.slice(0, 3).map((app, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-normal">
                      {app}
                    </Badge>
                  ))}
                  {product.applications.length > 3 && (
                    <Badge variant="outline" className="text-xs font-normal">
                      +{product.applications.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/products/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/products" className="flex items-center gap-2">
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
