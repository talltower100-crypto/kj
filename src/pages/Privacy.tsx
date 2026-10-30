import { Shield } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";

export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const markdownContent = `
**Last Updated:** ${lastUpdated}

We are committed to protecting your privacy and ensuring the security of your personal information when you use our Denver towing and roadside assistance services.

This policy outlines how we collect, use, and safeguard your data when you visit our website or call us for a tow in Aurora, Centennial, or anywhere in the Denver Metro area.

By accessing our website or engaging our 24/7 dispatch services, you consent to the practices described in this policy. We treat your data with the same care we treat your vehicle.

## 1. Information We Collect During Dispatch

We collect information you provide directly to us when requesting services online, over the phone, or in person.

This includes your name, company name, phone number, email address, physical address, and payment information.

We also collect vehicle details, including make, model, license plate number, VIN, and the specific breakdown location.

When you visit our website, we automatically collect information about your device and usage patterns.

This includes your IP address, browser type, operating system, referring URLs, and the dates of your visits.

We use cookies to enhance your browsing experience, analyze site traffic, and understand our audience.

## 2. How We Use Your Information

We collect your information primarily to provide efficient and effective towing and recovery services.

We use your location and vehicle details to dispatch the appropriate wreckers to your exact location.

Your contact information allows us to communicate regarding estimated arrival times, service updates, and billing matters.

We also use the data to process payments, manage our business operations, and improve our service offerings.

We analyze website usage data to optimize our online presence and ensure our site is user-friendly.

We may use your information to comply with legal obligations and enforce our terms of service.

## 3. Information Sharing and Disclosure

We do not sell, rent, or trade your personal information to third parties for marketing purposes.

We only share information with trusted service providers who assist us in operating our business.

These include payment processors, dispatch software providers, and website hosting companies.

These providers are bound by strict confidentiality agreements. They only use your information for specialized services.

We may disclose your information if required by law, such as a subpoena or court order.

We may share information to investigate illegal activities, suspected fraud, or potential physical safety threats.

## 4. Data Security

We implement industry-standard security measures to maintain the safety of your personal information.

Our website uses Secure Socket Layer (SSL) technology to encrypt data transmitted between your browser and our servers.

We restrict access to your personal information to authorized employees who need it for their job duties.

No method of internet transmission or electronic storage is completely secure. We cannot guarantee absolute security.

We continuously review and update our security practices to mitigate risks and protect your data.

## 5. Your Privacy Rights and Choices

Depending on your jurisdiction, you may have certain rights regarding your personal information.

You can request access to your personal data, ask for corrections, or request deletion of your information.

You may opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions.

If you wish to exercise these rights, please contact our privacy team using the information below.

We will respond to your request within a reasonable timeframe and according to applicable laws.

We may need to verify your identity before fulfilling your request to ensure data security.

## 6. Contact Us

If you have questions or concerns about this Privacy Policy, please do not hesitate to contact us.

We are committed to addressing your inquiries promptly and transparently.

**The Towing Company LLC**  
11196 E Ada Pl, Aurora, CO 80012, United States  
Phone: +1 720-416-4800
Email: Thetowingcompanyllc@gmail.com
`;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <SEOHead 
        title="Privacy Policy | The Towing Company LLC" 
        description="Read the privacy policy of The Towing Company LLC. We protect your data when you use our Denver towing and roadside assistance services." 
        canonical="/privacy"
      />
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-primary/10 p-4 rounded-xl text-primary">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy for Our Denver Towing Company</h1>
        </div>
        
        <div className="prose prose-invert max-w-none prose-lg prose-p:leading-relaxed prose-p:mb-8 prose-headings:mt-12 prose-headings:mb-6">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
