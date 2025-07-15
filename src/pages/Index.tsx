
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { MarketCategories } from "@/components/MarketCategories";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { Sustainability } from "@/components/Sustainability";
import GlobalNetwork from "@/components/GlobalNetwork";
import GoogleGlobalNetwork from "@/components/GoogleGlobalNetwork";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MarketCategories />
      <FeaturedProducts />
      <Services />
      <About />
      <Sustainability />
      <GoogleGlobalNetwork />
      <History />
      <Stats />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
