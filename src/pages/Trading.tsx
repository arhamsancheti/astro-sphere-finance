import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown } from "lucide-react";

const orderBook = [
  { price: "43,250.50", amount: "0.5234", total: "22,630.56", type: "sell" },
  { price: "43,248.20", amount: "0.8421", total: "36,422.14", type: "sell" },
  { price: "43,245.80", amount: "1.2340", total: "53,365.39", type: "sell" },
  { price: "43,240.00", amount: "2.1000", total: "90,804.00", type: "buy" },
  { price: "43,238.50", amount: "0.9876", total: "42,699.45", type: "buy" },
  { price: "43,235.20", amount: "1.5432", total: "66,721.49", type: "buy" },
];

export default function Trading() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">BTC/USDT</h1>
          <p className="text-muted-foreground">Bitcoin / Tether</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">$43,245.80</p>
          <p className="text-success text-sm flex items-center gap-1 justify-end">
            <TrendingUp className="h-4 w-4" />
            +2.45%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border border-border">
            <p className="text-muted-foreground">Trading Chart Placeholder</p>
          </div>
        </Card>

        <Card className="p-6">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="buy" className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Price (USDT)</label>
                <Input type="number" placeholder="43,245.80" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Amount (BTC)</label>
                <Input type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Total (USDT)</label>
                <Input type="number" placeholder="0.00" disabled />
              </div>
              <Button className="w-full bg-success hover:bg-success/90">
                Buy BTC
              </Button>
            </TabsContent>
            <TabsContent value="sell" className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Price (USDT)</label>
                <Input type="number" placeholder="43,245.80" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Amount (BTC)</label>
                <Input type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Total (USDT)</label>
                <Input type="number" placeholder="0.00" disabled />
              </div>
              <Button className="w-full bg-destructive hover:bg-destructive/90">
                Sell BTC
              </Button>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Order Book</h3>
        <div className="grid grid-cols-3 text-sm text-muted-foreground mb-2">
          <span>Price (USDT)</span>
          <span className="text-right">Amount (BTC)</span>
          <span className="text-right">Total</span>
        </div>
        <div className="space-y-1">
          {orderBook.map((order, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 text-sm py-1 ${
                order.type === "sell" ? "text-destructive" : "text-success"
              }`}
            >
              <span>{order.price}</span>
              <span className="text-right text-foreground">{order.amount}</span>
              <span className="text-right text-foreground">{order.total}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
