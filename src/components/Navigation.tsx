import { Wallet, TrendingUp, RefreshCw, Bot, Users, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Wallet, label: "Wallet", path: "/" },
  { icon: TrendingUp, label: "Trading", path: "/trading" },
  { icon: RefreshCw, label: "Exchange", path: "/exchange" },
  { icon: Bot, label: "Automation", path: "/automation" },
  { icon: Sparkles, label: "AI Insights", path: "/insights" },
  { icon: Users, label: "Social", path: "/social" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border md:left-0 md:top-0 md:bottom-0 md:right-auto md:w-20 md:border-r md:border-t-0">
      <div className="flex justify-around md:flex-col md:items-center md:py-6 md:h-full md:justify-start md:gap-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-3 px-4 transition-all duration-200",
                "hover:bg-primary/10 rounded-lg",
                isActive && "text-primary",
                !isActive && "text-muted-foreground"
              )}
            >
              <item.icon className={cn("h-6 w-6", isActive && "animate-glow-pulse")} />
              <span className="text-xs mt-1 hidden sm:block">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
