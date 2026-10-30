import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneCall, ArrowRight, Shield, Clock, MapPin, Wrench, Star, ExternalLink } from "lucide-react";
import TowTruckScene from "@/components/TowTruckScene";
import { servicesData } from "./ServiceDetail";

import { SEOHead } from "@/components/SEOHead";
export default function Index() {
  const allServices = Object.keys(servicesData).map(key => ({
    slug: key,
    title: servicesData[key].title
  }));

  return (
    <main className="flex flex-col min-h-screen">
      <SEOHead 
        title="Emergency Towing in Denver | The Towing Company LLC" 
        description="Emergency towing in Denver by The Towing Company LLC. Fast response, honest pricing, and 24/7 roadside assistance. Call now for immediate help." 
        canonical="/"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/90cae64f-83cb-4f24-8579-54c4489c276e.png"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRescue",
          "name": "The Towing Company LLC",
          "image": "https://vibe.filesafe.space/1782851734624712581/assets/90cae64f-83cb-4f24-8579-54c4489c276e.png",
          "@id": "https://thetowingcompanyllc.com",
          "url": "https://thetowingcompanyllc.com",
          "telephone": "+17204164800",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "11196 E Ada Pl",
            "addressLocality": "Aurora",
            "addressRegion": "CO",
            "postalCode": "80012",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.7392,
            "longitude": -104.9903
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://vibe.filesafe.space/1782851734624712581/assets/90cae64f-83cb-4f24-8579-54c4489c276e.png" alt="Scenic view of Colorado Mountains representing our local Denver towing service area" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">24/7 Emergency Dispatch</span>
            </div>
            
<h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white uppercase leading-[1.1]">
              Emergency Towing in <br className="hidden md:block" />
              <span className="text-primary">Denver & Aurora</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium">
              We provide fast, honest towing in Denver and Aurora and all surrounding areas. With an average 35-minute response time and over 5,000 cars towed locally, we get you home safe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-2 h-6 w-6 animate-shake" />
                  Call +1 720-416-4800
                </a>
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]" asChild>
                <Link to="/services">
                  See Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="relative z-20 -mt-16 container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "24/7 Availability", desc: "Always ready when you need us most, 365 days a year." },
            { icon: Shield, title: "Fully Insured", desc: "Complete protection and peace of mind for your assets." },
            { icon: Wrench, title: "Modern Fleet", desc: "State-of-the-art flatbeds and light-duty wreckers." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i} 
              className="bg-card/80 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl flex flex-col items-center text-center gap-4 hover:border-primary/50 hover:-translate-y-1 transition-all group"
            >
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold mb-6">Complete Denver Towing & Roadside Services</h2>
            <p className="text-lg text-muted-foreground">
              Got a dead battery on E-470? Locked out of your car in Downtown Denver? With over 5,000 successful rescues, we can fix it fast.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              We offer over 67 specialized services to handle any problem safely across the Front Range. Check current road conditions on the <a href="https://www.codot.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">CDOT website</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Car Towing", desc: "Fast, damage-free towing for everyday cars, SUVs, and light trucks." },
              { title: "Flatbed Towing", desc: "Safe and secure transport keeping all four wheels off the ground." },
              { title: "Motorcycle Towing", desc: "Specialized securing systems designed specifically for motorcycles." },
              { title: "24 Hour Roadside Assistance", desc: "Round-the-clock emergency support for breakdowns on the highway." },
              { title: "Battery Jump Starting", desc: "Rapid response battery services to get your vehicle started immediately." },
              { title: "Vehicle Lockouts", desc: "Professional and damage-free lockout services to get you back inside." },
              { title: "Tire Change", desc: "Fast and safe roadside tire changes for all vehicle types." },
              { title: "Vehicle Storage", desc: "Secure, 24/7 monitored vehicle storage facility for short or long-term needs." },
              { title: "Accident Recovery", desc: "Complete accident cleanup and vehicle recovery operations." }
            ].map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                key={service.title} 
                className="group relative p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground mb-6 relative z-10">
                  {service.desc}
                </p>
                <Link 
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform relative z-10"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

<div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">All Our Denver Towing Services</h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
              {allServices.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="text-sm px-3 py-1.5 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-primary">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Work in Action</h2>
              <p className="text-lg text-muted-foreground">
                Take a look at some of our recent towing and roadside jobs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "https://vibe.filesafe.space/1782851734624712581/assets/d931a29c-d3ea-4aaa-8194-95151a432331.png", alt: "Flatbed tow truck safely transporting a vehicle on a Denver highway" },
              { src: "https://vibe.filesafe.space/1782851734624712581/assets/89312658-c715-4a3b-867d-f78a3496f313.png", alt: "Professional tow truck operator assisting a customer with a roadside tire change" },
              { src: "https://vibe.filesafe.space/1782851734624712581/assets/33db5406-1ce2-418a-b72f-f73b1c6392f4.png", alt: "Light duty wrecker tow truck safely towing an SUV in Colorado" }
            ].map((img, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} 
                className="relative aspect-video rounded-lg overflow-hidden group border border-border"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Professionals</h2>
            <p className="text-lg text-muted-foreground">
              Here is what drivers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Stephanie Irons", role: "Local Guide", text: "Mike was responsive, on time, professional & had very fair pricing for the tow service we needed for our work vehicle. As a fellow small business owner, I highly recommend this small business!" },
              { name: "Leah Recor", role: "Customer", text: "I got a flat one evening on the way home. I called Roberto at the Towing Company and scheduled to have him meet me the next morning to tow me to the tire shop. He was professional on the phone..." },
              { name: "Melissa N", role: "Customer", text: "My car died, I Googled towing companies near me, and the first 4 didn't answer (rude), I tried one more, and luckily, Roberto answered. He was professional and kind..." }
            ].map((t, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} 
                className="bg-card p-8 rounded-lg border border-border relative"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Coverage Area</h2>
            <p className="text-lg text-muted-foreground">
              We provide rapid response towing and roadside services from Aurora to Red Rocks, and everywhere in between.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Our strategic locations ensure we can reach you quickly when you need us most on I-25 or I-70.
            </p>
          </div>
          <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden border border-border">
            <iframe 
              src="https://maps.google.com/maps?q=The%20Towing%20Company%20LLC&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of The Towing Company LLC service area in Denver and Aurora"
            ></iframe>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Areas We Serve</h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
              {["aurora", "denver", "centennial", "cherry-creek", "englewood", "littleton", "lakewood", "arvada", "westminster", "thornton", "commerce-city", "glendale", "greenwood-village"].map((city) => (
                <Link key={city} to={`/towing/${city}`} className="text-sm px-4 py-2 bg-background border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-primary capitalize font-medium">
                  {city.replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & SEO Content Section */}
      <section className="py-24 bg-background border-t border-border overflow-hidden">
        <div className="container px-4 space-y-32">
          
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Local Towing You Can Trust</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Got a flat tire on Colfax Ave? Did your engine die near Red Rocks? We know how stressful that is.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We tow all types of cars, SUVs, and trucks. We do it fast and we do it right.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our tow trucks are ready 24/7. When Denver weather gets bad, we are still on the road.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't use old, unsafe methods. We use soft straps so your car doesn't get scratched.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We make sure your car gets to the shop looking exactly how it did when we picked it up.
              </p>
              <ul className="space-y-3 mt-4">
                {["State-of-the-art flatbeds", "Damage-free securing techniques", "Fast response times"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="text-primary h-6 w-6 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border"
            >
              <img src="https://vibe.filesafe.space/1782851734624712581/assets/01f49b58-e94e-43c8-9155-3fbbbfc13ece.png" alt="Flatbed tow truck providing emergency towing service on I-25 in Denver Colorado" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border order-2 md:order-1"
            >
              <img src="https://vibe.filesafe.space/1782851734624712581/assets/803e9986-48c9-4d38-8a8d-691f96a3f24c.png" alt="Professional tow truck operator safely loading a vehicle during a snowy winter day in Denver" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Safe Towing for Every Car</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We know Colorado roads. Potholes on I-70 and steep hills in the foothills can ruin your day.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We tow everything from small cars to big SUVs safely.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you drive an all-wheel-drive (AWD) car, you need a flatbed tow truck. We have them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our flatbeds keep your car off the ground. This stops your transmission from breaking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also move motorcycles, classic cars, and low sports cars without scraping the bumper.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stuck in a tight parking garage downtown? Our special trucks can pull you out safely.
              </p>
              <Button className="mt-4 text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]" size="lg" asChild>
                <Link to="/services">Explore All Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Fast Roadside Help, 24/7</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Breaking down in Denver traffic is scary. We get it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Being stuck on the side of I-25 with cars speeding by is dangerous. We want to get you to safety fast.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We always send the closest tow truck so you don't wait long.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sometimes you don't even need a tow! We can jump-start dead batteries ruined by the cold weather.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Locked your keys inside? Got a flat tire? Run out of gas? 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Just call us. We will fix the problem right there so you can drive home.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border"
            >
              <img src="https://vibe.filesafe.space/1782851734624712581/assets/ee157b5b-ac54-4f64-b07b-264f8ed5d37d.png" alt="Tow truck driver jump starting a stranded car battery in Denver" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border order-2 md:order-1"
            >
              <img src="https://vibe.filesafe.space/1782851734624712581/assets/c2dfc7fc-007a-43bc-8c6b-ae5e9dca08b5.png" alt="The Towing Company LLC modern fleet of tow trucks in Aurora and Denver Colorado" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Local Experts You Can Trust</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you hand over your keys, you need to know your car is safe. We promise honest pricing and no hidden fees.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Shield className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground">Fully Licensed & Insured</strong>
                    <span className="text-muted-foreground">We exceed state minimums for insurance and hold all required DOT operating authority.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Star className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground">WreckMaster Certified Operators</strong>
                    <span className="text-muted-foreground">All our operators undergo rigorous, continuous training in the latest safe recovery techniques.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <Shield className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-foreground">Trusted Partner</strong>
                    <span className="text-muted-foreground">We work closely with local law enforcement, motor clubs, and the Department of Transportation.</span>
                  </div>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From Aurora and Centennial to Cherry Creek and the roads near DIA, we are known for honest pricing, transparent communication, and exceptional service.
              </p>
              <div className="pt-4">
                <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]" asChild>
                  <a href="tel:+17204164800">
                    <PhoneCall className="mr-2 h-6 w-6 animate-shake" />
                    Call +1 720-416-4800
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}