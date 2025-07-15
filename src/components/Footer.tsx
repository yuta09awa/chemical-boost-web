
import { Link } from "react-router-dom";
import { Globe, MapPin, Phone, Linkedin, Twitter, Youtube } from "lucide-react";
import { markets, chemicalCategories, rikiPads, marketCategories } from "@/components/Navbar";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white font-bold p-2 rounded mr-2">MS</div>
              <h3 className="text-lg font-semibold">Miki Sangyo Co., Ltd.</h3>
            </div>
            <p className="text-gray-600 mb-6">
              A leading global distributor of specialty chemicals and materials since 1961, providing innovative solutions for various industries with locations in Japan, USA, China, and India.
            </p>
            
            <div className="space-y-2">
              <h4 className="font-semibold">USA Headquarters</h4>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                <span>100 Corporate Drive, Suite 100, New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-500 mr-2" />
                <span>+1 (212) 555-1234</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <h4 className="font-semibold">Japan Headquarters</h4>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                <span>3-4-5 Nihonbashi-Honcho, Chuo-ku, Tokyo 103-0023, Japan</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-500 mr-2" />
                <span>+81 3-3279-1751</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Markets */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Markets</h3>
            <ul className="space-y-2">
              {Object.entries(marketCategories).slice(0, 3).map(([category, items]) => (
                <li key={category}>
                  <h4 className="text-gray-800 font-medium mb-2">{category}</h4>
                  <ul className="space-y-2 ml-2">
                    {items.slice(0, 2).map(market => (
                      <li key={market}>
                        <a href="#" className="text-gray-600 hover:text-primary text-sm">{market}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li><a href="#" className="text-gray-600 hover:text-primary">All Markets</a></li>
            </ul>
          </div>
          
          {/* Chemicals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Chemicals</h3>
            <ul className="space-y-2">
              {Object.entries(chemicalCategories).map(([category, items], index) => (
                index < 2 && (
                  <li key={category}>
                    <h4 className="text-gray-800 font-medium mb-2">{category}</h4>
                    <ul className="space-y-2 ml-2">
                      {items.slice(0, 2).map(chemical => (
                        <li key={chemical}>
                          <a href="#" className="text-gray-600 hover:text-primary text-sm">{chemical}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              ))}
              <li><a href="#" className="text-gray-600 hover:text-primary">All Chemicals</a></li>
            </ul>
          </div>
          
          {/* Riki Pads */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Riki Pads</h3>
            <ul className="space-y-2">
              {rikiPads.map((pad) => (
                <li key={pad}>
                  <a href="#" className="text-gray-600 hover:text-primary">{pad}</a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Language</h4>
              <div className="flex items-center border rounded p-2 w-40">
                <Globe className="w-4 h-4 text-gray-500 mr-2" />
                <select className="bg-transparent text-gray-600 focus:outline-none w-full">
                  <option value="en">English</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Miki Sangyo Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
