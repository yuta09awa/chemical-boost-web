
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const markets = [
  "Composite Monomers",
  "Functional Resins",
  "Adhesives and Sealants",
  "Paper",
  "Optical",
  "Pharma",
  "Fine Chemicals",
];

const chemicals = [
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

const applications = [
  "Anti-hydrolysis",
  "Aerospace",
  "Optical Lenses",
];

export const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList>
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
