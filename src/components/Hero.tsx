
import { Button } from "./ui/button";
import { Laptop } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-1" />
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Empowering Education<br />Through Technology
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto fade-in">
          Join us in revolutionizing learning experiences with cutting-edge educational technology.
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary/90">
          Get Started <Laptop className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
