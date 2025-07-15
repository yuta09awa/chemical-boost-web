
import { Link } from "react-router-dom";
import { Globe, MapPin, Phone, Linkedin, Twitter, Youtube } from "lucide-react";
import { markets, chemicalCategories, opticalProducts, marketCategories } from "@/components/Navbar";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white font-bold p-2 rounded mr-3">MS</div>
              <h3 className="text-lg font-semibold">Miki Sangyo Co., Ltd.</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              A leading global distributor of specialty chemicals and materials since 1961, providing innovative solutions for various industries with locations in Japan, USA, China, and India.
            </p>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-sm">USA Headquarters</h4>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">400 Interpace Pkwy, Parsippany, NJ 07054</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(973) 263-4111</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-sm">Japan Headquarters</h4>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">3-4-5 Nihonbashi-Honcho, Chuo-ku, Tokyo 103-0023, Japan</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+81 3-3279-1751</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Markets */}
          <div>
            <h3 className="text-base font-semibold mb-4">Markets</h3>
            <ul className="space-y-2.5">
              {Object.entries(marketCategories).slice(0, 3).map(([category, items]) => (
                <li key={category}>
                  <h4 className="text-foreground font-medium mb-2 text-sm">{category}</h4>
                  <ul className="space-y-1.5 ml-2">
                    {items.slice(0, 2).map(market => (
                      <li key={market}>
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                          {market}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200">
                  All Markets
                </a>
              </li>
            </ul>
          </div>
          
          {/* Chemicals */}
          <div>
            <h3 className="text-base font-semibold mb-4">Chemicals</h3>
            <ul className="space-y-2.5">
              {Object.entries(chemicalCategories).map(([category, items], index) => (
                index < 2 && (
                  <li key={category}>
                    <h4 className="text-foreground font-medium mb-2 text-sm">{category}</h4>
                    <ul className="space-y-1.5 ml-2">
                      {items.slice(0, 2).map(chemical => (
                        <li key={chemical}>
                          <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                            {chemical}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              ))}
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200">
                  All Chemicals
                </a>
              </li>
            </ul>
          </div>
          
          {/* Optical Products */}
          <div>
            <h3 className="text-base font-semibold mb-4">Optical Products</h3>
            <ul className="space-y-2">
              {opticalProducts.map((product) => (
                <li key={product}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-sm">Language</h4>
              <div className="flex items-center border border-border rounded p-2 w-36">
                <Globe className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                <select className="bg-transparent text-muted-foreground focus:outline-none w-full text-sm">
                  <option value="en">English</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Miki Sangyo Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
