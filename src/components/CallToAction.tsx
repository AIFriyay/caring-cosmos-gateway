
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <Heart className="h-16 w-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Help Us Make a Difference
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your support enables us to continue our mission and create lasting positive change in communities worldwide.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
