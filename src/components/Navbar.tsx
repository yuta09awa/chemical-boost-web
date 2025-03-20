
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

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

export const chemicals = [
  // Epoxy Resins & Bismaleimides
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
  
  // Hardeners
  "Bismaleimide Hardener",
  "DABPA",
  "Cationic Hardener",
  
  // Monomers
  "6FDA",
  "s-BPDA",
  "a-BPDA",
  "3,4′-ODA",
  "ODPA",
  "BAPP",
  "MPDA",
  "PPDA",
];

export const rikiPads = [
  "Masking Tape for Lens Polishing (Rikipad)",
  "Anti Slip Sheet (Rikipad)",
  "Coating Materials & Coating Liquid",
  "Evaporation Materials",
];

export const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary py-4">ChemGlobal</div>
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4">
                  {markets.map((item) => (
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
              <NavigationMenuTrigger>Chemicals</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4">
                  {chemicals.map((item) => (
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
              <NavigationMenuTrigger>Riki Pads</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4">
                  {rikiPads.map((item) => (
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
