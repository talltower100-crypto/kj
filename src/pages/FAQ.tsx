import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How fast can you get to me?",
      answer: "We try to reach you in 30 to 45 minutes. If you are stuck on busy roads like I-25 or I-70, we send the closest tow truck right away so you don't have to wait."
    },
    {
      question: "Do you tow big trucks or just cars?",
      answer: "We tow all normal cars, SUVs, and pickup trucks. We also use flatbeds to safely tow AWD cars and motorcycles."
    },
    {
      question: "How much does a tow cost?",
      answer: "The price depends on what you drive and how far we go. We always give you a fair, honest price on the phone before we send a truck. No hidden fees."
    },
    {
      question: "Will my insurance pay for the tow?",
      answer: "Yes, we work with most major car insurance companies. We give you all the paperwork and photos you need to get your money back easily."
    },
    {
      question: "Where do you tow in Colorado?",
      answer: "We cover the whole Denver Metro area. We help drivers in Aurora, Denver, Centennial, Cherry Creek, and on major highways like E-470."
    },
    {
      question: "Are your drivers safe to trust with my car?",
      answer: "Yes! Every single driver is highly trained. We are fully licensed and insured to work in Colorado, so your car is always safe with us."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
<SEOHead 
        title="Towing FAQs in Denver | The Towing Company LLC" 
        description="Questions about emergency towing in Denver? Find answers from The Towing Company LLC on pricing, response times, and our local service areas."
        canonical="/faq"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      />
      
      {/* Hero Section */}
      <section className="bg-muted py-20 border-b border-border">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Towing FAQ in Denver</h1>
          <p className="text-lg text-muted-foreground">
            Get quick answers about our towing speeds, honest prices, and where we work in Colorado.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Our dispatch team is available 24/7 to answer your questions and provide immediate assistance.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold shadow-xl hover:scale-105 transition-all" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-2 h-6 w-6 animate-shake" />
                  Call +1 720-416-4800
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
