
import { useState } from 'react';
import StockChart from '@/components/dashboard/StockChart';
import MarketOverview from '@/components/dashboard/MarketOverview';
import PortfolioAllocation from '@/components/dashboard/PortfolioAllocation';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import Watchlist from '@/components/dashboard/Watchlist';
import { Button } from '@/components/ui/button';
import { 
  stockPriceData, 
  marketOverviewData, 
  portfolioData, 
  recentTransactions, 
  watchlistItems 
} from '@/utils/mockData';
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from '@/components/ui/sidebar';
import { Home, BarChart, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-100">
        <Sidebar className="border-r bg-white">
          <SidebarContent className="p-2">
            <div className="px-3 py-2">
              <h2 className="text-lg font-semibold mb-2 text-finance-primary">TrendlyFinance</h2>
              <p className="text-sm text-gray-500">Financial Dashboard</p>
            </div>
            
            <div className="space-y-1 py-4">
              <Link
                to="/dashboard"
                className="flex items-center py-2 px-3 rounded-md bg-blue-50 text-finance-accent"
              >
                <Home className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              
              <Link
                to="/dashboard/trends"
                className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100"
              >
                <BarChart className="mr-2 h-4 w-4" />
                <span>Trend Analysis</span>
              </Link>
              
              <Link
                to="/dashboard/search"
                className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100"
              >
                <Search className="mr-2 h-4 w-4" />
                <span>Search Markets</span>
              </Link>
              
              <Link
                to="/dashboard/settings"
                className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </div>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="bg-white border-b sticky top-0 z-10">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
              <div className="flex items-center">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold ml-4 text-finance-primary">Financial Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Welcome, User</span>
                <Button variant="outline" className="text-finance-primary" asChild>
                  <Link to="/">Log out</Link>
                </Button>
              </div>
            </div>
          </header>

          <main className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Portfolio Value</p>
                  <h3 className="text-2xl font-bold">$124,532.63</h3>
                  <p className="text-finance-profit flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" /> +2.3% today
                  </p>
                </div>
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-finance-accent" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Gain/Loss</p>
                  <h3 className="text-2xl font-bold">+$12,408.29</h3>
                  <p className="text-finance-profit flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" /> +11.1% all time
                  </p>
                </div>
                <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-finance-profit" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Cash Balance</p>
                  <h3 className="text-2xl font-bold">$8,245.12</h3>
                  <p className="text-gray-500">Available to invest</p>
                </div>
                <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-finance-neutral" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <StockChart data={stockPriceData} title="Market Performance" />
              </div>
              <div>
                <MarketOverview data={marketOverviewData} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <PortfolioAllocation data={portfolioData} />
              </div>
              <div>
                <Watchlist items={watchlistItems} />
              </div>
            </div>

            <div>
              <RecentTransactions transactions={recentTransactions} />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

const TrendingUp = ({ className }: { className?: string }) => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
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
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);
