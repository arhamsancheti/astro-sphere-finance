import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, TrendingUp, Users, Copy } from "lucide-react";

const topTraders = [
  {
    rank: 1,
    name: "CryptoWhale",
    roi: "+245%",
    followers: "12.5K",
    winRate: "78%",
    verified: true,
  },
  {
    rank: 2,
    name: "MoonTrader",
    roi: "+189%",
    followers: "8.2K",
    winRate: "72%",
    verified: true,
  },
  {
    rank: 3,
    name: "BTCMaster",
    roi: "+156%",
    followers: "6.7K",
    winRate: "68%",
    verified: true,
  },
  {
    rank: 4,
    name: "AltcoinPro",
    roi: "+134%",
    followers: "5.4K",
    winRate: "65%",
    verified: false,
  },
  {
    rank: 5,
    name: "DeFiExpert",
    roi: "+128%",
    followers: "4.9K",
    winRate: "63%",
    verified: true,
  },
];

const recentTrades = [
  {
    trader: "CryptoWhale",
    action: "Buy",
    asset: "ETH",
    amount: "5.234",
    price: "$3,512.40",
    time: "2m ago",
  },
  {
    trader: "MoonTrader",
    action: "Sell",
    asset: "BTC",
    amount: "0.5",
    price: "$43,245.80",
    time: "5m ago",
  },
  {
    trader: "BTCMaster",
    action: "Buy",
    asset: "SOL",
    amount: "100",
    price: "$75.68",
    time: "8m ago",
  },
];

export default function Social() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Social Trading
          </h1>
          <p className="text-muted-foreground">Follow and copy top traders</p>
        </div>
        <Button className="gap-2">
          <Trophy className="h-4 w-4" />
          View Rankings
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-primary border-primary/20">
          <div className="space-y-2">
            <p className="text-sm text-foreground/70">Your Rank</p>
            <p className="text-3xl font-bold">#247</p>
            <p className="text-sm text-foreground/70">Top 5% traders</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Copiers</p>
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm text-success">+8 this week</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Copy Earnings</p>
            <p className="text-3xl font-bold">$1,234</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Top Traders Leaderboard</h2>
        {topTraders.map((trader, index) => (
          <Card
            key={trader.name}
            className="p-6 hover:bg-card/80 transition-all animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      trader.rank <= 3 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {trader.rank}
                  </div>
                  <Avatar>
                    <AvatarFallback>{trader.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{trader.name}</h3>
                    {trader.verified && (
                      <Badge variant="default" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                    <span>{trader.followers} followers</span>
                    <span>Win rate: {trader.winRate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-success">{trader.roi}</p>
                  <p className="text-sm text-muted-foreground">30D ROI</p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Trades</h2>
        <Card className="p-6">
          <div className="space-y-3">
            {recentTrades.map((trade, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {trade.trader.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{trade.trader}</p>
                    <p className="text-xs text-muted-foreground">{trade.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={trade.action === "Buy" ? "default" : "secondary"}>
                    {trade.action}
                  </Badge>
                  <div className="text-right">
                    <p className="font-semibold text-sm">
                      {trade.amount} {trade.asset}
                    </p>
                    <p className="text-xs text-muted-foreground">{trade.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
