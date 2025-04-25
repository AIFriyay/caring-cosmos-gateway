
import { Button } from "./ui/button";
import { Brain } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-secondary via-primary to-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="rounded-full bg-white/10 p-4 w-fit mx-auto mb-6">
          <Brain className="h-12 w-12" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transform Education Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join our platform and be part of the educational technology revolution that's shaping the future of learning.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Start Learning
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
