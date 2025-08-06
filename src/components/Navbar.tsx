
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";

export const markets = [
  "Automotive",
  "Electronics",
  "Pharmaceuticals",
  "Battery Materials",
  "Optical Materials",
  "Filter Media",
  "Special Paper Materials",
  "Paint and Coatings",
  "Devices and Machines",
];

// Organize chemicals into meaningful categories
export const chemicalCategories = {
  "Epoxy & Bismaleimide Resins": [
    "Epoxy Resin",
    "Polyimide",
    "Bismaleimide (BMI)",
    "4,4′-Diphenylmethane bismaleimide",
    "Phenylmethane maleimide",
    "m-Phenylene bismaleimide",
    "2,2-Bis[4-(4-maleimidophenoxy)phenyl]propane",
    "3,3′-Dimethyl-5,5′-diethyl-4,4′-diphenylmethane bismaleimide",
    "4-Methyl-1,3-phenylene bismaleimide",
    "1,6′-Bismaleimide-(2,2,4-trimethyl)hexane",
  ],
  "Hardeners": [
    "Bismaleimide Hardener",
    "DABPA",
    "Cationic Hardener",
  ],
  "Monomers & Diamines": [
    "6FDA",
    "s-BPDA",
    "a-BPDA",
    "3,4′-ODA",
    "ODPA",
    "BAPP",
    "MPDA",
    "PPDA",
  ],
};

// Flatten the chemicals for easy access in other components
export const chemicals = Object.values(chemicalCategories).flat();

export const marketCategories = {
  "Industrial Materials": [
    "Automotive",
    "Electronics",
    "Battery Materials",
  ],
  "Specialty Products": [
    "Optical Materials",
    "Filter Media",
    "Special Paper Materials",
  ],
  "Chemical Applications": [
    "Pharmaceuticals",
    "Paint and Coatings",
    "Devices and Machines",
  ],
};

export const opticalProducts = [
  "Masking Tape for Lens Polishing",
  "Anti Slip Sheet",
  "Coating Materials & Coating Liquid",
  "Evaporation Materials",
];

export const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary py-4">Miki Sangyo USA Inc.</div>
        
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] lg:w-[600px] grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                  {Object.entries(marketCategories).map(([category, items]) => (
                    <div key={category} className="col-span-1">
                      <h3 className="text-sm font-medium mb-2 text-primary">{category}</h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Chemicals</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] lg:w-[600px] grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                  {Object.entries(chemicalCategories).map(([category, items]) => (
                    <div key={category} className="col-span-1">
                      <h3 className="text-sm font-medium mb-2 text-primary">{category}</h3>
                      <ul className="space-y-1 max-h-60 overflow-y-auto">
                        {items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Optical Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] lg:w-[400px] gap-2 p-4">
                  {opticalProducts.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a
                href="#about"
                className="px-4 py-2 block text-sm hover:text-accent-foreground transition-colors"
              >
                About Us
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a
                href="#contact"
                className="px-4 py-2 block text-sm hover:text-accent-foreground transition-colors"
              >
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
