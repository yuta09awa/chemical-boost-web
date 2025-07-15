import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye, Shield, Sparkles, Layers } from "lucide-react";

const opticalProductsData = [
  {
    id: 1,
    name: "Masking Tape for Lens Polishing (Rikipad)",
    description: "Specialized masking tapes designed for precision lens polishing processes, ensuring optimal surface protection during manufacturing.",
    icon: Shield,
    applications: ["Lens Manufacturing", "Surface Protection", "Precision Polishing"],
    features: ["High adhesion", "Clean removal", "Precise cutting"]
  },
  {
    id: 2,
    name: "Anti Slip Sheet (Rikipad)",
    description: "Advanced anti-slip sheets that provide secure positioning and stability during lens cutting and processing operations.",
    icon: Layers,
    applications: ["Lens Cutting", "Secure Positioning", "Process Stability"],
    features: ["Non-slip surface", "Reusable design", "Chemical resistant"]
  },
  {
    id: 3,
    name: "Coating Materials & Coating Liquid",
    description: "Premium coating materials and liquids for creating protective and functional layers on optical components and lenses.",
    icon: Sparkles,
    applications: ["Anti-reflective coating", "Protective layers", "Optical enhancement"],
    features: ["Uniform application", "High durability", "Optical clarity"]
  },
  {
    id: 4,
    name: "Evaporation Materials",
    description: "High-purity evaporation materials for thin film deposition and coating applications in optical component manufacturing.",
    icon: Eye,
    applications: ["Thin film deposition", "Vapor coating", "Precision optics"],
    features: ["High purity", "Consistent quality", "Controlled deposition"]
  }
];

export const OpticalProducts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-section-bg to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Optical Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We sell surface protection tapes and fixing pads used in the cutting process of eyeglass lenses. 
            We also sell lens coating materials and materials for precision optical manufacturing.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Made in USA Quality
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {opticalProductsData.map((product) => (
            <Card key={product.id} className="card-enhanced hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="#contact">Request Product Information</a>
          </Button>
        </div>
      </div>
    </section>
  );
};