
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export const History = () => {
  useEffect(() => {
    // Add JSON-LD structured data for Organization and rich results
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Miki Sangyo Co., Ltd.",
      "url": "https://mikisangyo.co.jp/en/",
      "logo": "https://mikisangyo.co.jp/en/wp-content/themes/mikitheme/assets/images/logo.png",
      "description": "A leading global distributor of specialty chemicals and materials since 1961.",
      "foundingDate": "1961",
      "founder": {
        "@type": "Person",
        "name": "Miki Sangyo Co., Ltd."
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3-4-5 Nihonbashi-Honcho, Chuo-ku",
        "addressLocality": "Tokyo",
        "postalCode": "103-0023",
        "addressCountry": "Japan"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+81 3-3279-1751",
        "contactType": "customer service"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-[60vh] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
      <img
        src="https://mikisangyo.co.jp/en/wp-content/themes/mikitheme/assets/images/history-back.jpg"
        alt="Miki Sangyo Global Chemical Distribution"
        className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center py-16">
        <div className="max-w-3xl">
          <span className="text-primary-foreground text-sm font-medium uppercase tracking-wider mb-2 inline-block">Global Reach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global Expertise in Chemical Supply
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            With offices in Japan, USA, China, and India, Miki Sangyo provides consistent quality and service worldwide since 1961, connecting suppliers and customers through our global network.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 group"
              asChild
            >
              <a href="#contact" aria-label="Partner with Miki Sangyo for your chemical supply needs">
                Partner with Us
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black group"
              asChild
            >
              <a 
                href="https://mikisangyo.co.jp/en/brand/history/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Learn about Miki Sangyo's company history"
              >
                See Our History
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
