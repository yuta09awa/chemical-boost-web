
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getAllProducts } from "@/data/chemicals";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";

const categoryOptions = [
  "All Categories",
  "Acids",
  "Bases",
  "Inorganic",
  "Epoxy & Bismaleimide Resins",
  "Hardeners",
  "Monomers & Diamines",
];

const ProductList = () => {
  const allProducts = getAllProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.casNumber && product.casNumber.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = 
      selectedCategory === "All Categories" || product.category === selectedCategory;
      
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Chemical Products | ChemGlobal</title>
        <meta 
          name="description" 
          content="Browse our complete catalog of high-quality chemicals and specialty products for various industries and applications."
        />
      </Helmet>

      <Navbar />
      <Breadcrumbs items={[{ label: "Products", path: "/products" }]} />

      <div className="bg-gray-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Chemical Products</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Browse our extensive catalog of high-quality chemicals, specialty products, and materials 
            serving various industries and applications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg border p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="relative col-span-1 md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, CAS number, or description..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2 items-center">
              <Filter className="text-gray-500 h-4 w-4" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All Categories");}}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden border border-gray-200 h-full">
                <div className="relative">
                  {product.isFeatured && (
                    <Badge 
                      variant="default" 
                      className="absolute top-3 right-3 bg-primary"
                    >
                      Featured
                    </Badge>
                  )}
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
                  
                  {product.applications && (
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
                  )}
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
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductList;
