import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { marketCategories, chemicalCategories, opticalProducts } from "./Navbar";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="md:hidden">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2">
            <Menu className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <DrawerHeader className="border-b">
            <DrawerTitle className="text-left">Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Markets Section */}
            <Collapsible 
              open={openSections.markets} 
              onOpenChange={() => toggleSection('markets')}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left border rounded-md hover:bg-accent">
                <span className="font-medium">Markets</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections.markets ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {Object.entries(marketCategories).map(([category, items]) => (
                  <div key={category} className="pl-4">
                    <h4 className="font-medium text-primary mb-2">{category}</h4>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 px-3 text-sm rounded hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Chemicals Section */}
            <Collapsible 
              open={openSections.chemicals} 
              onOpenChange={() => toggleSection('chemicals')}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left border rounded-md hover:bg-accent">
                <span className="font-medium">Chemicals</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections.chemicals ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {Object.entries(chemicalCategories).map(([category, items]) => (
                  <div key={category} className="pl-4">
                    <h4 className="font-medium text-primary mb-2">{category}</h4>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 px-3 text-sm rounded hover:bg-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Optical Products Section */}
            <Collapsible 
              open={openSections.optical} 
              onOpenChange={() => toggleSection('optical')}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left border rounded-md hover:bg-accent">
                <span className="font-medium">Optical Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openSections.optical ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 mt-2">
                {opticalProducts.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-2 px-3 text-sm rounded hover:bg-accent ml-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Direct Links */}
            <div className="space-y-2 pt-4 border-t">
              <a
                href="#about"
                className="block py-3 px-3 text-center border rounded-md hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block py-3 px-3 text-center border rounded-md hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};