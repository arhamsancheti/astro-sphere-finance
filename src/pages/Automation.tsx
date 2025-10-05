import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, TrendingUp, DollarSign, Target, Plus } from "lucide-react";

const bots = [
  {
    name: "Grid Trading Bot",
    description: "Automated buy low, sell high strategy",
    status: "active",
    profit: "+12.5%",
    icon: Bot,
  },
  {
    name: "DCA Strategy",
    description: "Dollar cost averaging for BTC",
    status: "active",
    profit: "+8.2%",
    icon: DollarSign,
  },
  {
    name: "Portfolio Rebalancing",
    description: "Maintain target allocations",
    status: "paused",
    profit: "+5.7%",
    icon: Target,
  },
];

const strategies = [
  {
    name: "Momentum Trading",
    risk: "High",
    returns: "15-25%",
    description: "Follow market trends",
  },
  {
    name: "Mean Reversion",
    risk: "Medium",
    returns: "8-15%",
    description: "Buy dips, sell peaks",
  },
  {
    name: "Arbitrage",
    risk: "Low",
    returns: "3-8%",
    description: "Cross-exchange opportunities",
  },
];

export default function Automation() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Automation</h1>
          <p className="text-muted-foreground">Let AI-powered bots trade for you</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Bot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-primary border-primary/20">
          <div className="space-y-2">
            <p className="text-sm text-foreground/70">Total Profit</p>
            <p className="text-3xl font-bold text-success">+$2,847.52</p>
            <p className="text-sm text-foreground/70">From all bots</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Active Bots</p>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Running 24/7</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Win Rate</p>
            <p className="text-3xl font-bold">68%</p>
            <p className="text-sm text-muted-foreground">Profitable trades</p>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Bots</h2>
        {bots.map((bot, index) => (
          <Card
            key={bot.name}
            className="p-6 hover:bg-card/80 transition-all animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <bot.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{bot.name}</h3>
                    <Badge variant={bot.status === "active" ? "default" : "secondary"}>
                      {bot.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{bot.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-success">{bot.profit}</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Configure
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Available Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strategies.map((strategy, index) => (
            <Card
              key={strategy.name}
              className="p-6 hover:bg-card/80 transition-all cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{strategy.name}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Risk Level</span>
                    <Badge
                      variant={
                        strategy.risk === "High"
                          ? "destructive"
                          : strategy.risk === "Medium"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {strategy.risk}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expected Returns</span>
                    <span className="font-semibold">{strategy.returns}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Try Strategy
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
