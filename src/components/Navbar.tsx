
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
  "Composite Monomers",
  "Functional Resins",
  "Adhesives and Sealants",
  "Paper",
  "Optical",
  "Pharma",
  "Fine Chemicals",
];

export const chemicals = [
  "Monomers",
  "HDI Polyisocyanates",
  "Polymers",
  "Activated Carbon",
  "Personal Care",
  "MicroSpheres",
  "Pigments",
  "Specialty",
  "Polyethylene Oxide",
  "Polycarbonatediols, Polyaspartics",
  "Solvents",
];

export const applications = [
  "Anti-hydrolysis",
  "Aerospace",
  "Optical Lenses",
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
              <NavigationMenuTrigger>Applications</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4">
                  {applications.map((item) => (
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
