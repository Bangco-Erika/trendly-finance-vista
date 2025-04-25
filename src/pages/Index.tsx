
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, BarChart, TrendingUp, Shield, LineChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-finance-primary to-finance-secondary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Make smarter investment decisions with powerful financial trend analysis
              </h1>
              <p className="text-xl text-blue-100">
                TrendlyFinance provides advanced analytics tools to help investors identify market trends, 
                visualize data, and make informed financial decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-finance-accent hover:bg-finance-highlight text-white" asChild>
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link to="/features">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative animate-float">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-6 border border-white/20">
                <img 
                  src="https://placehold.co/600x400/2C74B3/FFF?text=Financial+Dashboard" 
                  alt="Dashboard Preview" 
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-finance-primary">Powerful Financial Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers comprehensive analytics tools designed for both beginners
              and professional investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-finance-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-finance-primary">Real-time Trend Analysis</h3>
              <p className="text-gray-600">
                Track market movements with real-time data visualization and identify emerging trends before they become mainstream.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-finance-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-finance-primary">Portfolio Analytics</h3>
              <p className="text-gray-600">
                Get detailed insights into your portfolio performance, allocation, and risk metrics to optimize your investment strategy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-finance-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-finance-primary">Advanced Charting</h3>
              <p className="text-gray-600">
                Access professional-grade charting tools with multiple indicators, timeframes, and comparison options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-finance-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-finance-primary">Risk Management</h3>
              <p className="text-gray-600">
                Evaluate potential risks and simulate various market scenarios to prepare your portfolio for different conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-finance-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-finance-primary">Custom Alerts</h3>
              <p className="text-gray-600">
                Set up personalized alerts for price movements, technical indicators, and news that impact your investments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-finance-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-finance-primary">Community Insights</h3>
              <p className="text-gray-600">
                Connect with other investors, share strategies, and learn from the community's collective wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-finance-accent text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your investment strategy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of investors who are making smarter decisions with TrendlyFinance.
          </p>
          <Button size="lg" className="bg-white text-finance-accent hover:bg-gray-100" asChild>
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

// Additional components for icons
const Bell = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
