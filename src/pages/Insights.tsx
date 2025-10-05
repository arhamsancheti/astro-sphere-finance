import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, AlertTriangle, Target, Brain } from "lucide-react";

const insights = [
  {
    type: "opportunity",
    title: "Strong Buy Signal for ETH",
    description: "Technical indicators suggest 15% upside potential in the next 48 hours",
    confidence: "High",
    icon: TrendingUp,
    color: "success",
  },
  {
    type: "alert",
    title: "High Volatility Warning",
    description: "BTC showing increased volatility. Consider reducing leverage",
    confidence: "Medium",
    icon: AlertTriangle,
    color: "destructive",
  },
  {
    type: "recommendation",
    title: "Portfolio Rebalancing",
    description: "Your portfolio has drifted from target allocation by 12%",
    confidence: "High",
    icon: Target,
    color: "primary",
  },
];

const predictions = [
  {
    asset: "BTC",
    current: "$43,245.80",
    predicted: "$45,120.00",
    change: "+4.3%",
    timeframe: "7 days",
    positive: true,
  },
  {
    asset: "ETH",
    current: "$3,512.40",
    predicted: "$3,890.00",
    change: "+10.8%",
    timeframe: "7 days",
    positive: true,
  },
  {
    asset: "SOL",
    current: "$75.68",
    predicted: "$72.30",
    change: "-4.5%",
    timeframe: "7 days",
    positive: false,
  },
];

export default function Insights() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            AI Insights
          </h1>
          <p className="text-muted-foreground">Powered by advanced machine learning</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Brain className="h-4 w-4" />
          Personalize
        </Button>
      </div>

      <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow-primary">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Market Sentiment: Bullish</h3>
            <p className="text-sm text-foreground/80">
              Our AI models predict a 72% probability of upward market movement in the next 24-48
              hours. Consider increasing exposure to major assets.
            </p>
            <div className="flex gap-2 pt-2">
              <Badge variant="default">High Confidence</Badge>
              <Badge variant="outline">Updated 5 min ago</Badge>
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Latest Insights</h2>
        {insights.map((insight, index) => (
          <Card
            key={insight.title}
            className="p-6 hover:bg-card/80 transition-all animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  insight.color === "success"
                    ? "bg-success/20"
                    : insight.color === "destructive"
                    ? "bg-destructive/20"
                    : "bg-primary/20"
                }`}
              >
                <insight.icon
                  className={`h-5 w-5 ${
                    insight.color === "success"
                      ? "text-success"
                      : insight.color === "destructive"
                      ? "text-destructive"
                      : "text-primary"
                  }`}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                  </div>
                  <Badge variant="outline">{insight.confidence}</Badge>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                  <Button size="sm">Take Action</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">AI Price Predictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {predictions.map((prediction, index) => (
            <Card
              key={prediction.asset}
              className="p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{prediction.asset}</h3>
                  <Badge variant={prediction.positive ? "default" : "secondary"}>
                    {prediction.timeframe}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="text-lg font-semibold">{prediction.current}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Predicted Price</p>
                    <p className="text-lg font-semibold">{prediction.predicted}</p>
                  </div>
                </div>
                <div
                  className={`text-center p-3 rounded-lg ${
                    prediction.positive ? "bg-success/20" : "bg-destructive/20"
                  }`}
                >
                  <p
                    className={`text-xl font-bold ${
                      prediction.positive ? "text-success" : "text-destructive"
                    }`}
                  >
                    {prediction.change}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
