
import { Card } from "./ui/card";

const marketCategories = [
  {
    title: "Industrial Chemicals",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    description: "Solutions for manufacturing and industrial processes",
  },
  {
    title: "Pharmaceuticals",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80",
    description: "High-purity chemicals for pharmaceutical applications",
  },
  {
    title: "Specialty Chemicals",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80",
    description: "Custom solutions for specific applications",
  },
  {
    title: "Research & Development",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    description: "Materials for research and development",
  },
];

export const MarketCategories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Market Categories</h2>
          <p className="text-gray-600">
            Explore our comprehensive range of chemical solutions across various industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketCategories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
