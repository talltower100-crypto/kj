import { useParams, Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { PhoneCall, AlertTriangle, ArrowRight, TrendingUp, Users, Search, Target, Scale, HeartPulse, Home, Utensils, Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const industryData = {
  "real-estate": {
    name: "Real Estate & Development",
    icon: Building,
    heroSub: "Reliable heavy transport and towing for construction sites, developments, and property management.",
    painPoints: [
      { title: "Abandoned Vehicles", desc: "Clearing illegally parked or abandoned commercial vehicles from your properties." },
      { title: "Equipment Relocation", desc: "Moving heavy construction machinery safely between different development sites." },
      { title: "Site Obstructions", desc: "Removing massive obstacles or disabled trucks blocking crucial access points." }
    ],
    services: ["Heavy Equipment Transport", "Rotator Service", "Commercial Vehicle Recovery"],
    results: { stat: "24/7", text: "Availability for urgent property clearing and transport." },
    testimonial: { quote: "The Towing Company LLC moved our entire fleet of equipment safely and on schedule.", author: "David M., Lead Developer" },
    faqs: [
      { q: "Can you move heavy earth-moving equipment?", a: "Yes, we specialize in heavy equipment transport for bulldozers, excavators, and cranes." },
      { q: "Do you offer private property towing?", a: "We handle large-scale commercial private property impounds and abandoned vehicle removals." },
      { q: "Can you lift equipment over walls or fences?", a: "Our rotator service provides 360-degree lifting capabilities to move loads over obstacles." },
      { q: "How fast can you clear a blocked entrance?", a: "We offer 24/7 emergency dispatch to clear blocked commercial entrances immediately." }
    ]
  },
  "healthcare": {
    name: "Healthcare & Medical",
    icon: HeartPulse,
    heroSub: "Specialized towing and transport for mobile medical units, ambulances, and emergency generators.",
    painPoints: [
      { title: "Delicate Equipment", desc: "Transporting highly sensitive and expensive mobile medical units without damage." },
      { title: "Emergency Power Failures", desc: "Needing massive backup generators transported to facilities immediately." },
      { title: "Ambulance Breakdowns", desc: "Disabled emergency vehicles requiring immediate, safe recovery." }
    ],
    services: ["Bus Towing", "Heavy Equipment Transport", "24 Hour Heavy Duty Towing"],
    results: { stat: "100%", text: "Incident-free transport for sensitive medical units." },
    testimonial: { quote: "When our mobile MRI unit broke down, their specialized underlift equipment handled the delicate recovery perfectly.", author: "Dr. Robert C., Hospital Administrator" },
    faqs: [
      { q: "Can you tow specialized medical trailers?", a: "Yes, we have the precise equipment needed to tow delicate mobile clinics and MRI trailers." },
      { q: "Do you transport hospital generators?", a: "We provide heavy equipment transport for massive industrial backup generators." },
      { q: "Is your service available for 24/7 emergencies?", a: "Absolutely. We provide round-the-clock emergency towing for all medical transport vehicles." },
      { q: "How do you protect sensitive equipment during transport?", a: "We use advanced suspension systems and specialized rigging to ensure a completely smooth ride." }
    ]
  },
  "legal": {
    name: "Legal & Municipal",
    icon: Scale,
    heroSub: "Secure commercial recovery, accident clearing, and evidence transport for law enforcement and legal firms.",
    painPoints: [
      { title: "Chain of Custody", desc: "Maintaining secure transport for vehicles involved in ongoing investigations." },
      { title: "Complex Accident Scenes", desc: "Clearing multi-vehicle commercial accidents safely and efficiently." },
      { title: "Secure Storage Needs", desc: "Finding safe, monitored holding areas for massive commercial vehicles." }
    ],
    services: ["Heavy Duty Recovery", "Rotator Service", "Trailer Towing"],
    results: { stat: "1st", text: "Choice for complex municipal accident recoveries." },
    testimonial: { quote: "They are our go-to partner for complex accident recoveries. Their professionalism and secure transport are unmatched.", author: "Michael O., Municipal Coordinator" },
    faqs: [
      { q: "Do you work with local law enforcement?", a: "Yes, we frequently partner with local and state police to clear major commercial accidents." },
      { q: "Can you recover completely overturned tractor-trailers?", a: "Our heavy-duty rotators can upright and recover fully loaded, overturned commercial vehicles." },
      { q: "Do you provide secure transport for evidence?", a: "We ensure strict chain-of-custody protocols when transporting vehicles for legal or forensic purposes." },
      { q: "Are your operators certified for complex recoveries?", a: "All our heavy recovery operators are fully licensed, bonded, and WreckMaster certified." }
    ]
  },
  "home-services": {
    name: "Home Services & Trades",
    icon: Home,
    heroSub: "Minimizing fleet downtime for plumbers, electricians, HVAC technicians, and landscapers.",
    painPoints: [
      { title: "Fleet Downtime", desc: "Every hour a work truck is down costs your business money and angers customers." },
      { title: "Stuck Equipment", desc: "Landscaping and construction equipment bogged down in mud or difficult terrain." },
      { title: "Fully Loaded Trucks", desc: "Towing heavy box trucks filled with valuable tools and materials." }
    ],
    services: ["Box Truck Towing", "Truck Winching", "Roadside Truck Repair"],
    results: { stat: "Fast", text: "Dispatch times to get your crews back on the road." },
    testimonial: { quote: "Our fully loaded plumbing box truck broke down on a busy route, and they had us towed and repaired in record time.", author: "Dave M., HVAC & Plumbing Owner" },
    faqs: [
      { q: "Can you tow fully loaded box trucks?", a: "Yes, our heavy-duty wreckers can easily tow loaded box trucks and utility vehicles." },
      { q: "Do you offer roadside repairs for work trucks?", a: "We provide mobile roadside repair to fix minor issues like blown tires or air lines on the spot." },
      { q: "Can you winch out stuck landscaping equipment?", a: "Our heavy-duty winching service can extract equipment from mud, snow, or ditches." },
      { q: "Do you set up corporate fleet accounts?", a: "Yes, we offer priority service and streamlined billing for local home service fleets." }
    ]
  },
  "restaurants": {
    name: "Restaurants & Food Service",
    icon: Utensils,
    heroSub: "Emergency towing and fuel delivery for refrigerated trucks, food trucks, and food distributors.",
    painPoints: [
      { title: "Inventory Spoilage", desc: "Refrigerated trucks breaking down and risking thousands in spoiled food." },
      { title: "Food Truck Relocation", desc: "Moving massive, heavy custom food trucks safely to events or commissaries." },
      { title: "Fuel Emergencies", desc: "Delivery trucks running out of diesel during crucial routing schedules." }
    ],
    services: ["Box Truck Towing", "Diesel Fuel Delivery", "Trailer Towing"],
    results: { stat: "Zero", text: "Lost inventory when utilizing our rapid response." },
    testimonial: { quote: "Our refrigerated delivery truck lost power. Their rapid tow to the repair facility saved thousands of dollars in inventory.", author: "Maria R., Distributor" },
    faqs: [
      { q: "Do you tow refrigerated box trucks?", a: "Yes, we specialize in the safe transport of fully loaded refrigerated commercial vehicles." },
      { q: "Can you deliver emergency diesel fuel?", a: "We offer 24/7 emergency diesel fuel delivery directly to your stalled delivery truck." },
      { q: "Do you transport large food trucks?", a: "We have the specialized underlifts required to tow heavy, modified food trucks without damage." },
      { q: "How quickly can you respond to a breakdown?", a: "We prioritize commercial transport vehicles to minimize your downtime and prevent spoilage." }
    ]
  }
};

export default function Industry() {
  const { industry } = useParams<{ industry: string }>();
  const data = industry ? industryData[industry as keyof typeof industryData] : null;

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Industry not found</div>;
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      <SEOHead 
        title={`Towing & Recovery for ${data.name} in Colorado`}
        description={`The Towing Company LLC provides expert towing and recovery for ${data.name} businesses in Denver. Contact us for 24/7 commercial services.`}
        canonical={`/industries/${industry}`}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container px-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 text-primary">
            <Icon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Towing & Recovery for <span className="text-primary">{data.name}</span> in Denver
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            {data.heroSub}
          </p>
          <Button size="lg" className="text-lg px-8 py-6 font-bold" asChild>
            <a href="tel:+17204164800">
              <PhoneCall className="mr-2 h-6 w-6" />
              Call Now: +1 720-416-4800
            </a>
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            3 Problems {data.name} Businesses Face Online
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.painPoints.map((point, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <AlertTriangle className="h-10 w-10 text-destructive mb-6" />
                <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                <p className="text-muted-foreground">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services for {data.name}</h2>
            <p className="text-lg text-muted-foreground">
              We deploy specialized towing and recovery equipment tailored specifically to the {data.name.toLowerCase()} industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.services.map((service, i) => (
              <div key={i} className="flex items-center gap-4 bg-background p-6 rounded-xl border border-border">
                <ArrowRight className="h-8 w-8 text-primary shrink-0" />
                <span className="text-lg font-bold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Testimonial */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary text-primary-foreground p-12 rounded-3xl text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <div className="text-6xl font-extrabold mb-4">{data.results.stat}</div>
              <p className="text-xl font-medium opacity-90">{data.results.text}</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Proven Results in {data.name}</h2>
              <blockquote className="text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
                "{data.testimonial.quote}"
              </blockquote>
              <div className="font-bold text-lg pl-6">— {data.testimonial.author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-bold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need towing & recovery for your {data.name.toLowerCase()} business?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today for immediate 24/7 dispatch or to set up a commercial fleet account.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold" asChild>
            <a href="tel:+17204164800">
              <PhoneCall className="mr-2 h-6 w-6" />
              Call +1 720-416-4800
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
