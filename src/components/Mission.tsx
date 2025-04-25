
import { Lightbulb } from "lucide-react";

const Mission = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-blue-50 p-4 mb-6">
            <Lightbulb className="h-12 w-12 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            AI Friyay empowers creative agencies to embrace AI technology through dedicated Friday afternoon sessions. 
            We believe that by making AI integration fun, collaborative, and experimental, agencies can innovate and thrive 
            in an AI-driven future rather than be left behind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
