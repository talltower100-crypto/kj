import { SEOHead } from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";

export default function Accessibility() {
  const markdownContent = `
We are deeply committed to ensuring digital accessibility for everyone, including people with disabilities. As a local Denver towing business, we believe that getting emergency roadside assistance should be easy and accessible for all our neighbors across Colorado.

We continually improve the user experience for everyone, applying relevant accessibility standards like WCAG to guarantee equal access to our towing services online.

## Measures to Support Accessibility in Our Towing Services

We take the following measures to ensure accessibility of our website:

* Include accessibility throughout our internal policies.
* Integrate accessibility into our procurement practices.
* Provide continual accessibility training for our staff.
* Assign clear accessibility goals and responsibilities.

## Conformance Status

The Web Content Accessibility Guidelines (WCAG) define requirements to improve accessibility for people with disabilities.

WCAG defines three levels of conformance: Level A, Level AA, and Level AAA.

Our website is partially conformant with WCAG 2.1 level AA.

Partially conformant means that some parts of the content do not fully conform to the standard.

## Feedback

We welcome your feedback on the accessibility of our website. Please let us know if you encounter barriers:

* Phone: (401) 666-1297
* Postal Address: Colorado, USA

We try to respond to feedback within two business days.

## Technical Specifications

Accessibility of this website relies on specific technologies to work properly.

These work with your web browser and any assistive technologies installed on your computer.

* HTML
* WAI-ARIA
* CSS
* JavaScript

These technologies are relied upon for conformance with the accessibility standards used.

## Assessment Approach

We assessed the accessibility of our website by the following approaches:

* Self-evaluation
`;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <SEOHead 
        title="Digital Accessibility Statement | The Towing Company LLC" 
        description="The Towing Company LLC is committed to digital accessibility. Read our accessibility statement for our Denver towing services website."
        canonical="/accessibility"
      />
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Digital Accessibility Statement for Our Denver Towing Company</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:mb-8 prose-headings:mt-12 prose-headings:mb-6 prose-li:mb-2">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
