import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How to Prepare Your Fleet for Winter in New England",
    slug: "how-to-prepare-your-fleet-for-winter",
    excerpt: "Winter weather presents unique challenges for commercial drivers. Learn how to winterize your heavy duty vehicles.",
    date: "Oct 15, 2025",
    author: "Dispatch Team",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/58ccf4b4-f9e7-4fc6-9a1d-bfe0c552e675.png",
    category: "Safety"
  },
  {
    title: "Understanding Rotator Tow Trucks: When Do You Need One?",
    slug: "understanding-rotator-tow-trucks",
    excerpt: "Rotator wreckers are the titans of the towing industry. Discover their 360-degree lifting capabilities.",
    date: "Sep 28, 2025",
    author: "Lead Operator",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/9ea1ff94-80ae-4cbf-b4b1-59f0c8ce5446.png",
    category: "Equipment"
  },
  {
    title: "The Real Cost of Load Shifts (And How to Prevent Them)",
    slug: "real-cost-of-load-shifts",
    excerpt: "A shifted load can result in hefty fines. We break down proper cargo securing techniques.",
    date: "Sep 10, 2025",
    author: "Safety Director",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/147cd186-c286-4388-b2a7-441bdd4da0bf.png",
    category: "Compliance"
  }
];

import { SEOHead } from "@/components/SEOHead";

export default function Blog() {
  return (
    <main className="min-h-screen pt-20 pb-24 bg-background">
      <SEOHead 
        title="Industry Insights | The Towing Company LLC" 
        description="Read the latest news and tips from The Towing Company LLC, your experts for towing in Denver. Stay informed on vehicle recovery and safety." 
        canonical="/blog"
        ogImage="https://vibe.filesafe.space/1782851734624712581/assets/58ccf4b4-f9e7-4fc6-9a1d-bfe0c552e675.png"
      />
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Towing & Roadside Assistance Blog in Denver</h1>
          <p className="text-xl text-muted-foreground">
            Get the latest news, safety tips, and expert advice from Colorado's premier towing professionals. Whether you're navigating I-70 in the winter or dealing with a flat tire on Colfax Ave, our insights are designed to keep Denver drivers safe and informed.
          </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-card/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group flex flex-col shadow-lg hover:-translate-y-1 hover:border-primary/50 transition-all"
            >
              <Link to={"/blog/" + post.slug} className="aspect-video relative overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={`Blog post: ${post.title}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link to={"/blog/" + post.slug}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                <Link to={"/blog/" + post.slug} className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform mt-auto">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}