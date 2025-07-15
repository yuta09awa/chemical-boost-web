
import { Building, Globe, Package, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/75 -z-10" />
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://mikisangyo.co.jp/en/wp-content/themes/mikitheme/assets/images/history-back.jpg')",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-4">
            <span className="text-lg md:text-xl text-blue-200 font-medium tracking-wide">A Forest of Value</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Miki Sangyo Co., Ltd.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            Beyond 350 years of heritage, connecting global manufacturers and customers through our expertise in specialty chemicals and materials across Japan, USA, China, India, and Europe.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
              <a href="#services">Browse Products</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-3" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building, text: "Professionalism" },
              { icon: Globe, text: "Flexibility" },
              { icon: ShieldCheck, text: "Creativity" },
              { icon: Package, text: "350+ Years Heritage" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-white group">
                <div className="bg-white/10 p-3 rounded-full mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
