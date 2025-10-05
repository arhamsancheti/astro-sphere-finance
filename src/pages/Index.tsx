import { WalletOverview } from "@/components/WalletOverview";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap, Users, Brain, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";

const features = [
  {
    icon: Shield,
    title: "MPC Security",
    description: "Non-custodial wallet with social recovery",
  },
  {
    icon: Zap,
    title: "Gasless Transactions",
    description: "Zero gas fees with meta-transactions",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Smart insights and automated trading",
  },
  {
    icon: Users,
    title: "Social Trading",
    description: "Copy top traders and earn rewards",
  },
  {
    icon: TrendingUp,
    title: "Multi-Chain",
    description: "Support for 15+ blockchain networks",
  },
  {
    icon: Leaf,
    title: "Carbon Tracking",
    description: "Monitor your transaction footprint",
  },
];

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img
          src={heroImage}
          alt="Crypto Trading Platform"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Next-Gen Crypto Trading
            </h1>
            <p className="text-lg text-foreground/90 max-w-2xl">
              Secure wallet, advanced trading, AI insights, and social features all in one platform
            </p>
            <div className="flex gap-3 justify-center pt-4">
              <Button size="lg" className="shadow-glow-primary">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            className="p-6 hover:bg-card/80 transition-all cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <feature.icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>

      <WalletOverview />
    </div>
  );
};

export default Index;
