import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What types of chemicals do you distribute?",
    answer: "We distribute a wide range of specialty chemicals including industrial chemicals, pharmaceuticals, epoxy resins, hardeners, monomers, and various specialty compounds for multiple industries."
  },
  {
    question: "Do you provide technical support for your products?",
    answer: "Yes, we offer comprehensive technical support including product specifications, application guidance, safety data sheets, and technical consulting services from our experienced team."
  },
  {
    question: "What are your minimum order quantities?",
    answer: "Minimum order quantities vary by product. Please contact our sales team for specific MOQ requirements and pricing information for your desired chemicals."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship globally with facilities in Japan, USA, China, and India. We handle all necessary documentation and comply with international shipping regulations for chemical products."
  },
  {
    question: "How can I request a sample or quote?",
    answer: "You can request samples and quotes through our contact form, by calling our sales team directly, or by emailing us with your specific requirements and application details."
  },
  {
    question: "What quality certifications do you maintain?",
    answer: "We maintain ISO 9001 quality management standards and work with certified suppliers. All products come with certificates of analysis and meet industry-specific quality requirements."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our chemical distribution services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};