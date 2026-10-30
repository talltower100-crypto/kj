import { PhoneCall, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

export default function TwentyFourHourTowing() {
  return (
    <main className="min-h-screen pt-20 pb-24 bg-background">
      <SEOHead 
        title="24 Hour Towing & Emergency Assistance | The Towing Company LLC" 
        description="Need 24-hour towing in Denver? The Towing Company LLC offers round-the-clock emergency towing and roadside services. We are available 24/7." 
        canonical="/24-hour-towing"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/f43b580b-1c71-423a-9d9f-b954ce35bfbf.png"
      />
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">24 Hour Towing in Denver</h1>
          <p className="text-xl text-muted-foreground">
            Round-the-clock emergency towing and roadside services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            When your vehicle breaks down, the situation requires immediate attention.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            The Towing Company LLC provides the highest standard of towing and roadside assistance.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Our fleet of modern flatbeds and trained operators are available 24/7 for emergencies.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We understand that breakdowns do not follow a convenient 9-to-5 schedule.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Whether you are stuck on I-70, in a Downtown Denver parking lot, or in your own Aurora driveway, we can help.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            A disabled vehicle on a busy road creates a safety hazard for you and other drivers.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            This is exactly why our 24 Hour Towing service is our cornerstone.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We maintain a strategic dispatch system that ensures the closest tow truck is sent right away.
          </p>

          <img src="https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png" alt="24 Hour Towing service tow truck operating at night in Denver" className="w-full h-80 object-cover rounded-lg my-10 border border-border" />

          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We handle all types of passenger vehicles safely and securely.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            From compact cars and luxury sedans to large SUVs and light trucks, we have the right equipment.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Attempting to move vehicles without the proper gear can lead to costly damage.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We utilize state-of-the-art flatbeds and wheel-lift wreckers to ensure damage-free transport.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Our night-shift operators undergo the exact same rigorous training as our day-shift.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We prioritize your safety above all else when arriving at a breakdown scene.
          </p>

          <img src="https://vibe.filesafe.space/1782851734624712581/assets/6d370b0e-e1f4-4e69-8598-66165b406f28.png" alt="Professional nighttime tow truck operator providing 24/7 roadside assistance" className="w-full h-80 object-cover rounded-lg my-10 border border-border" />

          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Whether you need a tow to the mechanic, a jump start, or help with a flat tire, you can rely on us.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We are known for honest pricing, transparent communication, and exceptional service.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            When disaster strikes at night, do not trust your vehicle to just anyone.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Call the experts at The Towing Company LLC. We have the right equipment.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We have the experienced personnel to get the job done right, the very first time.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Save our dispatch number today. When you need towing, you need it immediately.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            We are always standing by, ready to deploy our fleet and get you back on the road.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Our commitment to 24/7 availability is unwavering.
          </p>

          <div className="mt-16 bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Our dispatch team is available right now. Call us for rapid response anywhere in Colorado.
              </p>
              <Button size="lg" className="w-full md:w-auto text-2xl h-20 px-12 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:scale-105 transition-all" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-3 h-8 w-8 animate-shake" />
                  +1 720-416-4800
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
