
import { HandHeart } from "lucide-react";

const Mission = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <HandHeart className="h-16 w-16 text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We believe in creating sustainable change through community-driven initiatives. 
            Our focus is on empowering individuals and communities to build a better tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
