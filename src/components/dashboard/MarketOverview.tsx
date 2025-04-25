
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MarketItem {
  name: string;
  value: number;
  change: number;
  status: 'up' | 'down';
}

interface MarketOverviewProps {
  data: MarketItem[];
}

const MarketOverview = ({ data }: MarketOverviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {data.map((item) => (
            <div key={item.name} className="py-3 flex justify-between items-center">
              <span className="font-medium">{item.name}</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">{item.value.toLocaleString()}</span>
                <div 
                  className={`flex items-center ${
                    item.status === 'up' ? 'text-finance-profit' : 'text-finance-loss'
                  }`}
                >
                  {item.status === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="ml-1">{item.change}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
