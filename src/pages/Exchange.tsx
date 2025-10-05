import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownUp, Settings2 } from "lucide-react";

export default function Exchange() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Exchange</h1>
        <p className="text-muted-foreground">Swap tokens across multiple chains instantly</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">From</span>
          <Button variant="ghost" size="sm" className="gap-2">
            <Settings2 className="h-4 w-4" />
            Settings
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
            <Input
              type="number"
              placeholder="0.0"
              className="bg-transparent border-0 text-2xl p-0 h-auto focus-visible:ring-0"
            />
            <Button variant="outline" className="gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-bold">ET</span>
              </div>
              ETH
            </Button>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground px-1">
            <span>Balance: 2.4581 ETH</span>
            <span>~$8,642.35</span>
          </div>
        </div>

        <div className="flex justify-center -my-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-card hover:bg-muted/20 border-2 border-border"
          >
            <ArrowDownUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">To</span>
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
            <Input
              type="number"
              placeholder="0.0"
              className="bg-transparent border-0 text-2xl p-0 h-auto focus-visible:ring-0"
              disabled
            />
            <Button variant="outline" className="gap-2">
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-xs font-bold">BT</span>
              </div>
              BTC
            </Button>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground px-1">
            <span>Balance: 0.1234 BTC</span>
            <span>~$7,123.45</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Rate</span>
            <span>1 ETH = 0.0564 BTC</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Network Fee</span>
            <span>~$2.45</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Route</span>
            <span className="text-accent">Best price found</span>
          </div>
        </div>

        <Button className="w-full" size="lg">
          Review Swap
        </Button>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-primary">$0</p>
          <p className="text-sm text-muted-foreground">Gasless Transactions</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-accent">15+</p>
          <p className="text-sm text-muted-foreground">Supported Chains</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-success">Best</p>
          <p className="text-sm text-muted-foreground">Price Routing</p>
        </Card>
      </div>
    </div>
  );
}
