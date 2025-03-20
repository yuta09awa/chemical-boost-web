
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
      "name": "Miki Sangyo",
      "url": "https://mikisangyo.co.jp/en/",
      "logo": "https://mikisangyo.co.jp/en/wp-content/themes/mikitheme/assets/images/logo.png",
      "description": "Global leader in chemical distribution with 350 years of history.",
      "foundingDate": "1673",
      "founder": {
        "@type": "Person",
        "name": "Miki Family"
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
        alt="Miki Sangyo Company History spanning 350 years"
        className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center py-16">
        <div className="max-w-3xl">
          <span className="text-primary-foreground text-sm font-medium uppercase tracking-wider mb-2 inline-block">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            350 years of history and innovation
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Established in the Miki region of Japan during the Edo period, Miki Sangyo has evolved from traditional manufacturing to a global leader in chemical distribution, preserving our heritage while embracing the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 group"
              asChild
            >
              <a href="https://mikisangyo.co.jp/en/brand/history/" target="_blank" rel="noopener noreferrer" aria-label="Read more about Miki Sangyo's 350 year history">
                Explore Our History
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
