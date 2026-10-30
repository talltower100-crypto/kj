import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall, Shield, Clock, MapPin, Star, Wrench, AlertTriangle, Truck } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GetATow() {
  const [city, setCity] = useState("Colorado");
  const navigate = useNavigate();
  const phoneNumber = "+1 720-416-4800";
  const phoneLink = "tel:+17204164800";

  const handleCallClick = () => {
    setTimeout(() => {
      navigate('/called');
    }, 300);
  };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setCity(data.city);
        }
      })
      .catch(err => console.error("Error fetching location:", err));
  }, []);

  const reviews = [
    { name: "Michael R.", role: "Driver", text: "Incredible response time. When my car broke down, they were there within 45 minutes with a tow truck." },
    { name: "David S.", role: "Customer", text: "I needed a tire change fast to get to work. The team handled it perfectly. True professionals." },
    { name: "Sarah T.", role: "Customer", text: "We use them exclusively for all our towing needs. Their service is unmatched." }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <SEOHead 
        title={`Stranded in ${city}? We're On The Way | The Towing Company LLC`} 
        description={`Get fast towing in ${city} with The Towing Company LLC. Reliable roadside assistance for cars, SUVs, and light trucks. Available 24/7.`} 
        canonical="/get-a-tow"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/112fc1e4-660e-4037-b50a-f5039b0c2c20.png"
      />
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-714620281"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-714620281');
          `}
        </script>
      </Helmet>



      {/* Simplified Header */}
      <header className="py-4 px-6 border-b border-border bg-card">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="text-xl font-black tracking-tight">The Towing Company LLC</span>
          </div>
          <Button className="hidden md:flex bg-primary text-primary-foreground font-bold hover:bg-primary/90" asChild>
            <a href={phoneLink} onClick={handleCallClick}>
              <PhoneCall className="mr-2 h-5 w-5" />
              {phoneNumber}
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vibe.filesafe.space/1782851734624712581/assets/112fc1e4-660e-4037-b50a-f5039b0c2c20.png" 
            alt="Professional 24/7 tow truck operating at night on a Colorado highway" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 text-white mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-destructive-foreground">24/7 Emergency Dispatch</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white uppercase leading-[1.1] [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Stranded in {city}? <br className="hidden md:block" />
              <span className="text-primary">We're On The Way.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
              Fast, reliable towing and roadside assistance. Specialized in everyday cars, SUVs, and light trucks.
            </p>
            
            <Button size="lg" className="w-full md:w-auto text-xl px-12 py-8 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:scale-105 transition-all" asChild>
              <a href={phoneLink} onClick={handleCallClick}>
                <PhoneCall className="mr-3 h-8 w-8 animate-shake" />
                TAP TO CALL NOW
              </a>
            </Button>
            <p className="text-white/80 mt-6 font-medium bg-black/40 inline-block px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">Average dispatch time: 15 minutes</p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y border-border py-8">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-primary" />
              <span className="font-bold">24/7 Response</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold">Fully Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="font-bold">All of Colorado</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <span className="font-bold">Modern Fleet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">What Do You Need?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm group">
              <div className="aspect-video relative">
                <img src="https://vibe.filesafe.space/1782851734624712581/assets/699df3c4-d36f-4b11-a97c-1c504c8a3df0.png" alt="Professional Car Towing Services in Denver" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Car Towing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Everyday cars, SUVs, and light trucks. We tow it safely and securely.</p>
                <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={phoneLink} onClick={handleCallClick}>Call For Tow</a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm group">
              <div className="aspect-video relative">
                <img src="https://vibe.filesafe.space/1782851734624712581/assets/09829029-b309-4fc7-a28c-2ab54983ca13.png" alt="Damage-Free Flatbed Towing Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Flatbed Towing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Safe transport for all-wheel drive vehicles, classic cars, and motorcycles.</p>
                <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={phoneLink} onClick={handleCallClick}>Call For Flatbed</a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm group">
              <div className="aspect-video relative">
                <img src="https://vibe.filesafe.space/1782851734624712581/assets/956d9e4e-5bee-4247-98dd-ef3f1af9c337.png" alt="Emergency Roadside Assistance and Jump Starts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Roadside Assistance</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Battery jump starts, tire changes, lockouts, and fuel delivery to get you moving.</p>
                <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={phoneLink} onClick={handleCallClick}>Call For Assistance</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Serving All of Colorado</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you are stuck on I-25, I-70, or anywhere in Colorado, our dispatchers are standing by.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            We know the local roads and will get to you quickly.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={phoneLink} onClick={handleCallClick}>
              <PhoneCall className="mr-2 h-6 w-6" />
              Dispatch a Truck Now
            </a>
          </Button>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Trusted by Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((t, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">
                What are your response times for emergency towing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We strive for rapid response, typically arriving within 15-45 minutes depending on your location in Colorado and traffic conditions. Our 24/7 dispatch ensures the closest wrecker is sent immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                Do you only tow cars?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We tow all passenger vehicles, including cars, SUVs, vans, and light trucks. We also provide flatbed towing for motorcycles and all-wheel drive vehicles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                How much does towing cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Pricing varies based on the vehicle type, distance, and complexity of the recovery. We provide transparent, upfront estimates before dispatching our team. Call us directly for an immediate, accurate quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                Do you accept commercial insurance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes, we work with most major commercial insurance providers and motor clubs. We provide all necessary documentation, photographs, and detailed invoices required to process your insurance claims smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vibe.filesafe.space/1782851734624712581/assets/cce129ef-2ba7-4654-934b-a165959bcf51.png" 
            alt="Modern fleet of tow trucks ready for dispatch in Colorado" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 [text-shadow:_0_1px_3px_rgba(0,0,0,0.3)]">Don't Wait. Get Help Now.</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto [text-shadow:_0_1px_3px_rgba(0,0,0,0.3)]">Operators are standing by 24/7 to dispatch the right equipment to your location immediately.</p>
          <Button size="lg" className="w-full md:w-auto text-2xl px-12 py-8 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
            <a href={phoneLink} onClick={handleCallClick}>
              <PhoneCall className="mr-3 h-8 w-8" />
              CALL {phoneNumber}
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
