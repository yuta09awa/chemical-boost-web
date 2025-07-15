
import { Card } from "./ui/card";
import { Building2, Globe2, ShieldCheck, Lightbulb } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control protocols ensure consistent product performance.",
    },
    {
      icon: Building2,
      title: "Safety First",
      description: "Commitment to safe handling, transportation, and application of all chemical products.",
    },
    {
      icon: Globe2,
      title: "Global Expertise",
      description: "International presence providing local knowledge with global standards.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous improvement and adaptation to meet evolving industry needs.",
    },
  ];

  return (
    <section className="py-24 section-primary" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Corporate Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Since our founding in 1961, Miki Sangyo Co., Ltd. has been a trusted global supplier of chemicals 
            and materials for various industries. With offices in Japan, USA, China, and India, we provide 
            consistent quality and service worldwide.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our company mission is to connect suppliers and customers through our global network, ensuring 
            the right products reach the right applications at the right time.
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
