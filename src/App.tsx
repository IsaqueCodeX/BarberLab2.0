import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/Loading';

const Index = lazy(() => import("./pages/Index"));
const OurStory = lazy(() => import("./pages/OurStory"));
const JoinTeam = lazy(() => import("./pages/JoinTeam"));
const Help = lazy(() => import("./pages/Help"));
const Wholesale = lazy(() => import("./pages/Wholesale"));
const Learning = lazy(() => import("./pages/Learning"));
const Shop = lazy(() => import("./pages/Shop"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nossa-historia" element={<OurStory />} />
            <Route path="/junte-se" element={<JoinTeam />} />
            <Route path="/ajuda" element={<Help />} />
            <Route path="/atacado" element={<Wholesale />} />
            <Route path="/aprendizagem" element={<Learning />} />
            <Route path="/loja" element={<Shop />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;