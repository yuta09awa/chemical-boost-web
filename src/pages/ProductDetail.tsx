
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ArrowLeft, Beaker, Atom, FileCog, FileText, ShieldCheck, ArrowRightLeft } from "lucide-react";
import { getProductById } from "@/data/chemicals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <Beaker className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
              <p className="text-gray-600 mb-6">
                The product you are looking for does not exist or has been removed.
              </p>
              <Button asChild>
                <Link to="/products" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" /> Back to Products
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const requestSample = () => {
    toast({
      title: "Sample Requested",
      description: `We've received your request for a ${product.name} sample and will contact you shortly.`,
    });
  };

  const downloadSDS = () => {
    toast({
      title: "Safety Data Sheet",
      description: `The SDS for ${product.name} is being downloaded.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`${product.name} | Miki Sangyo Chemical Products`}</title>
        <meta
          name="description"
          content={`${product.description?.substring(0, 155)}...`}
        />
        <meta property="og:title" content={`${product.name} | Miki Sangyo Chemical Products`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        {product.casNumber && (
          <meta property="product:retailer_item_id" content={product.casNumber} />
        )}
      </Helmet>

      <Navbar />

      <div className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link
            to="/products"
            className="text-sm text-gray-500 hover:text-primary flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Products
          </Link>
          <span className="text-gray-400 text-sm">/</span>
          <span className="text-sm">{product.category}</span>
          <span className="text-gray-400 text-sm">/</span>
          <span className="text-sm text-gray-700 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg flex items-center justify-center p-8 mb-6">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="max-w-full max-h-64 object-contain"
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Request Information</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    onClick={requestSample}
                  >
                    <Beaker className="mr-2 h-4 w-4" />
                    Request Sample
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={downloadSDS}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Safety Data Sheet (SDS)
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <FileCog className="mr-2 h-4 w-4" />
                    Technical Data Sheet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl font-bold mr-3">{product.name}</h1>
                <Badge variant="outline" className="font-normal">
                  {product.category}
                </Badge>
              </div>

              {product.formula && product.casNumber && (
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Atom className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>Formula: </span>
                    <span className="font-medium ml-1">{product.formula}</span>
                  </div>
                  <div className="flex items-center">
                    <Beaker className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>CAS: </span>
                    <span className="font-medium ml-1">{product.casNumber}</span>
                  </div>
                </div>
              )}

              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="secondary">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {product.synonyms && product.synonyms.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-medium mb-3">Also Known As</h2>
                  <p className="text-gray-600">
                    {product.synonyms.join(", ")}
                  </p>
                </div>
              )}

              <Separator className="my-6" />

              {product.properties && Object.keys(product.properties).length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-medium mb-3">Properties</h2>
                  <div className="bg-gray-50 rounded-lg border p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(product.properties).map(([key, value], index) => (
                        <div key={index} className="flex">
                          <div className="text-gray-600 min-w-[40%]">{key}:</div>
                          <div className="font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 flex items-start">
                <ShieldCheck className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">Quality Assurance</h3>
                  <p className="text-blue-700 text-sm">
                    All our products undergo rigorous quality control testing to ensure consistency, 
                    purity, and performance according to international standards.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Related Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto py-4 px-4 justify-start" asChild>
                  <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="flex items-start">
                    <ArrowRightLeft className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-medium">Similar Products</div>
                      <div className="text-sm text-gray-500 mt-1">View more products in {product.category}</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto py-4 px-4 justify-start" asChild>
                  <Link to="/contact" className="flex items-start">
                    <ShieldCheck className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-medium">Technical Support</div>
                      <div className="text-sm text-gray-500 mt-1">Get expert assistance with this product</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
