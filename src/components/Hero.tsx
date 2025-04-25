
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-1" />
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          AI Friyay<br />Future-Proof Your Agency
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto fade-in">
          Dedicate Friday afternoons to AI integration and give your creative agency the fighting chance it deserves in the evolving digital landscape.
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary/90">
          Join the Movement <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
