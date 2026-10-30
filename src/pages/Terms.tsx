import { FileText } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";

export default function Terms() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const markdownContent = `
**Last Updated:** ${lastUpdated}

Welcome to The Towing Company LLC. By using our website or services, you agree to these Terms of Service.

Please read these terms carefully before requesting assistance.
If you do not agree with them, do not use our services.

## 1. Services Provided

We provide commercial vehicle services including heavy-duty towing, semi-truck towing, and equipment transport.

All services depend on equipment availability, weather conditions, and the specific recovery situation.

Our dispatch team provides estimated arrival times. These times are estimates only and are never guaranteed.

Traffic, weather, and preceding jobs can impact our arrival.
We reserve the right to refuse unsafe recovery operations.

## 2. Customer Responsibilities

Customers must provide accurate information regarding vehicle location, condition, weight, and the problem.

Inaccurate information may cause delays, extra charges, or the dispatch of incorrect equipment.

An authorized representative must be present at the vehicle location unless prior arrangements are approved.

Customers must follow all safety instructions from our operators during recovery operations.

You must remain safely away from the active recovery zone. Do not interfere with operators or equipment.

## 3. Pricing, Billing, and Payment

Rates vary based on equipment required, distance traveled, recovery complexity, and time of day.

We offer estimates upon request. The final bill may differ if unforeseen complications arise during service.

Additional charges apply for specialized equipment, hazardous materials handling, or extended wait times.

Payment is due in full upon completion unless prior credit is established.
We accept major credit cards and fleet checks.

For non-payment, we may retain possession of the vehicle under applicable lien laws until paid. Storage fees accrue daily.

## 4. Limitation of Liability

Our operators take every precaution to prevent damage. We are not liable for pre-existing damage or mechanical failures.

We are not liable for damage from the structural failure of the disabled vehicle.

For severe recoveries, customers may need to sign a damage waiver before operations begin.

We are not liable for indirect, incidental, consequential, or punitive damages, including lost revenue or downtime.

Our maximum liability for direct damages shall not exceed the amount paid for the specific service.

## 5. Intellectual Property

Content, graphics, and logos on this website are our intellectual property. They are protected by copyright and trademark laws.

You may not reproduce, distribute, or create derivative works without our express written consent.

Unauthorized use of our intellectual property may result in legal action.

## 6. Governing Law

These Terms of Service are governed by the laws of Colorado, without regard to conflict of law principles.

Legal actions related to these terms must be brought exclusively in Colorado.

If any provision is found invalid, the remaining provisions will continue in full force.

We may update these terms at any time without notice. Continued use constitutes acceptance of revised terms.

## 7. Contact Information

If you have questions about these Terms of Service, please contact our management team.

**The Towing Company LLC**  
11196 E Ada Pl, Aurora, CO 80012, United States  
Phone: +1 720-416-4800
Email: Thetowingcompanyllc@gmail.com
`;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <SEOHead 
        title="Terms of Service | The Towing Company LLC" 
        description="Read the Terms of Service for The Towing Company LLC. By using our Denver towing services and website, you agree to these policies." 
        canonical="/terms"
      />
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-primary/10 p-4 rounded-xl text-primary">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service for Our Denver Towing Company</h1>
        </div>
        
        <div className="prose prose-invert max-w-none prose-lg prose-p:leading-relaxed prose-p:mb-8 prose-headings:mt-12 prose-headings:mb-6">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
