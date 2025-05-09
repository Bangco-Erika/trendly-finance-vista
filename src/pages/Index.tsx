
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AmountCalculator from "@/components/AmountCalculator";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Philippine Financial <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl max-w-2xl text-gray-600">
            Analyze market trends, track investments, and make informed financial decisions with our powerful tools in Philippine Pesos.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>

          <div className="w-full max-w-md">
            <Button 
              className="w-full mb-4" 
              onClick={() => setShowCalculator(!showCalculator)}
            >
              {showCalculator ? "Hide Calculator" : "Show PHP Calculator"}
            </Button>
            
            {showCalculator && <AmountCalculator />}
          </div>

          <Card className="w-full max-w-4xl bg-white shadow-lg border-t-4 border-blue-500 mt-12">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {/* Features */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-time Data</h3>
                  <p className="text-gray-600">Access up-to-date financial information in PHP to make informed decisions.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-gray-600">Visualize market trends and identify investment opportunities with our tools.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure Platform</h3>
                  <p className="text-gray-600">Your financial data is protected with enterprise-grade security measures.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="pt-8">
            <Button asChild variant="ghost">
              <Link to="/dashboard">Explore Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
