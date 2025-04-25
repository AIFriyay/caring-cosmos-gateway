
import { Card } from "./ui/card";
import { Users, Laptop, Globe } from "lucide-react";

const ImpactCard = ({ icon: Icon, number, text }: { icon: any, number: string, text: string }) => (
  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-none bg-gradient-to-br from-white to-gray-50">
    <div className="rounded-full bg-blue-50 p-3 w-fit mx-auto mb-4">
      <Icon className="h-8 w-8 text-secondary" />
    </div>
    <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{number}</h3>
    <p className="text-gray-600">{text}</p>
  </Card>
);

const Impact = () => {
  return (
    <div className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCard 
            icon={Users}
            number="50,000+"
            text="Active Learners"
          />
          <ImpactCard 
            icon={Laptop}
            number="1,000+"
            text="Learning Resources"
          />
          <ImpactCard 
            icon={Globe}
            number="100+"
            text="Partner Institutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
