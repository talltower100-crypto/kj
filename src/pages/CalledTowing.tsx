import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";

export default function CalledTowing() {
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/get-a-tow-providence");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-background items-center justify-center p-4">
      <SEOHead
        title="Calling Denver Towing Dispatch | The Towing Company LLC"
        description="Connecting you to The Towing Company LLC's 24/7 towing dispatch in Denver and Aurora. Fast response and honest pricing for all your roadside needs."
        canonical="/called-towing"
      />
      <Helmet>
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-714620281/_SZcCIne0rscEPn64NQC'});`}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-card border border-border p-8 rounded-2xl shadow-2xl text-center"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <PhoneCall className="h-10 w-10 text-primary animate-shake" />
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight mb-4">Connecting to Denver Towing...</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your phone should be prompting you to call our 24/7 Denver towing dispatch.
        </p>
        <div className="p-4 bg-muted/50 rounded-lg mb-8 border border-border/50">
          <p className="text-sm text-muted-foreground mb-2">If nothing happened, tap below:</p>
          <a href="tel:+17204164800" className="text-2xl font-bold text-primary hover:underline">
            +1 720-416-4800
          </a>
        </div>
        <Button variant="outline" className="w-full font-bold" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-6 text-center">
          Redirecting back in {timeLeft} seconds...
        </p>
      </motion.div>
    </div>
  );
}
