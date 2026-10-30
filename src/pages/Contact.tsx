import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <SEOHead 
        title="Contact Us | The Towing Company LLC" 
        description="Need a tow in Denver right now? Contact The Towing Company LLC for fast emergency towing and roadside assistance across the Front Range." 
        canonical="/contact"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRescue",
          "name": "The Towing Company LLC",
          "telephone": "+17204164800",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Aurora",
            "addressRegion": "CO"
          }
        })}
      />
      <div className="container px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full text-primary mb-8 animate-pulse">
              <PhoneCall className="h-10 w-10 animate-shake" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Need a Tow in <span className="text-primary">Denver?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
              Don't wait around on the side of I-25 or a dark suburban street. Call our local Denver team directly right now for immediate emergency dispatch. We are standing by 24/7 to get you home safe.
            </p>

            <Button size="lg" className="text-xl md:text-3xl px-10 py-8 h-auto font-black bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] w-full md:w-auto" asChild>
              <a href="tel:+17204164800">
                <PhoneCall className="mr-4 h-8 w-8" />
                +1 720-416-4800
              </a>
            </Button>
            
            <p className="mt-6 text-muted-foreground font-medium">
              Average response time: <span className="text-primary font-bold">35 Minutes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
