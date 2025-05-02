
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Transaction {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  price: number;
  shares: number;
  date: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Symbol</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Shares</th>
                <th className="pb-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b last:border-b-0">
                  <td className="py-3 font-medium">{transaction.symbol}</td>
                  <td className={`py-3 ${transaction.type === 'buy' ? 'text-finance-profit' : 'text-finance-loss'}`}>
                    {transaction.type.toUpperCase()}
                  </td>
                  <td className="py-3">₱{transaction.price.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                  <td className="py-3">{transaction.shares}</td>
                  <td className="py-3">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
