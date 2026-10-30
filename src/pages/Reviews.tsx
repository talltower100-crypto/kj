import { SEOHead } from "@/components/SEOHead";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Stephanie Irons",
      role: "Local Guide",
      text: "Mike was responsive, on time, professional & had very fair pricing for the tow service we needed for our work vehicle. As a fellow small business owner, I highly recommend this small business!",
      rating: 5,
      source: "Google Review"
    },
    {
      name: "Leah Recor",
      role: "Customer",
      text: "I got a flat one evening on the way home. I called Roberto at the Towing Company and scheduled to have him meet me the next morning to tow me to the tire shop. He was professional on the phone and called the next morning to let me know...",
      rating: 5,
      source: "Google Review"
    },
    {
      name: "Melissa N",
      role: "Customer",
      text: "My car died, I Googled towing companies near me, and the first 4 didn't answer (rude), I tried one more, and luckily, Roberto answered. He was professional and kind, answered my questions, and gave me a rate and an ETA. He arrived right on time.",
      rating: 5,
      source: "Google Review"
    },
    {
      name: "Wendy-Kay Beaman",
      role: "Customer",
      text: "Many Thanks to Roberto!! He was hero of the day and went out of his way to help me. He was so kind to me even after I sent him to the wrong address at first, in heavy traffic to a congested construction area...",
      rating: 5,
      source: "Google Review"
    },
    {
      name: "An Khang",
      role: "Customer",
      text: "Reasonable price. The towing price is reasonable, the driver is nice and professional, we had a great chat on the way. What else that I could ask for.?Great experience.",
      rating: 5,
      source: "Google Review"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <SEOHead 
        title="Verified Customer Reviews | The Towing Company LLC" 
        description="Read reviews for The Towing Company LLC. See why local drivers trust us for professional towing in Denver and reliable roadside assistance."
        canonical="/reviews"
      />
      
      {/* Hero Section */}
      <section className="bg-muted py-20 border-b border-border">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-6">
            <Star className="h-4 w-4 fill-primary" />
            <span>4.9/5 Average Rating</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Towing Customer Reviews in Denver</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Don't just take our word for it. Read real reviews from local drivers and businesses who rely on our professional towing and recovery services.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-black text-primary">15+</span>
              <span className="text-sm font-bold text-muted-foreground uppercase">Years Exp.</span>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-black text-primary">100%</span>
              <span className="text-sm font-bold text-muted-foreground uppercase">Licensed</span>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-black text-primary">24/7</span>
              <span className="text-sm font-bold text-muted-foreground uppercase">Dispatch</span>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center shadow-sm">
              <span className="text-3xl font-black text-primary">5★</span>
              <span className="text-sm font-bold text-muted-foreground uppercase">Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative flex flex-col h-full shadow-lg hover:-translate-y-1 hover:border-primary/50 transition-all"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                <div className="flex text-primary mb-6">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 italic flex-grow leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-6 border-t border-border">
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-muted-foreground">{review.role}</span>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {review.source}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
