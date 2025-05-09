
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp } from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Exchange rate (approx 1 USD = 56 PHP as of 2025)
const EXCHANGE_RATE = 56;

const AmountCalculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount)) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    // Simple calculation: Convert USD to PHP
    const phpAmount = numAmount * EXCHANGE_RATE;
    setCalculatedAmount(phpAmount);
    
    toast.success("Amount successfully calculated");
  };
  
  const handleGoToTrends = () => {
    // Navigate to trend analysis page
    navigate("/dashboard/trends");
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">PHP Amount Calculator</CardTitle>
          <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
            <Calculator className="h-5 w-5 text-finance-accent" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Enter Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-right"
            />
          </div>
          
          <Button type="submit" className="w-full">Calculate PHP Amount</Button>
          
          {calculatedAmount !== null && (
            <div className="mt-6 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Calculated Amount (PHP)</p>
                <p className="text-2xl font-semibold">₱{calculatedAmount.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
              </div>
              
              <Button 
                type="button" 
                onClick={handleGoToTrends} 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                View Trend Analysis
              </Button>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AmountCalculator;
