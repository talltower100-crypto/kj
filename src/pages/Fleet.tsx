import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Truck, Shield, Wrench, Settings, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Fleet() {
  const equipment = [
    {
      title: "Flatbed Tow Trucks",
      image: "https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png",
      description: "Our modern flatbed tow trucks are perfect for transporting all types of passenger vehicles safely. By keeping all four wheels off the ground, we ensure zero wear and tear on your vehicle during transit.",
      specs: [
        "Low-Angle Approach Beds",
        "Soft-Strap Tie Down System",
        "Hydraulic Winches",
        "Air Ride Suspension"
      ],
      idealFor: "All-wheel drive vehicles, luxury cars, classic cars, SUVs, and severely damaged vehicles."
    },
    {
      title: "Light Duty Wreckers",
      image: "https://vibe.filesafe.space/1782851734624712581/assets/f43b580b-1c71-423a-9d9f-b954ce35bfbf.png",
      description: "Our wheel-lift wreckers are highly maneuverable, making them perfect for extracting vehicles from tight spaces like parking garages or narrow streets.",
      specs: [
        "Advanced Wheel-Lift Technology",
        "Damage-Free Securing",
        "Low Profile Design",
        "High-Visibility Safety Lighting"
      ],
      idealFor: "Standard passenger cars, front-wheel drive vehicles, and tight-clearance extractions."
    },
    {
      title: "Roadside Assistance Vehicles",
      image: "https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png",
      description: "Our nimble service vehicles are fully equipped to handle common roadside emergencies quickly and safely, getting you back on the road without needing a tow.",
      specs: [
        "High-Output Jump Starters",
        "Professional Lockout Kits",
        "Air Compressors",
        "Fuel Transfer Equipment"
      ],
      idealFor: "Dead batteries, flat tires, vehicle lockouts, and empty fuel tanks."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <SEOHead 
        title="Our Fleet & Equipment | The Towing Company LLC" 
        description="Explore the modern tow truck fleet at The Towing Company LLC. We have the right equipment for safe, damage-free towing in Denver and Aurora."
        canonical="/fleet"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png"
      />
      
      {/* Hero Section */}
      <section className="bg-muted py-20 border-b border-border">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Towing Fleet in Denver</h1>
          <p className="text-lg text-muted-foreground">
            Having the right equipment is the difference between a safe recovery and a disaster on Colorado's steep mountain passes or tight Denver streets.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            We invest heavily in state-of-the-art wreckers, rotators, and specialized gear.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-6">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Impeccably Maintained</h3>
              <p className="text-muted-foreground">Our fleet undergoes rigorous daily inspections and preventative maintenance to ensure absolute reliability.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Modern Technology</h3>
              <p className="text-muted-foreground">Equipped with the latest recovery technology, GPS tracking, and advanced safety systems.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Right Tool for the Job</h3>
              <p className="text-muted-foreground">A diverse fleet ensures we dispatch the exact equipment needed for your specific situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-24 bg-card">
        <div className="container px-4 max-w-6xl mx-auto space-y-24">
          {equipment.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img src={item.image} alt={`${item.title} used for professional towing services by The Towing Company LLC`} className="w-full h-full object-cover" />
              </div>
              
              <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Technical Specifications
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Ideal For:</h4>
                  <p className="font-medium">{item.idealFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Towing Assistance?</h2>
          <p className="text-xl mb-10 opacity-90">
            Our dispatchers are standing by 24/7. We will send the right equipment and the right personnel to get your vehicle back on the road safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:+17204164800">
                <PhoneCall className="mr-2 h-6 w-6" />
                +1 720-416-4800
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto font-bold border-white text-white hover:bg-white/10" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
