
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 fade-in">
          Making a Difference,<br />One Step at a Time
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto fade-in">
          Join us in our mission to create positive change and build a better future for all.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Support Our Cause <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
