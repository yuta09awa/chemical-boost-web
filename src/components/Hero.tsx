
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-3 sm:mb-4">
            <span className="text-base sm:text-lg md:text-xl text-blue-200 font-medium tracking-wide">A Forest of Value</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Miki Sangyo Co., Ltd.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
            Beyond 350 years of heritage, connecting global manufacturers and customers through our expertise in specialty chemicals and materials across Japan, USA, China, India, and Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
              <a href="#services">Browse Products</a>
            </Button>
            <Button size="lg" variant="outline-white" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Building, text: "Professionalism" },
              { icon: Globe, text: "Flexibility" },
              { icon: ShieldCheck, text: "Creativity" },
              { icon: Package, text: "350+ Years Heritage" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-white group">
                <div className="bg-white/10 p-2 sm:p-3 rounded-full mb-2 sm:mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-center leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
