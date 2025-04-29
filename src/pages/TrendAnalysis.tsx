
import { useState } from "react";
import { 
  BarChart, 
  TrendingUp, 
  TrendingDown, 
  ChartPie,
  CalendarDays
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { stockPriceData } from "@/utils/mockData";
import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Trend data for different time periods
const trendData = {
  "1W": [
    { date: "Mon", value: 520 },
    { date: "Tue", value: 535 },
    { date: "Wed", value: 570 },
    { date: "Thu", value: 565 },
    { date: "Fri", value: 590 }
  ],
  "1M": [
    { date: "Week 1", value: 520 },
    { date: "Week 2", value: 540 },
    { date: "Week 3", value: 560 },
    { date: "Week 4", value: 590 }
  ],
  "3M": [
    { date: "Jan", value: 480 },
    { date: "Feb", value: 520 },
    { date: "Mar", value: 590 }
  ],
  "1Y": stockPriceData,
  "ALL": [
    { date: "2020", value: 320 },
    { date: "2021", value: 410 },
    { date: "2022", value: 470 },
    { date: "2023", value: 520 },
    { date: "2024", value: 590 }
  ]
};

// Volume data
const volumeData = [
  { date: "Jan", volume: 1200 },
  { date: "Feb", volume: 1500 },
  { date: "Mar", volume: 1100 },
  { date: "Apr", volume: 1400 },
  { date: "May", volume: 1700 },
  { date: "Jun", volume: 1300 },
  { date: "Jul", volume: 900 },
  { date: "Aug", volume: 1100 },
  { date: "Sep", volume: 1350 },
  { date: "Oct", volume: 1550 },
  { date: "Nov", volume: 1750 },
  { date: "Dec", volume: 1400 }
];

// Market sentiment data
const sentimentData = [
  { name: "Bullish", value: 55 },
  { name: "Neutral", value: 30 },
  { name: "Bearish", value: 15 }
];

// Key statistics
const keyStats = [
  { name: "Market Cap", value: "$1.2T" },
  { name: "P/E Ratio", value: 22.5 },
  { name: "Dividend Yield", value: "1.8%" },
  { name: "52-Week High", value: "$612.45" },
  { name: "52-Week Low", value: "$482.10" },
  { name: "Beta", value: 1.12 }
];

const chartConfig = {
  positive: { color: "#22c55e" },
  negative: { color: "#ef4444" },
  neutral: { color: "#3b82f6" },
  volume: { color: "#8b5cf6" }
};

const TrendAnalysis = () => {
  const [timeframe, setTimeframe] = useState<"1W" | "1M" | "3M" | "1Y" | "ALL">("1Y");
  const [chartType, setChartType] = useState<"line" | "candle" | "area">("line");
  
  // Calculate if trend is positive (current value > first value)
  const currentTrendData = trendData[timeframe];
  const trendDirection = 
    currentTrendData[currentTrendData.length - 1].value > currentTrendData[0].value
      ? "positive"
      : "negative";

  const percentageChange = (
    ((currentTrendData[currentTrendData.length - 1].value - currentTrendData[0].value) / 
    currentTrendData[0].value) * 100
  ).toFixed(2);
  
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
          Visualize market trends, analyze patterns, and identify potential opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Market Price Trend</CardTitle>
                <div className="flex space-x-2 items-center">
                  {trendDirection === "positive" ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                  <span className={`font-medium ${
                    trendDirection === "positive" ? "text-green-500" : "text-red-500"
                  }`}>
                    {trendDirection === "positive" ? "+" : "-"}{Math.abs(parseFloat(percentageChange))}%
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <ToggleGroup type="single" value={chartType} onValueChange={(value) => value && setChartType(value as any)}>
                  <ToggleGroupItem value="line" aria-label="Line Chart">Line</ToggleGroupItem>
                  <ToggleGroupItem value="candle" aria-label="Candlestick Chart">Candle</ToggleGroupItem>
                  <ToggleGroupItem value="area" aria-label="Area Chart">Area</ToggleGroupItem>
                </ToggleGroup>
                <ToggleGroup type="single" value={timeframe} onValueChange={(value) => value && setTimeframe(value as any)}>
                  <ToggleGroupItem value="1W" aria-label="1 Week">1W</ToggleGroupItem>
                  <ToggleGroupItem value="1M" aria-label="1 Month">1M</ToggleGroupItem>
                  <ToggleGroupItem value="3M" aria-label="3 Months">3M</ToggleGroupItem>
                  <ToggleGroupItem value="1Y" aria-label="1 Year">1Y</ToggleGroupItem>
                  <ToggleGroupItem value="ALL" aria-label="All Time">ALL</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="h-[300px]">
                <ChartContainer 
                  config={chartConfig}
                  className="h-full"
                >
                  <LineChart
                    data={trendData[timeframe]}
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey={timeframe === "1Y" ? "name" : "date"}
                      tickLine={false}
                    />
                    <YAxis 
                      domain={['auto', 'auto']}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Price']}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Line
                      type="monotone"
                      dataKey={timeframe === "1Y" ? "price" : "value"}
                      stroke={trendDirection === "positive" ? "#22c55e" : "#ef4444"}
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Market Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig} className="h-full">
                  <ResponsiveContainer>
                    <RechartsBarChart
                      data={sentimentData}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Sentiment']} />
                      <Bar
                        dataKey="value"
                        fill="#8b5cf6"
                        radius={[4, 4, 0, 0]}
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Trading Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ChartContainer config={chartConfig} className="h-full">
                  <ResponsiveContainer>
                    <RechartsBarChart
                      data={volumeData}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="volume" fill="#8b5cf6" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Key Statistics</CardTitle>
              <CalendarDays className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {keyStats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">{stat.name}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrendAnalysis;
