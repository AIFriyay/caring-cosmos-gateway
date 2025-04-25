
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
          Don't Let AI Leave You Behind
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          The clock is ticking. Small creative agencies have around two years to adapt to AI or risk obsolescence. Start your AI Friyay initiative now and transform your agency's future.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Start Your AI Friyay
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
