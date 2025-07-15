import { Card } from "./ui/card";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";

export const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Committed to reducing environmental impact through sustainable chemical distribution practices and eco-friendly solutions.",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Promoting resource efficiency and waste reduction by supporting circular business models in chemical industries.",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Contributing to society through responsible business practices and supporting community development initiatives.",
    },
    {
      icon: Globe,
      title: "Global Sustainability",
      description: "Working with international partners to address global challenges and create a sustainable future for all.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background" id="sustainability">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Building a Sustainable Future</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Miki Sangyo, we believe in creating value that goes beyond business success. Our commitment 
            to environmental and social responsibility shapes how we operate globally.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through our "A Forest of Value" philosophy, we cultivate sustainable practices that benefit 
            both our customers and the communities we serve worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="card-enhanced p-8 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors duration-300">
                <initiative.icon className="w-12 h-12 mx-auto text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {initiative.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};