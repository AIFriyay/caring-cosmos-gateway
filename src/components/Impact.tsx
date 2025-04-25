
import { Card } from "./ui/card";
import { Users, TreeDeciduous, Globe } from "lucide-react";

const ImpactCard = ({ icon: Icon, number, text }: { icon: any, number: string, text: string }) => (
  <Card className="p-6 text-center">
    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
    <h3 className="text-3xl font-bold mb-2">{number}</h3>
    <p className="text-gray-600">{text}</p>
  </Card>
);

const Impact = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCard 
            icon={Users}
            number="10,000+"
            text="Lives Impacted"
          />
          <ImpactCard 
            icon={TreeDeciduous}
            number="5,000"
            text="Trees Planted"
          />
          <ImpactCard 
            icon={Globe}
            number="25+"
            text="Communities Served"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
