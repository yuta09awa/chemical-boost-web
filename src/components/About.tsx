
import { Card } from "./ui/card";
import { Building2, Globe2, ShieldCheck, Lightbulb } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Professionalism",
      description: "Establishing trust through our accumulated knowledge and expertise built over more than 350 years.",
    },
    {
      icon: Globe2,
      title: "Flexibility",
      description: "Responding to diverse customer needs with our global network and adaptable business approach.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Creating new value through innovative thinking and challenging conventional business models.",
    },
    {
      icon: ShieldCheck,
      title: "Sustainable Future",
      description: "Contributing to environmental and social sustainability for future generations.",
    },
  ];

  return (
    <section className="py-24 section-primary" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond 350 - Our Management Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Founded in Enpo 2 (1674), Miki Sangyo has built trust through more than 350 years of business excellence. 
            Our management philosophy centers on "discipline and order," ensuring steady growth while adapting to 
            changing times and customer needs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We connect global manufacturers and customers through our expertise, creating value that contributes 
            to a sustainable future society. Our three core strengths guide every aspect of our business.
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
