import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TwentyFourHourTowing from "./pages/TwentyFourHourTowing";
import CityTowing from "./pages/CityTowing";
import Industry from "./pages/Industry";
import NotFound from "./pages/NotFound";
import Accessibility from "./pages/Accessibility";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import GetATow from "./pages/GetATow";
import GetATowProvidence from "./pages/GetATowProvidence";
import Called from "./pages/Called";
// CalledTowing page for Providence landing page conversions
import CalledTowing from "./pages/CalledTowing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/get-a-tow" element={<GetATow />} />
          <Route path="/get-a-tow-providence" element={<GetATowProvidence />} />
          <Route path="/called" element={<Called />} />
          <Route path="/called-towing" element={<CalledTowing />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/24-hour-towing" element={<TwentyFourHourTowing />} />
            <Route path="/towing/:city" element={<CityTowing />} />
            <Route path="/industries/:industry" element={<Industry />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
