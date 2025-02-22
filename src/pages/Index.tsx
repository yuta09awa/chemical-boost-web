
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Contact />
    </div>
  );
};

export default Index;
