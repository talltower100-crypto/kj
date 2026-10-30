import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const blogData = {
  "how-to-prepare-your-fleet-for-winter": {
    title: "How to Prepare Your Fleet for Winter in New England",
    date: "Oct 15, 2025",
    author: "Dispatch Team",
    category: "Safety",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/58ccf4b4-f9e7-4fc6-9a1d-bfe0c552e675.png",
    content: `
      <h2>The Challenges of Colorado Winters</h2>
      <p>Winter in New England presents significant challenges for commercial drivers. Ice, heavy snow, freezing rain, and high winds can quickly turn familiar highways into hazardous environments. Operating an 80,000-pound vehicle under these conditions requires extreme caution, advanced preparation, and specific driving techniques.</p>
      
      <h2>Pre-Trip Inspections Are Critical</h2>
      <p>Before heading out into winter weather, a thorough pre-trip inspection is more important than ever. Ensure that your heater and defroster are working perfectly. Check your wiper blades and ensure you have an ample supply of winter-grade washer fluid. Most importantly, inspect your tires for adequate tread depth and check your tire chains to ensure they are in good condition and ready to be deployed if necessary.</p>

      <h2>Adjusting Your Driving Style</h2>
      <p>The golden rule of winter driving is to slow down. Speed limits are designed for dry roads; when conditions deteriorate, your speed must decrease accordingly. Increase your following distance significantly. A heavy truck requires a much longer stopping distance on snow or ice. Avoid sudden braking or sharp steering movements, as these can easily induce a skid or a jackknife.</p>
      
      <h2>Understanding Black Ice</h2>
      <p>Black ice is one of the most dangerous winter hazards because it is nearly invisible. It often forms on bridges, overpasses, and in shaded areas where the sun cannot reach. If you suspect black ice, do not hit the brakes. Ease off the accelerator and keep your steering wheel straight until you pass over the icy patch.</p>

      <h2>Emergency Preparedness</h2>
      <p>Despite the best preparation, emergencies can still happen. Always carry a winter survival kit in your cab, including warm clothing, blankets, non-perishable food, water, a flashlight, and extra batteries. If you do become stranded or slide off the road, stay in your vehicle and call for professional help. The Towing Company LLC is available 24/7 to provide emergency winching and recovery services, getting you back on the road safely.</p>
    `
  },
  "understanding-rotator-tow-trucks": {
    title: "Understanding Rotator Tow Trucks: When Do You Need One?",
    date: "Sep 28, 2025",
    author: "Lead Operator",
    category: "Equipment",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/9ea1ff94-80ae-4cbf-b4b1-59f0c8ce5446.png",
    content: `
      <h2>The Titans of the Towing Industry</h2>
      <p>When a passenger car slides off the road, a standard tow truck can usually pull it back with a simple winch. However, when a fully loaded tractor-trailer, a commercial bus, or a piece of heavy construction equipment is involved in an incident, the recovery process becomes exponentially more complex. Heavy-duty recovery requires specialized equipment, advanced physics calculations, and highly trained operators.</p>
      
      <h2>The Role of the Rotator</h2>
      <p>One of the most crucial pieces of equipment in modern heavy recovery is the rotator truck. Unlike standard wreckers with a fixed boom, a rotator features a crane-like boom that can rotate 360 degrees. This allows operators to lift massive weights from awkward angles, often without needing to block multiple lanes of traffic. Rotators are essential for lifting overturned trailers, extracting vehicles from deep embankments, and performing delicate maneuvers in tight spaces.</p>

      <h2>Air Cushion Recovery Integration</h2>
      <p>In situations where an overturned trailer is carrying fragile cargo or is structurally compromised, traditional winching might cause further damage. In these cases, rotators work alongside air cushion recovery. Heavy-duty airbags are strategically placed under the trailer and slowly inflated. This provides a gentle, evenly distributed lift that can upright a fully loaded trailer without damaging the sides or the cargo inside, while the rotator provides stability and precise positioning.</p>
      
      <h2>Rigging and Winching</h2>
      <p>Proper rigging is the foundation of any successful recovery. Operators must understand the structural integrity of the casualty vehicle to identify the correct anchor points. Using heavy-duty chains, synthetic ropes, and snatch blocks, operators create mechanical advantage systems to pull massive weights safely. The goal is always to exert the necessary force without causing secondary damage to the vehicle's frame or suspension.</p>

      <h2>Safety First</h2>
      <p>At The Towing Company LLC, our operators are certified, meaning they have undergone rigorous training in the latest recovery techniques. Every recovery scene is carefully assessed, and a detailed plan is formulated before any equipment is engaged. We prioritize the safety of our team, the motoring public, and your valuable assets above all else.</p>
    `
  },
  "real-cost-of-load-shifts": {
    title: "The Real Cost of Load Shifts (And How to Prevent Them)",
    date: "Sep 10, 2025",
    author: "Safety Director",
    category: "Compliance",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/147cd186-c286-4388-b2a7-441bdd4da0bf.png",
    content: `
      <h2>Why Load Shifts Happen</h2>
      <p>A shifted load is one of the most dangerous, yet preventable, situations a commercial driver can face. It happens when cargo inside a trailer moves during transit, altering the vehicle's center of gravity. This typically occurs due to sudden braking, sharp turns, evasive maneuvers, or, most commonly, improper initial securing of the cargo.</p>
      
      <h2>The Immediate Dangers</h2>
      <p>When thousands of pounds of freight suddenly shift to one side, the trailer becomes incredibly unstable. This significantly increases the risk of a rollover accident, especially on highway off-ramps or winding roads. Even if a rollover doesn't occur, the altered weight distribution makes the truck difficult to steer and increases stopping distances, putting the driver and the public at risk.</p>

      <h2>Compliance and Fines</h2>
      <p>Beyond the safety hazards, load shifts often lead to severe compliance issues. When weight is unevenly distributed, it can cause specific axles to exceed their legal weight limits. If a truck with a shifted load pulls into a weigh station, it will likely be placed out of service. The driver and the carrier face hefty fines, and the truck cannot legally move until the load is corrected.</p>
      
      <h2>Prevention is the Best Strategy</h2>
      <p>Preventing load shifts starts at the loading dock. Cargo must be properly blocked, braced, and tied down according to FMCSA regulations. Drivers must inspect their loads before departure, within the first 50 miles of the trip, and periodically thereafter. Using the correct type and number of tie-downs, load bars, and dunnage is crucial. Never assume a load is secure just because the doors are closed.</p>

      <h2>What to Do If a Shift Occurs</h2>
      <p>If you suspect your load has shifted, pull over safely as soon as possible. Do not attempt to continue driving, as the instability could lead to an accident. Call The Towing Company LLC immediately. We offer professional load shift correction services. Our teams use heavy-duty forklifts, pallet jacks, and expert rigging techniques to safely redistribute your cargo, ensuring your vehicle meets all weight requirements so you can get back on the road legally and safely.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogData[slug as keyof typeof blogData] : null;

  if (!post) {
    return (
      <div className="container py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen">
      <SEOHead 
        title={post.title + " | The Towing Company LLC"}
        description={post.content.substring(0, 100).replace(/<[^>]*>?/gm, '') + '... | The Towing Company LLC Denver Towing'}
        canonical={"/blog/" + slug}
        ogImage={post.image}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card border-b border-border">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8 font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
            </Link>
            <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold tracking-wider uppercase mb-4">
              <Tag className="h-4 w-4" />
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden mb-12 shadow-sm border border-border">
              <img src={post.image} alt={`Blog post cover image: ${post.title}`} className="w-full h-full object-cover" />
            </div>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}