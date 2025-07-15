import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hiroshi Tanaka",
    company: "Toyota Motor Corporation",
    role: "Senior Procurement Manager",
    content: "Miki Sangyo has been our trusted chemical supplier for over 15 years. Their consistent quality and reliable delivery have made them an essential partner in our manufacturing operations.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    company: "Pfizer Inc.",
    role: "Supply Chain Director",
    content: "The technical expertise and regulatory compliance support provided by Miki Sangyo is exceptional. They understand the pharmaceutical industry's stringent requirements.",
    rating: 5
  },
  {
    name: "Chen Wei",
    company: "BASF China",
    role: "Regional Manager",
    content: "Working with Miki Sangyo has streamlined our specialty chemical sourcing across Asia. Their multi-location presence ensures consistent supply and local support.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Trusted by leading companies worldwide for our quality products and exceptional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
              <Quote className="w-8 h-8 text-primary opacity-20 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm font-medium text-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};