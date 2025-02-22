
import { Card } from "./ui/card";
import { Building2, Globe2, ShieldCheck, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Globe2,
      title: "Global Presence",
      description: "Operating in over 50 countries with reliable distribution networks.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      description: "ISO certified processes and stringent quality control measures.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified professionals with decades of industry experience.",
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "State-of-the-art warehousing and distribution centers.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-8">
            With over 25 years of experience in chemical distribution, we've built a reputation
            for reliability, quality, and exceptional service.
          </p>
          <p className="text-gray-600">
            Our commitment to sustainability and innovation drives us to constantly improve
            and deliver the best solutions for our clients worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
