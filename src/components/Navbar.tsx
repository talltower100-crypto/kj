import { Link } from "react-router-dom";
import { Truck, Menu, X, ChevronDown, ChevronRight, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories: Record<string, string[]> = {
  "General Towing": [
    "Car Towing", "Light Duty Towing", "Local Towing", "Long Distance Towing", "Home Towing", "City Towing Service", "Full Service Towing", "Tow Truck Service", "Need Towing", "Fast Convenient Service"
  ],
  "Specialty Towing": [
    "Flatbed Towing", "Motorcycle Towing", "Equipment Towing", "Tractor Towing", "Low Clearance", "Flatbed Tow Trucks Available", "Vehicle Storage", "We Buy Junk Cars"
  ],
  "Emergency Recovery": [
    "Emergency Towing", "Accident Recovery", "24 Hour Towing Service", "Accident Recovery Towing", "Police Towing", "Snow Emergency", "Towing Service Englewood", "Towing Service Glendale"
  ],
  "Roadside Assistance": [
    "24 Hour Roadside Assistance", "Emergency Roadside Assistance", "Our Roadside Assistance", "Immediate Assistance", "Stranded Roadside", "Auto Repair", "Repair Facility"
  ],
  "Tire & Battery": [
    "Battery Jump Starting", "Car Battery Replacement", "Jump Start", "Portable Jump", "Flat Tire Assistance", "Tire Change", "Flat Tire Change Service"
  ],
  "Lockouts & Recovery": [
    "Fuel Delivery", "Car Lockouts", "Lockout Service", "Winch Out Services"
  ]
};
const industries = [
  "Real Estate",
  "Healthcare",
  "Legal",
  "Home Services",
  "Restaurants"
];

const locations = [
  { name: "Denver", slug: "denver" },
  { name: "Aurora", slug: "aurora" },
  { name: "Centennial", slug: "centennial" },
  { name: "Cherry Creek", slug: "cherry-creek" },
  { name: "Englewood", slug: "englewood" },
  { name: "Littleton", slug: "littleton" },
  { name: "Lakewood", slug: "lakewood" },
  { name: "Arvada", slug: "arvada" },
  { name: "Westminster", slug: "westminster" },
  { name: "Thornton", slug: "thornton" },
  { name: "Commerce City", slug: "commerce-city" },
  { name: "Glendale", slug: "glendale" },
  { name: "Greenwood Village", slug: "greenwood-village" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutCompanyOpen, setAboutCompanyOpen] = useState(false);
  const [aboutIndustriesOpen, setAboutIndustriesOpen] = useState(false);
  const [aboutLocationsOpen, setAboutLocationsOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [activeMobileServiceCategory, setActiveMobileServiceCategory] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink" onClick={() => setIsOpen(false)}>
          <div className="relative hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-zinc-950 dark:bg-zinc-900 rounded-lg border-b-4 border-primary shadow-xl group-hover:border-b-[6px] group-hover:-translate-y-0.5 transition-all duration-200 overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            <Truck className="h-5 w-5 md:h-6 md:w-6 text-primary relative z-10 transform group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-black text-sm sm:text-base md:text-xl xl:text-2xl tracking-tighter uppercase leading-none text-foreground italic flex flex-wrap items-center gap-1">
              The Towing <span className="text-primary">Company LLC</span>
              <svg viewBox="0 0 600 400" className="h-4 w-auto md:h-6 rounded-sm ml-1 shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <g fillRule="evenodd">
                  <path fill="#002868" d="M0 0h600v133.3H0zM0 266.7h600V400H0z"/>
                  <path fill="#fff" d="M0 133.3h600v133.4H0z"/>
                  <circle cx="266.7" cy="200" r="75" fill="#00e5ff"/>
                  <path fill="#bf0a30" d="M341.7 200a100 100 0 1 0-100 100v-33.3a66.7 66.7 0 1 1 66.7-66.7h33.3z"/>
                </g>
              </svg>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 px-4">
          <div 
            className="relative group flex items-center h-full"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2 whitespace-nowrap"
              aria-expanded={aboutOpen}
              aria-haspopup="true"
            >
              About <ChevronDown className="h-4 w-4" />
            </button>
            
            <AnimatePresence>
              {aboutOpen && (
                <>
                  <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[220px] bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col z-50"
                  >
                    <div 
                      className="relative"
                      onMouseEnter={() => setAboutCompanyOpen(true)}
                      onMouseLeave={() => setAboutCompanyOpen(false)}
                    >
                      <button 
                        className="w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors flex items-center justify-between"
                        aria-expanded={aboutCompanyOpen}
                        aria-haspopup="true"
                      >
                        Company <ChevronRight className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {aboutCompanyOpen && (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute top-0 left-full ml-1 w-[200px] bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col z-50"
                          >
                            <Link to="/about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap">About Us</Link>
                            <Link to="/fleet" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap">Fleet & Equipment</Link>
                            <Link to="/case-studies" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap">Case Studies</Link>
                            <Link to="/blog" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap">Blog</Link>
                            <Link to="/faq" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap">FAQ</Link>
                            <Link to="/reviews" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap">Reviews</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div 
                      className="relative"
                      onMouseEnter={() => setAboutIndustriesOpen(true)}
                      onMouseLeave={() => setAboutIndustriesOpen(false)}
                    >
                      <button 
                        className="w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors flex items-center justify-between"
                        aria-expanded={aboutIndustriesOpen}
                        aria-haspopup="true"
                      >
                        Industries <ChevronRight className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {aboutIndustriesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute top-0 left-full ml-1 w-[200px] bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col z-50"
                          >
                            {industries.map((industry) => (
                              <Link 
                                key={industry}
                                to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap"
                              >
                                {industry}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div 
                      className="relative"
                      onMouseEnter={() => setAboutLocationsOpen(true)}
                      onMouseLeave={() => setAboutLocationsOpen(false)}
                    >
                      <button 
                        className="w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors flex items-center justify-between"
                        aria-expanded={aboutLocationsOpen}
                        aria-haspopup="true"
                      >
                        Areas Served <ChevronRight className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {aboutLocationsOpen && (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute top-0 left-full ml-1 w-[220px] max-h-[70vh] overflow-y-auto bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col z-50 custom-scrollbar"
                          >
                            {locations.map((loc) => (
                              <Link 
                                key={loc.slug}
                                to={`/towing/${loc.slug}`} 
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap"
                              >
                                {loc.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative group flex items-center h-full"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2 whitespace-nowrap"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <>
                  <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[280px] bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col z-50"
                  >
                    {Object.entries(serviceCategories).map(([category, categoryServices], idx) => (
                      <div 
                        key={category}
                        className="relative"
                        onMouseEnter={() => setActiveServiceCategory(category)}
                        onMouseLeave={() => setActiveServiceCategory(null)}
                      >
                        <button 
                          className="w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors flex items-center justify-between"
                          aria-expanded={activeServiceCategory === category}
                          aria-haspopup="true"
                        >
                          {category} <ChevronRight className="h-4 w-4" />
                        </button>
                        <AnimatePresence>
                          {activeServiceCategory === category && (
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className={`absolute ${idx > 4 ? 'bottom-0' : 'top-0'} right-full mr-1 w-[260px] max-h-[70vh] overflow-y-auto bg-card border border-border rounded-lg shadow-lg py-2 flex flex-col z-50 custom-scrollbar`}
                            >
                              {categoryServices.map((service) => (
                                <Link 
                                  key={service} 
                                  to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors whitespace-nowrap"
                                >
                                  {service}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <Link to="/24-hour-towing" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">24 Hour Towing</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center shrink-0">
          <Button asChild className="whitespace-nowrap font-semibold animate-shake">
            <a href="tel:+17204164800">Call Now</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground flex items-center gap-2 bg-muted/50 rounded-md border border-border shrink-0" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="text-sm font-bold uppercase tracking-wider">Menu</span>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Phone Banner */}
      <div className="lg:hidden bg-zinc-100 dark:bg-zinc-900 border-t border-border">
        <a 
          href="tel:+17204164800"
          className="flex items-center justify-center py-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <div className="flex items-center gap-2 text-foreground font-bold text-base tracking-wide animate-shake">
            <PhoneCall className="h-4 w-4 text-primary" />
            <span>+1 720-416-4800</span>
          </div>
        </a>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between text-lg font-medium w-full text-left"
                  aria-expanded={mobileAboutOpen}
                >
                  <span className="text-primary">About</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-border py-2">
                        
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                            className="flex items-center justify-between text-muted-foreground w-full text-left py-1 pr-4"
                            aria-expanded={mobileCompanyOpen}
                          >
                            <span>Company</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {mobileCompanyOpen && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 border-l-2 border-border flex flex-col gap-2"
                              >
                                <Link to="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground py-1">About Us</Link>
                                <Link to="/fleet" onClick={() => setIsOpen(false)} className="text-muted-foreground py-1">Fleet & Equipment</Link>
                                <Link to="/case-studies" onClick={() => setIsOpen(false)} className="text-muted-foreground py-1">Case Studies</Link>
                                <Link to="/blog" onClick={() => setIsOpen(false)} className="text-muted-foreground py-1">Blog</Link>
                                <Link to="/faq" onClick={() => setIsOpen(false)} className="text-muted-foreground py-1">FAQ</Link>
                                <Link to="/reviews" onClick={() => setIsOpen(false)} className="text-muted-foreground py-1">Reviews</Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                            className="flex items-center justify-between text-muted-foreground w-full text-left py-1 pr-4"
                            aria-expanded={mobileIndustriesOpen}
                          >
                            <span>Industries</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {mobileIndustriesOpen && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 border-l-2 border-border flex flex-col gap-2"
                              >
                                {industries.map((industry) => (
                                  <Link 
                                    key={industry}
                                    to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground py-1"
                                  >
                                    {industry}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                            className="flex items-center justify-between text-muted-foreground w-full text-left py-1 pr-4"
                            aria-expanded={mobileLocationsOpen}
                          >
                            <span>Areas Served</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {mobileLocationsOpen && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 border-l-2 border-border flex flex-col gap-2 max-h-[50vh] overflow-y-auto custom-scrollbar"
                              >
                                {locations.map((loc) => (
                                  <Link 
                                    key={loc.slug}
                                    to={`/towing/${loc.slug}`} 
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground py-1"
                                  >
                                    {loc.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between text-lg font-medium w-full text-left"
                  aria-expanded={mobileServicesOpen}
                >
                  <span className="text-primary">Services</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-border py-2">
                        {Object.entries(serviceCategories).map(([category, categoryServices]) => (
                          <div key={category} className="flex flex-col gap-2">
                            <button 
                              onClick={() => setActiveMobileServiceCategory(activeMobileServiceCategory === category ? null : category)}
                              className="flex items-center justify-between text-muted-foreground w-full text-left py-1 pr-4"
                              aria-expanded={activeMobileServiceCategory === category}
                            >
                              <span>{category}</span>
                              <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileServiceCategory === category ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                              {activeMobileServiceCategory === category && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden pl-4 border-l-2 border-border flex flex-col gap-2"
                                >
                                  {categoryServices.map((service) => (
                                    <Link 
                                      key={service} 
                                      to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                                      onClick={() => setIsOpen(false)}
                                      className="text-muted-foreground py-1 text-sm"
                                    >
                                      {service}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/24-hour-towing" onClick={() => setIsOpen(false)} className="text-lg font-medium">24 Hour Towing</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">Contact</Link>
              <Button className="w-full mt-4 font-semibold animate-shake" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
