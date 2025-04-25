
import { LightBulb } from "lucide-react";

const Mission = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-blue-50 p-4 mb-6">
            <LightBulb className="h-12 w-12 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We're building the future of education through innovative technology solutions. 
            Our platform empowers learners and educators to achieve more together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
