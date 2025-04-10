
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import OscilloscopePage from "./pages/OscilloscopePage"; 
import MultimeterPage from "./pages/MultimeterPage";
import ExperimentSelectionPage from "./pages/ExperimentSelectionPage";
import NotFound from "./pages/NotFound";

// Create App component as a proper function component
function App() {
  // Move queryClient inside the component to ensure proper React context
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oscilloscope" element={<OscilloscopePage />} />
            <Route path="/multimeter" element={<MultimeterPage />} />
            <Route path="/experiments" element={<ExperimentSelectionPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
