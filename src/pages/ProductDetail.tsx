
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/chemicals";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Download, Flask, ListChecks, Share2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{product.name} | ChemGlobal</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <meta property="og:title" content={`${product.name} | ChemGlobal`} />
        <meta property="og:description" content={product.description.substring(0, 160)} />
        <meta property="og:type" content="product" />
        {product.casNumber && <meta property="product:cas_number" content={product.casNumber} />}
        {product.category && <meta property="product:category" content={product.category} />}
      </Helmet>

      <Navbar />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button variant="outline" size="sm" className="mb-6" asChild>
          <Link to="/products" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border p-6 flex items-center justify-center h-80">
              <img 
                src={product.image || "/placeholder.svg"} 
                alt={product.name} 
                className="max-h-52 max-w-full object-contain"
              />
            </div>

            <div className="mt-6">
              <Card className="p-4">
                <h3 className="font-medium text-gray-800 mb-3">Product Information</h3>
                <div className="space-y-3 text-sm">
                  {product.formula && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Formula:</span>
                      <span className="font-medium">{product.formula}</span>
                    </div>
                  )}
                  {product.casNumber && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">CAS Number:</span>
                      <span className="font-medium">{product.casNumber}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  {product.properties && Object.entries(product.properties).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-500">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-6">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 mb-3">
                <FileText className="w-4 h-4" />
                Download SDS
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Technical Data Sheet
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>{product.category}</Badge>
                {product.isFeatured && <Badge variant="secondary">Featured</Badge>}
              </div>

              <Separator className="my-6" />

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    
                    {product.synonyms && product.synonyms.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3">Alternative Names</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {product.synonyms.map((synonym, index) => (
                            <li key={index} className="text-gray-700">{synonym}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="applications">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-medium mb-3">Key Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {product.applications.map((application, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 border rounded-md">
                          <Flask className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">{application}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="specifications">
                  <div className="prose max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <ListChecks className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-medium">Technical Specifications</h3>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border text-center">
                      <p className="text-gray-500">
                        For detailed specifications and safety information, please download the technical data sheet or contact our sales team.
                      </p>
                      <div className="mt-4 flex justify-center">
                        <Button>Contact Sales</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
