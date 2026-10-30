import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "I-95 Multi-Vehicle Commercial Recovery",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/d97c8bdd-9154-4438-9cd0-77a6d4b353f7.png",
    challenge: "A winter storm caused a jackknifed semi-truck involving two box trucks, blocking northbound lanes.",
    solution: "Dispatched two wreckers and one rotator within 15 minutes. The rotator lifted the box trucks clear safely.",
    result: "All lanes cleared in under 2 hours with zero additional damage to the vehicles or cargo.",
    tags: ["Accident Recovery", "Rotator Service", "Winter Operations"]
  },
  {
    title: "Overweight Load Shift Correction at Weigh Station",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/e8ca0021-870a-47eb-a3ea-15bef465dcf9.png",
    challenge: "A flatbed carrying machinery experienced a load shift, causing the trailer to lean dangerously.",
    solution: "Deployed our specialized load shift team. Safely lifted and repositioned the 15,000 lb machinery.",
    result: "Load was properly secured and passed weigh station inspection, avoiding massive fines.",
    tags: ["Load Shift", "Compliance", "Equipment Transport"]
  },
  {
    title: "Off-Road Excavator Extraction",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/81cb13d6-a6f8-4cae-a1ab-92c144796366.png",
    challenge: "A 60,000 lb excavator became deeply submerged in mud at a construction site, risking delays.",
    solution: "Utilized heavy-duty winching from solid ground. Set up complex rigging to multiply pulling power.",
    result: "Excavator was safely extracted in 3 hours without mechanical damage, allowing work to resume.",
    tags: ["Heavy Equipment", "Winching", "Off-Road"]
  }
];

import { SEOHead } from "@/components/SEOHead";

export default function CaseStudies() {
  return (
    <main className="min-h-screen pt-20 pb-24 bg-background">
      <SEOHead 
        title="Case Studies | The Towing Company LLC" 
        description="See real-world examples of Denver towing and recovery by The Towing Company LLC. Check out our successful accident and equipment recoveries." 
        canonical="/case-studies"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/d97c8bdd-9154-4438-9cd0-77a6d4b353f7.png"
      />
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Towing Case Studies in Denver</h1>
          <p className="text-xl text-muted-foreground">
            Real-world examples of our recovery expertise in action across Colorado.
          </p>
        </div>



        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 bg-muted flex flex-col border-r border-border">
                <img src={study.image} alt={`Case study: ${study.title} by The Towing Company LLC`} className="w-full h-48 object-cover border-b border-border" />
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map(tag => (
                      <span key={tag} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-destructive mb-2 flex items-center gap-2">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div className="bg-background border border-border p-4 rounded-xl">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500" /> The Result
                    </h3>
                    <p className="text-muted-foreground font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Need expert recovery services?</h3>
          <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
            Contact Our Dispatch Team <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}