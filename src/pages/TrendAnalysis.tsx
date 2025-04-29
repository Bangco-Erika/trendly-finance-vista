
import { BarChart } from "lucide-react";

const TrendAnalysis = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-finance-primary">Market Trend Analysis</h2>
          <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
            <BarChart className="h-5 w-5 text-finance-accent" />
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          Advanced trend analysis tools to help you make informed investment decisions.
          This page is under development and will include detailed market trend indicators,
          pattern recognition, and predictive analytics.
        </p>
        
        <div className="flex justify-center items-center p-12 bg-gray-50 rounded-lg">
          <div className="text-center">
            <BarChart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
            <p className="text-gray-500">
              Our development team is currently building advanced trend analysis tools.
              Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendAnalysis;
