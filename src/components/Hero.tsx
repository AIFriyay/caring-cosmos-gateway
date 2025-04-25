
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#FFB84D] via-[#FFA726] to-[#FF9800]">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c5c4d6da-d581-4124-9629-7ca6efc013cd.png')] bg-no-repeat bg-right-top opacity-10" />
      <div className="container mx-auto px-6 py-20 grid grid-cols-3 items-center">
        <div className="col-span-1 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white fade-in">
            AI Friyay
            <br />
            <span className="text-2xl md:text-4xl opacity-90">Future-Proof Your Agency</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl fade-in">
            Dedicate Friday afternoons to AI integration and give your creative agency the fighting chance it deserves in the evolving digital landscape.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#FF9800] hover:bg-white/90 hover:text-[#FF9800] transition-colors"
          >
            Join the Movement <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
