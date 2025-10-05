import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Trading from "./pages/Trading";
import Exchange from "./pages/Exchange";
import Automation from "./pages/Automation";
import Insights from "./pages/Insights";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background pb-20 md:pb-0 md:pl-20">
          <Navigation />
          <main className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/trading" element={<Trading />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/social" element={<Social />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
