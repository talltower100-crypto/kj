import { ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen pt-20 pb-24 bg-background">
<SEOHead 
        title="About Our Towing Company in Denver | The Towing Company LLC" 
        description="Learn about The Towing Company LLC, Denver's trusted towing experts. We provide fast response, honest pricing, and professional service 24/7."
        canonical="/about"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRescue",
          "name": "The Towing Company LLC",
          "telephone": "+17204164800",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Denver",
            "addressRegion": "CO"
          }
        })}
      />
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Denver Towing Company</h1>
          <p className="text-xl text-muted-foreground">
            We are a local towing company that serves Denver, Aurora, and the whole Front Range. 
          </p>
          <p className="text-xl text-muted-foreground mt-4">
            Whether your car breaks down on Colfax Ave or you get a flat on E-470, our team is ready to help you fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Core Services</h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                <Link to="/services/flatbed-towing" className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Flatbed Towing</Link>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                <Link to="/services/motorcycle-towing" className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Motorcycle Towing</Link>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                <Link to="/services/roadside-assistance" className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Roadside Assistance</Link>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                <Link to="/services/battery-jump-starting" className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Battery Jump Starts</Link>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                <Link to="/services/car-lockouts" className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Vehicle Lockouts</Link>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                <Link to="/24-hour-towing" className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">24 Hour Towing</Link>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Why Choose The Towing Company LLC?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">24/7 Dispatch Center</div>
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">Professional Operators</div>
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">Fully Insured & Bonded</div>
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">Modern Flatbed Tow Trucks</div>
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">Damage-Free Transport</div>
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">Local Colorado Experts</div>
              <div className="bg-card border border-border p-4 rounded-lg font-bold flex items-center justify-center text-center">Transparent Pricing</div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Meet Mike — The Owner</h2>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              Mike started The Towing Company LLC with a simple goal: to give the Denver Metro area honest and safe towing.
            </p>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              He has worked in towing for over 15 years. Mike knows how to handle bad weather near Red Rocks and heavy traffic in Downtown Denver.
            </p>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              He trains his team to be the best. Whether you need a simple jump start or a tricky tow out of a ditch, Mike makes sure it is done right.
            </p>
            <ul className="space-y-3 mb-12 list-none text-muted-foreground text-lg">
              <li className="flex items-center gap-3"><ArrowRight className="text-primary h-5 w-5 shrink-0" /> <strong>15+ Years Local Experience</strong></li>
              <li className="flex items-center gap-3"><ArrowRight className="text-primary h-5 w-5 shrink-0" /> <strong>WreckMaster Certified</strong></li>
              <li className="flex items-center gap-3"><ArrowRight className="text-primary h-5 w-5 shrink-0" /> <strong>Fully Licensed & Insured</strong></li>
              <li className="flex items-center gap-3"><ArrowRight className="text-primary h-5 w-5 shrink-0" /> <strong>A+ Better Business Bureau Rating</strong></li>
              <li>Damage-free towing expert</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Where We Work</h2>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              We send our tow trucks all over the Denver Metro area. We drive I-25, I-70, and E-470 every single day.
            </p>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              We help drivers in Aurora, Denver, Centennial, Cherry Creek, and near the airport (DIA).
            </p>
            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
              Call us right now at <a href="tel:+17204164800" className="text-primary font-bold hover:underline">+1 720-416-4800</a> for fast help.
            </p>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mt-12">
              <p className="text-foreground text-lg leading-relaxed font-medium">
                The Towing Company LLC is your trusted partner for all your towing and roadside needs.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-medium mt-4">
                We keep you moving and minimize your downtime.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-medium mt-4">
                Trust our team for all your towing needs in Colorado.
              </p>
            </div>
          </div>

          <div className="relative space-y-8 h-fit lg:sticky lg:top-24">
            <div className="aspect-square rounded-lg overflow-hidden border border-border">
              <img 
                src="https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png" 
                alt="Professional tow truck operator from The Towing Company LLC in Denver" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <img 
                src="https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png" 
                alt="Safe and secure vehicle towing process used by our Denver team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
