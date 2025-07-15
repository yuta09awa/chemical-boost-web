
import { Card } from "./ui/card";
import { Building2, Globe2, ShieldCheck, Lightbulb } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Quality Excellence",
      description: "Delivering superior optical products with precision manufacturing and rigorous quality control standards.",
    },
    {
      icon: Globe2,
      title: "Customer Focus",
      description: "Tailored solutions for lens manufacturers with responsive support and technical expertise.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Advancing optical technology through cutting-edge materials and coating solutions.",
    },
    {
      icon: ShieldCheck,
      title: "USA Manufacturing",
      description: "Local production and distribution ensuring fast delivery and superior service to US customers.",
    },
  ];

  return (
    <section className="py-24 section-primary" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MIKI SANGYO (USA) INC. - Precision Optical Solutions</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            As the USA subsidiary of Miki Sangyo Co., Ltd., we specialize in precision optical products for lens 
            manufacturing and coating processes. Building on our parent company's 350+ years of heritage, we provide 
            innovative solutions for the American optical industry.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We supply high-quality surface protection tapes, fixing pads, coating materials, and evaporation materials 
            to optical manufacturers across the United States, ensuring precision and reliability in every product.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-enhanced p-8 text-center group"
            >
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-12 h-12 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
