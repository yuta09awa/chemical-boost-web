
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Comprehensive chemical distribution services tailored to your industry needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
