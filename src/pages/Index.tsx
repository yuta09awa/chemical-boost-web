
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { MarketCategories } from "@/components/MarketCategories";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MarketCategories />
      <Services />
      <About />
      <History />
      <Stats />
      <Contact />
    </div>
  );
};

export default Index;
