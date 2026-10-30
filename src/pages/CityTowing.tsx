import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall, MapPin, Truck, Shield, Clock } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const cityData: Record<string, { name: string, image: string, landmarks: string, highways: string, streets: string }> = {
  "aurora": { name: "Aurora", image: "https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png", landmarks: "Cherry Creek State Park and the Aurora Reservoir", highways: "I-225 and E-470", streets: "Colfax Avenue and Parker Road" },
  "denver": { name: "Denver", image: "https://vibe.filesafe.space/1782851734624712581/assets/f43b580b-1c71-423a-9d9f-b954ce35bfbf.png", landmarks: "Coors Field and the Denver Art Museum", highways: "I-25 and I-70", streets: "Colorado Boulevard and Speer Boulevard" },
  "centennial": { name: "Centennial", image: "https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png", landmarks: "Centennial Center Park", highways: "I-25 and C-470", streets: "Arapahoe Road and Dry Creek Road" },
  "cherry-creek": { name: "Cherry Creek", image: "https://vibe.filesafe.space/1782851734624712581/assets/f43b580b-1c71-423a-9d9f-b954ce35bfbf.png", landmarks: "Cherry Creek Shopping Center", highways: "Colorado Blvd", streets: "1st Avenue and University Boulevard" },
  "englewood": { name: "Englewood", image: "https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png", landmarks: "the Gothic Theatre", highways: "US-285 and Santa Fe Drive", streets: "Broadway and Hampden Avenue" },
  "littleton": { name: "Littleton", image: "https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png", landmarks: "Historic Downtown Littleton and Hudson Gardens", highways: "C-470 and Santa Fe Drive", streets: "Bowles Avenue and Littleton Boulevard" },
  "lakewood": { name: "Lakewood", image: "https://vibe.filesafe.space/1782851734624712581/assets/6d370b0e-e1f4-4e69-8598-66165b406f28.png", landmarks: "Belmar and Bear Creek Lake Park", highways: "US-6 and C-470", streets: "Wadsworth Boulevard and Kipling Street" },
  "arvada": { name: "Arvada", image: "https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png", landmarks: "Olde Town Arvada", highways: "I-70 and I-76", streets: "Wadsworth Bypass and Ralston Road" },
  "westminster": { name: "Westminster", image: "https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png", landmarks: "Standley Lake and the Westminster Promenade", highways: "US-36 and I-25", streets: "104th Avenue and Sheridan Boulevard" },
  "thornton": { name: "Thornton", image: "https://vibe.filesafe.space/1782851734624712581/assets/6d370b0e-e1f4-4e69-8598-66165b406f28.png", landmarks: "Denver Premium Outlets", highways: "I-25 and E-470", streets: "120th Avenue and Colorado Boulevard" },
  "commerce-city": { name: "Commerce City", image: "https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png", landmarks: "Dick's Sporting Goods Park", highways: "I-270 and I-76", streets: "Vasquez Boulevard and Quebec Street" },
  "glendale": { name: "Glendale", image: "https://vibe.filesafe.space/1782851734624712581/assets/f43b580b-1c71-423a-9d9f-b954ce35bfbf.png", landmarks: "Infinity Park", highways: "Colorado Blvd", streets: "Cherry Creek South Drive and Leetsdale Drive" },
  "greenwood-village": { name: "Greenwood Village", image: "https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png", landmarks: "Fiddler's Green Amphitheatre", highways: "I-25 and I-225", streets: "Orchard Road and Yosemite Street" },
};

export default function CityTowing() {
  const { city } = useParams();
  const data = city ? cityData[city] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <Button asChild>
            <Link to="/locations">View All Locations</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-24 bg-background">
      <SEOHead 
        title={`Towing & Roadside Assistance in ${data.name}, CO | 24/7 Service`} 
        description={`Need towing in ${data.name}? The Towing Company LLC offers fast 24/7 roadside assistance and towing services for cars and light trucks.`} 
        canonical={`/towing/${city}`}
        ogImage={data.image}
      />
      
      {/* Hero Section */}
      <div className="bg-card border-b border-border py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 font-semibold">
              <MapPin className="h-4 w-4" />
              Serving {data.name}, Colorado
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing & Roadside in {data.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fast, reliable, and professional towing and roadside assistance available 24 hours a day, 7 days a week in {data.name}. From family SUVs to everyday cars, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-bold text-lg px-8 h-14" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-2 h-6 w-6" />
                  Call +1 720-416-4800 Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When your vehicle breaks down near {data.landmarks} or on busy routes like {data.highways}, it demands immediate attention.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            The Towing Company LLC is the premier provider of towing and roadside assistance across the entire {data.name} area.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our modern fleet and trained operators are always on standby to assist you, whether you are stuck on {data.streets} or anywhere else in {data.name}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We understand the unique logistical challenges of operating in {data.name}, from tight downtown streets to high-speed corridors.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our team has the local knowledge and expertise to handle any situation safely and efficiently.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We specialize in <Link to="/services/car-towing" className="text-primary hover:underline">towing cars</Link>, SUVs, <Link to="/services/motorcycle-towing" className="text-primary hover:underline">motorcycles</Link>, and providing <Link to="/services/battery-jump-starting" className="text-primary hover:underline">jump starts</Link> or <Link to="/services/vehicle-lockouts" className="text-primary hover:underline">lockouts</Link> right where you need them.
          </p>

          <img 
            src={data.image} 
            alt={`Professional tow truck providing emergency service in ${data.name}, Colorado`} 
            className="w-full h-80 md:h-[400px] object-cover rounded-lg shadow-sm my-10 border border-border" 
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">Comprehensive Towing Services in {data.name}</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our service portfolio is designed to meet the diverse needs of {data.name}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We offer much more than just standard towing for passenger vehicles.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our capabilities include <Link to="/services/flatbed-towing" className="text-primary hover:underline">flatbed towing</Link>, <Link to="/services/tire-change" className="text-primary hover:underline">tire changes</Link>, and battery replacements.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            If your vehicle is stranded, we can transport it safely to your preferred shop.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-card p-6 rounded-xl border border-border shadow-md">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Breakdowns don't wait for business hours. Our {data.name} dispatch team is available around the clock.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-md">
              <Truck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Fleet</h3>
              <p className="text-muted-foreground">State-of-the-art flatbeds and light-duty wreckers capable of handling all everyday vehicles safely.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-md">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">Licensed, bonded, and fully insured for complete peace of mind during complex recoveries.</p>
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Time is essential when you are stranded on the side of the road, especially on busy stretches like {data.highways}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            You are risking safety and delayed schedules in {data.name} if you wait too long.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            That is why we prioritize rapid response times above all else, ensuring we get to you quickly.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When you call us, you speak directly to our local dispatchers who know {data.name} inside and out.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We immediately send the closest appropriate wrecker to your location, whether you are at {data.landmarks} or navigating {data.streets}.
          </p>

          <img 
            src="https://vibe.filesafe.space/1782851734624712581/assets/6d370b0e-e1f4-4e69-8598-66165b406f28.png" 
            alt={`The Towing Company LLC providing reliable roadside assistance and towing in ${data.name}`} 
            className="w-full h-80 md:h-[400px] object-cover rounded-lg shadow-sm my-10 border border-border" 
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">Safety and Professionalism First</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Safety is the cornerstone of our operations in {data.name}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Towing is dangerous work, and we take every precaution to protect you.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our team undergoes rigorous training and maintains proper certifications.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We adhere strictly to all local, state, and federal safety regulations.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We regularly partner with local law enforcement and emergency responders across {data.name}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our operators are trained to manage traffic flow around incidents on busy roads like {data.streets} and {data.highways}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We mitigate environmental hazards, ensuring the site is secure before recovery begins.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Don't trust your valuable vehicle to just any towing company. You can <Link to="/contact" className="text-primary hover:underline">contact our team</Link> anytime.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Choose the proven experts at <Link to="/about" className="text-primary hover:underline">The Towing Company LLC</Link> for all your needs.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We provide transparent pricing, honest communication, and unparalleled service.
          </p>

          <div className="mt-16 bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need a Tow in {data.name}?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Our tow trucks are standing by. Call us now for immediate dispatch.
              </p>
              <Button size="lg" className="font-bold text-lg px-8 h-14 shadow-xl hover:scale-105 transition-all" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-2 h-6 w-6 animate-shake" />
                  Call +1 720-416-4800
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
