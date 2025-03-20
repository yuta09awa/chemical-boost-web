
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Building, MapPin, Phone, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Partner with Miki Sangyo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you need laboratory chemicals, industrial reagents, or custom formulations, 
              our experts are here to help you find the right products for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-up">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary" />
                  Company Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Miki Sangyo Co., Ltd. - A leading global distributor of specialty chemicals and materials 
                  since 1961, providing innovative solutions for various industries with locations in 
                  Japan, USA, China, and India.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Japan Headquarters
                </h3>
                <p className="text-gray-600">
                  3-4-5 Nihonbashi-Honcho, Chuo-ku<br />
                  Tokyo 103-0023, Japan
                </p>
                <div className="flex items-center mt-3 text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+81332791751" className="hover:text-primary transition-colors">+81 3-3279-1751</a>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" />
                  Global Network
                </h3>
                <p className="text-gray-600">
                  With offices in Japan, USA, China, and India, our global network ensures 
                  we can provide consistent quality and service worldwide.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
