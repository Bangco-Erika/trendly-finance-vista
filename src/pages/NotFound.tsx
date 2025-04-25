
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BarChart, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-6 py-12 bg-white rounded-lg shadow-sm border">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
            <BarChart className="h-12 w-12 text-gray-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-finance-primary mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The financial data you're looking for couldn't be located. 
          The URL <span className="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded">{location.pathname}</span> doesn't exist.
        </p>
        
        <div className="space-y-3">
          <Button className="w-full" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full" asChild>
            <Link to="/dashboard">
              <BarChart className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full" asChild>
            <a href="mailto:support@trendlyfinance.com">
              <Search className="mr-2 h-4 w-4" />
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
