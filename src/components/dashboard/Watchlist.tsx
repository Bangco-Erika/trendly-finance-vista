
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  status: 'up' | 'down';
}

interface WatchlistProps {
  items: WatchlistItem[];
}

const Watchlist = ({ items }: WatchlistProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Watchlist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {items.map((item) => (
            <div key={item.symbol} className="py-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{item.symbol}</div>
                <div className="text-sm text-gray-500">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">${item.price.toFixed(2)}</div>
                <div 
                  className={`flex items-center justify-end ${
                    item.status === 'up' ? 'text-finance-profit' : 'text-finance-loss'
                  }`}
                >
                  {item.status === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="ml-1">
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(2)} ({item.changePercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Watchlist;
