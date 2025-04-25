
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-finance-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TrendlyFinance</h3>
            <p className="text-sm text-gray-300">
              Advanced financial trend analysis platform for investors and financial professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-blue-200 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-200 transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-200 transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-blue-200 transition-colors">Blog</Link></li>
              <li><Link to="/documentation" className="hover:text-blue-200 transition-colors">Documentation</Link></li>
              <li><Link to="/support" className="hover:text-blue-200 transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-200 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TrendlyFinance. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link></li>
                <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link to="/cookies" className="text-sm text-gray-400 hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
