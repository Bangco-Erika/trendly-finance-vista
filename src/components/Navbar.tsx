
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-finance-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <Link to="/">TrendlyFinance</Link>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/features" className="hover:text-blue-200 transition-colors">Features</Link>
          <Link to="/pricing" className="hover:text-blue-200 transition-colors">Pricing</Link>
          <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link to="/login">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-finance-primary">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-finance-accent hover:bg-finance-highlight">Sign Up</Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-finance-primary p-4 mt-2">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-blue-200 transition-colors p-2">Home</Link>
            <Link to="/features" className="hover:text-blue-200 transition-colors p-2">Features</Link>
            <Link to="/pricing" className="hover:text-blue-200 transition-colors p-2">Pricing</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors p-2">About</Link>
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-finance-primary">
                Log In
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full bg-finance-accent hover:bg-finance-highlight">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
