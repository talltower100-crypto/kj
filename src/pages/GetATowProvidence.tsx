import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall, Shield, Clock, MapPin, Star, Wrench, Car, AlertCircle } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function GetATowProvidence() {
  const navigate = useNavigate();
  const phoneNumber = "+1 720-416-4800";
  const phoneLink = "tel:+17204164800";

  const handleCallClick = () => {
    setTimeout(() => {
      navigate('/called-towing');
    }, 300);
  };

  const reviews = [
    { name: "Jessica M.", role: "Local Resident", text: "My car broke down right in downtown Denver. They arrived in 20 minutes and the driver was so helpful and professional." },
    { name: "Robert L.", role: "Commuter", text: "Got a flat tire on I-25 during rush hour. Their roadside assistance team was a lifesaver. Fast, safe, and reasonably priced." },
    { name: "Amanda T.", role: "Student", text: "Locked my keys in my car at the university. They came out immediately and got me back in without a scratch on my car." }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <SEOHead 
        title="Stranded in Providence? We're On The Way | The Towing Company LLC" 
        description="Get fast towing in Providence with The Towing Company LLC. Reliable roadside assistance for cars, SUVs, and light trucks. 24/7 dispatch." 
        canonical="/get-a-tow-providence"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/c784f276-44ba-40c1-b4b8-52ca0de8b59d.png"
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
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-black tracking-tight">Colorado Towing Services</span>
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
            src="https://vibe.filesafe.space/1782851734624712581/assets/c784f276-44ba-40c1-b4b8-52ca0de8b59d.png" 
            alt="Professional flatbed tow truck operating at night in Colorado" 
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
              Providence Towing <br className="hidden md:block" />
              <span className="text-primary">Fast & Local.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
              Fast, reliable towing and roadside assistance for cars, SUVs, and light trucks anywhere in Colorado.
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
              <span className="font-bold">Colorado Experts</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <span className="font-bold">Damage-Free Towing</span>
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
                <img src="https://vibe.filesafe.space/1782851734624712581/assets/2f4d8c65-c4f9-4f30-9a36-c563eea5b046.png" alt="Professional Car Towing Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Car Towing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Safe, damage-free flatbed towing for cars, SUVs, and light trucks. Fast response times anywhere in Colorado.</p>
                <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={phoneLink} onClick={handleCallClick}>Call For Tow</a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm group">
              <div className="aspect-video relative">
                <img src="https://vibe.filesafe.space/1782851734624712581/assets/7bf73ee4-75fa-4fd1-bc40-cadf7ff2ecd0.png" alt="Emergency Roadside Assistance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Roadside Assistance</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Flat tire changes, battery jump starts, and fuel delivery. We'll get you back on the road safely and quickly.</p>
                <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={phoneLink} onClick={handleCallClick}>Call For Assistance</a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm group">
              <div className="aspect-video relative">
                <img src="https://vibe.filesafe.space/1782851734624712581/assets/1e5bbbd2-338f-49a5-a18e-97e27d7cfcf5.png" alt="Professional Car Lockout Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Car Lockouts</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Locked your keys inside? Our professional technicians can safely unlock any vehicle without causing damage.</p>
                <Button className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={phoneLink} onClick={handleCallClick}>Call For Lockout</a>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Serving the Providence Area</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you are stuck downtown, on the highway, or in surrounding neighborhoods, our dispatchers are standing by.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            We know the local roads and will get to you quickly, day or night.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={phoneLink} onClick={handleCallClick}>
              <PhoneCall className="mr-2 h-6 w-6" />
              Dispatch a Tow Truck Now
            </a>
          </Button>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Trusted by Providence Drivers</h2>
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
                How fast can you get to me in Providence?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We strive for rapid response, typically arriving within 15-30 minutes anywhere in the Providence area, depending on traffic conditions. Our 24/7 dispatch ensures the closest truck is sent immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                Do you tow all types of cars?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes! We tow all passenger vehicles, including sedans, SUVs, minivans, light trucks, and luxury or lowered cars using our specialized flatbed tow trucks to ensure damage-free transport.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                How much does a tow cost in Colorado?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Pricing varies based on the distance of the tow and the specific service needed. We provide transparent, upfront estimates before dispatching our team. Call us directly for an immediate quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                Can you unlock my car without damaging it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. Our technicians use professional, specialized tools designed to safely unlock your vehicle without causing any damage to the door, window, or locking mechanism.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vibe.filesafe.space/1782851734624712581/assets/e74290f7-cc45-4601-9642-2c49807ac82e.png" 
            alt="Modern fleet of light duty tow trucks" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 [text-shadow:_0_1px_3px_rgba(0,0,0,0.3)]">Don't Wait. Get Help Now.</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto [text-shadow:_0_1px_3px_rgba(0,0,0,0.3)]">Operators are standing by 24/7 to dispatch the right equipment to your location in Colorado immediately.</p>
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
