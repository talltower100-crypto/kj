import { Link } from "react-router-dom";
import { Truck, MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 group shrink-0 mb-6">
              <div className="relative flex items-center justify-center w-12 h-12 bg-zinc-950 dark:bg-zinc-900 rounded-lg border-b-4 border-primary shadow-xl group-hover:border-b-[6px] group-hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                <Truck className="h-6 w-6 text-primary relative z-10 transform group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase leading-none text-foreground italic">
                  The Towing <span className="text-primary">Company LLC</span>
                </span>
                <span className="font-bold text-xs tracking-[0.25em] uppercase text-muted-foreground leading-none mt-1">
                  Colorado
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Colorado's premier towing and recovery service. We are available 24/7 for all your transport needs.
            </p>
<div className="flex gap-4">
              <a href="https://share.google/vlDiCxpxu9JOltNCG" target="_blank" rel="noopener noreferrer" aria-label="Visit our Google Business Profile" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm bg-muted p-2"><MapPin className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/thetowingcompany/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-2"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="text-muted-foreground hover:text-primary transition-colors">Fleet & Equipment</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/24-hour-towing" className="text-muted-foreground hover:text-primary transition-colors">24 Hour Towing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Top Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/car-towing" className="text-muted-foreground hover:text-primary transition-colors">Car Towing</Link></li>
              <li><Link to="/services/flatbed-towing" className="text-muted-foreground hover:text-primary transition-colors">Flatbed Towing</Link></li>
              <li><Link to="/services/motorcycle-towing" className="text-muted-foreground hover:text-primary transition-colors">Motorcycle Towing</Link></li>
              <li><Link to="/services/roadside-assistance" className="text-muted-foreground hover:text-primary transition-colors">Roadside Assistance</Link></li>
              <li><Link to="/24-hour-towing" className="text-muted-foreground hover:text-primary transition-colors">24/7 Emergency</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">11196 E Ada Pl, Aurora, CO 80012, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+17204164800" className="text-muted-foreground hover:text-primary transition-colors">+1 720-416-4800</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground break-all">Thetowingcompanyllc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} The Towing Company LLC. All rights reserved. <br className="md:hidden" /><span className="hidden md:inline" aria-hidden="true">|</span> Website Designed by <a href="https://sowaagency.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sowa Marketing Agency</a>
          </p>
<div className="flex gap-4 text-sm">
            <a href="https://www.codot.gov/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">CDOT Updates</a>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}