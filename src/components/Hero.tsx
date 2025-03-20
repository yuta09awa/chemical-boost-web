
import { Building, Globe, Package, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 -z-10" />
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80')",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Miki Sangyo Co., Ltd.
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            A leading global distributor of specialty chemicals and materials since 1961, providing innovative solutions for various industries with locations in Japan, USA, China, and India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#services">Browse Products</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Globe, text: "Global Reach" },
              { icon: Package, text: "Quality Products" },
              { icon: ShieldCheck, text: "Safety First" },
              { icon: Building, text: "Industry Expertise" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-white">
                <item.icon className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
