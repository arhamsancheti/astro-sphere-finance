import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";

const balances = [
  { chain: "Ethereum", symbol: "ETH", amount: "2.4581", value: "$8,642.35", change: "+5.2%", positive: true },
  { chain: "Bitcoin", symbol: "BTC", amount: "0.1234", value: "$7,123.45", change: "+3.1%", positive: true },
  { chain: "Polygon", symbol: "MATIC", amount: "1,250.00", value: "$1,025.00", change: "-1.8%", positive: false },
  { chain: "Solana", symbol: "SOL", amount: "45.67", value: "$3,456.78", change: "+8.4%", positive: true },
];

export const WalletOverview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow-primary">
        <div className="space-y-2">
          <p className="text-sm text-foreground/70">Total Portfolio Value</p>
          <h2 className="text-4xl font-bold">$20,247.58</h2>
          <p className="text-success text-sm">+$1,234.56 (6.5%) today</p>
        </div>
        <div className="flex gap-3 mt-6">
          <Button variant="default" className="flex-1 gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Send
          </Button>
          <Button variant="secondary" className="flex-1 gap-2">
            <ArrowDownLeft className="h-4 w-4" />
            Receive
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <Plus className="h-4 w-4" />
            Buy
          </Button>
        </div>
      </Card>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Multi-Chain Balances</h3>
        {balances.map((balance, index) => (
          <Card
            key={balance.symbol}
            className="p-4 hover:bg-card/80 transition-all cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold">{balance.symbol.slice(0, 2)}</span>
                </div>
                <div>
                  <p className="font-semibold">{balance.chain}</p>
                  <p className="text-sm text-muted-foreground">
                    {balance.amount} {balance.symbol}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{balance.value}</p>
                <p className={balance.positive ? "text-success text-sm" : "text-destructive text-sm"}>
                  {balance.change}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
