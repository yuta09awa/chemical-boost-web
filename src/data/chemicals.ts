
// Chemical product data model
export interface ChemicalProduct {
  id: string;
  name: string;
  formula?: string;
  casNumber?: string;
  category: string;
  description: string;
  applications: string[];
  isFeatured?: boolean;
  image?: string;
  synonyms?: string[];
  properties?: Record<string, string>;
}

// Sample featured products data
export const featuredProducts: ChemicalProduct[] = [
  {
    id: "sodium-hydroxide",
    name: "Sodium Hydroxide",
    formula: "NaOH",
    casNumber: "1310-73-2",
    category: "Bases",
    description: "Sodium hydroxide (NaOH), also known as caustic soda, is a highly versatile inorganic compound used in various industrial applications.",
    applications: ["pH adjustment", "Chemical manufacturing", "Paper production"],
    isFeatured: true,
    image: "/placeholder.svg"
  },
  {
    id: "hydrochloric-acid",
    name: "Hydrochloric Acid",
    formula: "HCl",
    casNumber: "7647-01-0",
    category: "Acids",
    description: "Hydrochloric acid (HCl) is a strong, highly corrosive acid with numerous industrial applications.",
    applications: ["pH adjustment", "Metal cleaning", "Oil well acidizing"],
    isFeatured: true,
    image: "/placeholder.svg"
  },
  {
    id: "sulfuric-acid",
    name: "Sulfuric Acid",
    formula: "H2SO4",
    casNumber: "7664-93-9",
    category: "Acids",
    description: "Sulfuric acid is one of the most widely used industrial chemicals globally. This strong mineral acid has numerous applications.",
    applications: ["Fertilizer production", "Mineral processing", "Chemical synthesis"],
    isFeatured: true,
    image: "/placeholder.svg"
  },
  {
    id: "hydrogen-peroxide",
    name: "Hydrogen Peroxide",
    formula: "H2O2",
    casNumber: "7722-84-1",
    category: "Inorganic",
    description: "Hydrogen peroxide is a powerful oxidizing agent used extensively in various industries due to its properties.",
    applications: ["Bleaching agent", "Disinfectant", "Water treatment"],
    isFeatured: true,
    image: "/placeholder.svg"
  },
  // Add a few more from our existing BMI products
  {
    id: "bismaleimide-bmi",
    name: "Bismaleimide (BMI)",
    category: "Epoxy & Bismaleimide Resins",
    description: "Bismaleimide resins are advanced thermoset polymers with exceptional thermal stability and mechanical properties.",
    applications: ["Aerospace composites", "Electronics", "High-performance materials"],
    isFeatured: true,
    image: "/placeholder.svg"
  },
  {
    id: "epoxy-resin",
    name: "Epoxy Resin",
    category: "Epoxy & Bismaleimide Resins",
    description: "Epoxy resins are versatile polymers known for their excellent adhesion, chemical resistance, and mechanical properties.",
    applications: ["Adhesives", "Coatings", "Composite materials"],
    isFeatured: true,
    image: "/placeholder.svg"
  }
];

// Generate a more comprehensive products list based on existing chemical categories
export const generateAllProducts = (): ChemicalProduct[] => {
  const allProducts: ChemicalProduct[] = [...featuredProducts];
  
  // Add products from our existing chemical data
  // This could be expanded with real data in a production environment
  return allProducts;
};

export const getAllProducts = (): ChemicalProduct[] => {
  return generateAllProducts();
};

export const getFeaturedProducts = (): ChemicalProduct[] => {
  return getAllProducts().filter(product => product.isFeatured);
};

export const getProductById = (id: string): ChemicalProduct | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (category: string): ChemicalProduct[] => {
  return getAllProducts().filter(product => product.category === category);
};
