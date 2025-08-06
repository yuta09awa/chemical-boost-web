
import { Card } from "./ui/card";

const services = [
  {
    title: "Industrial Chemicals",
    description: "High-quality chemicals for industrial applications and manufacturing processes.",
  },
  {
    title: "Laboratory Supplies",
    description: "Premium laboratory chemicals and reagents for research and analysis.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored chemical solutions to meet your specific requirements.",
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance and consultation for your chemical needs.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 section-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive chemical supply services tailored to your industry needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-enhanced p-8 group cursor-pointer"
            >
              <div className="h-2 bg-primary rounded-full mb-6 w-12 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
