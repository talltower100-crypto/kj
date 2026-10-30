import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { servicesData } from "./ServiceDetail";

function formatServiceTitle(str: string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default function Services() {
  const servicesList = Object.entries(servicesData).map(([slug, data]) => ({
    slug,
    title: formatServiceTitle(data.title),
    desc: data.valueProp,
  }));

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <SEOHead 
        title="Our Complete Towing & Roadside Services | The Towing Company LLC" 
        description="The Towing Company LLC offers 67+ specialized towing services in Denver. Fast, safe recovery for everyday cars, flatbed needs, and roadside help." 
        canonical="/services"
      />
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Towing Services in Denver</h1>
          <p className="text-xl text-muted-foreground">
            From everyday passenger cars on Colfax Ave to the largest commercial semi-trucks on I-70, we offer a comprehensive range of 67+ specialized towing, recovery, and roadside services. Available 24/7 across the Denver Metro area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <Link 
              key={service.slug} 
              to={`/services/${service.slug}`}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all flex flex-col"
            >
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
              <p className="text-muted-foreground mb-4 flex-grow">{service.desc}</p>
              <div className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform mt-auto">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
