
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
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Corporate Philosophy</h2>
          <p className="text-gray-600 mb-8">
            Since our founding in 1961, Miki Sangyo Co., Ltd. has been a trusted global supplier of chemicals 
            and materials for various industries. With offices in Japan, USA, China, and India, we provide 
            consistent quality and service worldwide.
          </p>
          <p className="text-gray-600">
            Our company mission is to connect suppliers and customers through our global network, ensuring 
            the right products reach the right applications at the right time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
