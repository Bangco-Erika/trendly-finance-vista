
export const stockPriceData = [
  { name: 'Jan', price: 400 },
  { name: 'Feb', price: 430 },
  { name: 'Mar', price: 410 },
  { name: 'Apr', price: 450 },
  { name: 'May', price: 460 },
  { name: 'Jun', price: 520 },
  { name: 'Jul', price: 500 },
  { name: 'Aug', price: 510 },
  { name: 'Sep', price: 550 },
  { name: 'Oct', price: 570 },
  { name: 'Nov', price: 590 },
  { name: 'Dec', price: 600 },
];

export const marketOverviewData = [
  { name: 'S&P 500', value: 4732.25, change: 1.6, status: 'up' },
  { name: 'DOW', value: 38992.13, change: 0.5, status: 'up' },
  { name: 'NASDAQ', value: 16752.48, change: 2.1, status: 'up' },
  { name: 'RUSSELL', value: 2045.12, change: -0.3, status: 'down' },
  { name: 'VIX', value: 13.6, change: -4.2, status: 'down' },
];

export const portfolioData = [
  { name: 'Tech', value: 35 },
  { name: 'Finance', value: 25 },
  { name: 'Healthcare', value: 20 },
  { name: 'Energy', value: 10 },
  { name: 'Consumer', value: 10 },
];

export const recentTransactions = [
  {
    id: '1',
    symbol: 'AAPL',
    type: 'buy',
    price: 182.52,
    shares: 10,
    date: '2025-04-22',
  },
  {
    id: '2',
    symbol: 'MSFT',
    type: 'buy',
    price: 425.21,
    shares: 5,
    date: '2025-04-20',
  },
  {
    id: '3',
    symbol: 'NVDA',
    type: 'sell',
    price: 878.35,
    shares: 3,
    date: '2025-04-18',
  },
  {
    id: '4',
    symbol: 'GOOGL',
    type: 'buy',
    price: 178.05,
    shares: 8,
    date: '2025-04-15',
  },
];

export const watchlistItems = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 182.52,
    change: 1.23,
    changePercent: 0.68,
    status: 'up',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 425.21,
    change: 2.89,
    changePercent: 0.68,
    status: 'up',
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 178.05,
    change: -0.45,
    changePercent: -0.25,
    status: 'down',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 183.32,
    change: 1.56,
    changePercent: 0.86,
    status: 'up',
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 513.20,
    change: 4.23,
    changePercent: 0.83,
    status: 'up',
  },
];
