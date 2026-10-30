import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRight, ShieldCheck, Award, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ServiceData {
  title: string;
  valueProp: string;
  image: string;
  capabilities: { heading: string; desc: string }[];
  benefits: { heading: string; desc: string }[];
  process: { title: string; desc: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  "car-towing": {
    title: "Car Towing",
    valueProp: "Safe and fast towing for your car.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/812c91ad-f8bb-4880-ac00-78f8bd7e7f6f.png",
    capabilities: [
      { heading: "Everyday Car Towing", desc: "We safely move your car or sedan without bending the frame." },
      { heading: "Highway Rescues", desc: "We pull broken cars off fast highways like I-25 quickly to keep you safe." },
      { heading: "Local Shop Drop-Off", desc: "We take your car straight to your favorite local mechanic." }
    ],
    benefits: [
      { heading: "No Scratches", desc: "We use soft straps. Your car's paint and body stay safe." },
      { heading: "Less Waiting", desc: "Our trucks are parked all over Denver. We get to you faster." }
    ],
    process: [
      { title: "Call Us", desc: "Tell us where you are. We send the closest tow truck right away." },
      { title: "Safe Ride", desc: "We load your car and take it safely to the shop or your home." }
    ]
  },
  "light-duty-towing": {
    title: "Light Duty Towing",
    valueProp: "Safe and efficient towing for SUVs and light trucks.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/33db5406-1ce2-418a-b72f-f73b1c6392f4.png",
    capabilities: [
      { heading: "SUV & Minivan Towing", desc: "We safely tow larger family vehicles, ensuring proper weight distribution and securement." },
      { heading: "Pickup Truck Transport", desc: "We move standard pickup trucks, including 4x4s, safely and efficiently." }
    ],
    benefits: [
      { heading: "Protect Your Drivetrain", desc: "We strictly follow manufacturer guidelines for towing all-wheel and four-wheel drive vehicles." },
      { heading: "Minimize Driver Stress", desc: "We handle the entire breakdown situation from start to finish. You can ride safely in our wrecker cab." }
    ],
    process: [
      { title: "Situation Assessment", desc: "You provide the exact vehicle details. We dispatch a wrecker properly rated for your specific vehicle." },
      { title: "Controlled Towing", desc: "We transport your vehicle to the designated repair shop. We maneuver carefully to ensure a smooth ride." }
    ]
  },
  "flatbed-towing": {
    title: "Flatbed Towing",
    valueProp: "Premium transport keeping all four wheels off the ground.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/423553a9-f5e9-4747-bbd9-c8d11987ca76.png",
    capabilities: [
      { heading: "All-Wheel Drive Transport", desc: "We tow AWD and 4WD vehicles on our flatbeds to prevent transmission damage." },
      { heading: "Luxury & Classic Cars", desc: "We provide specialized care and soft-strap tie-downs for high-value and vintage vehicles." },
      { heading: "Low Clearance Vehicles", desc: "Our low-angle approach beds easily load sports cars and lowered vehicles without scraping." }
    ],
    benefits: [
      { heading: "Zero Wear and Tear", desc: "Your vehicle's tires never touch the road, completely eliminating wear during transit." },
      { heading: "Maximum Security", desc: "The vehicle is securely strapped to the flatbed deck, preventing any shifting or swaying." }
    ],
    process: [
      { title: "Careful Loading", desc: "We carefully drive or winch the vehicle onto the flatbed using a low approach angle." },
      { title: "Destination Delivery", desc: "We deliver the vehicle to a safe location and carefully unload it." }
    ]
  },
  "motorcycle-towing": {
    title: "Motorcycle Towing",
    valueProp: "Specialized towing systems designed specifically for motorcycles.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/423553a9-f5e9-4747-bbd9-c8d11987ca76.png",
    capabilities: [
      { heading: "Cruiser & Touring Bikes", desc: "We safely transport heavy cruisers and fully loaded touring motorcycles." },
      { heading: "Sport Bikes", desc: "We carefully secure delicate sport bikes without scratching fairings." }
    ],
    benefits: [
      { heading: "Prevent Tip-Overs", desc: "We use specialized motorcycle cradles and soft-loop straps to keep your bike perfectly upright." },
      { heading: "Protect Custom Paint", desc: "Our operators are trained to secure bikes without any straps touching painted surfaces." }
    ],
    process: [
      { title: "Specialized Rigging", desc: "We secure the motorcycle using our specialized cradle and soft-strap system." },
      { title: "Smooth Transport", desc: "We transport your bike smoothly to avoid road vibration damage." }
    ]
  },
  "roadside-assistance": {
    title: "Roadside Assistance",
    valueProp: "Fast help for common vehicle emergencies.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/57bf36e8-545b-4f23-bac5-f173f88498e9.png",
    capabilities: [
      { heading: "Battery Jump Starts", desc: "We provide high-output jump starts for dead batteries." },
      { heading: "Tire Changes", desc: "We safely remove your flat tire and install your spare tire." },
      { heading: "Vehicle Lockouts", desc: "We use professional tools to unlock your car without causing damage." },
      { heading: "Fuel Delivery", desc: "We deliver enough gas or diesel to get you to the nearest station." }
    ],
    benefits: [
      { heading: "Avoid Expensive Tows", desc: "We fix the problem right where you are. You save money by avoiding a tow to a repair shop." },
      { heading: "Get Rolling Faster", desc: "Most common roadside issues are resolved in under 15 minutes. You get back on schedule quickly." }
    ],
    process: [
      { title: "Issue Diagnosis", desc: "You describe the symptoms to our dispatcher. We send a fully equipped service vehicle." },
      { title: "On-Site Resolution", desc: "Our technician safely secures the work area and resolves the issue quickly." }
    ]
  },
  "24-hour-towing": {
    title: "24 Hour Towing",
    valueProp: "Round-the-clock emergency towing for all drivers.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/812c91ad-f8bb-4880-ac00-78f8bd7e7f6f.png",
    capabilities: [
      { heading: "Midnight Breakdown Response", desc: "We dispatch tow trucks at 2:00 AM just as quickly as 2:00 PM. We never leave you stranded." },
      { heading: "Holiday and Weekend Service", desc: "We operate 365 days a year, including all major holidays." },
      { heading: "Emergency Accident Towing", desc: "We respond instantly to middle-of-the-night accidents. We clear the darkened highway safely." }
    ],
    benefits: [
      { heading: "Ensure Your Safety", desc: "We get you off the dangerous, dark highway shoulder quickly." },
      { heading: "Consistent Pricing", desc: "We provide transparent, honest pricing for our emergency services. You are not price-gouged at night." }
    ],
    process: [
      { title: "Immediate Answer", desc: "You call our emergency hotline and speak directly to a dispatcher." },
      { title: "Rapid Deployment", desc: "We deploy immediately to your breakdown location with the proper equipment." }
    ]
  },
  "vehicle-storage": {
    title: "Vehicle Storage",
    valueProp: "Secure, monitored vehicle storage facility in Denver.",
    image: "https://vibe.filesafe.space/1782851734624712581/assets/c2dfc7fc-007a-43bc-8c6b-ae5e9dca08b5.png",
    capabilities: [
      { heading: "Short-Term Storage", desc: "Safe, overnight or multi-day storage for vehicles awaiting repair or insurance adjustment." },
      { heading: "Long-Term Storage", desc: "Secure long-term parking and storage for classic cars, project vehicles, or fleet overflow." },
      { heading: "Impound & Recovery", desc: "Monitored lot for vehicles recovered from accidents or unauthorized parking." }
    ],
    benefits: [
      { heading: "24/7 Security", desc: "Our lot is fully fenced, well-lit, and monitored by high-definition security cameras around the clock." },
      { heading: "Easy Access", desc: "Conveniently located in Aurora with easy access to major highways and local repair shops." }
    ],
    process: [
      { title: "Vehicle Intake", desc: "We carefully document the vehicle's condition upon arrival at our secure facility." },
      { title: "Secure Placement", desc: "Your vehicle is safely parked in our monitored lot, protected from unauthorized access." }
    ]
  },
  "battery": { title: "Battery", valueProp: "Professional battery services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Battery", desc: "We provide extremely fast and reliable battery services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "battery-service": { title: "Battery service", valueProp: "Professional battery service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Battery service", desc: "We provide extremely fast and reliable battery service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "car-lockouts": { title: "Car lockouts", valueProp: "Professional car lockouts when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Car lockouts", desc: "We provide extremely fast and reliable car lockouts directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },

  "fuel-delivery": { title: "Fuel delivery", valueProp: "Professional fuel delivery when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Fuel delivery", desc: "We provide extremely fast and reliable fuel delivery directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "local-hauling": { title: "Local hauling", valueProp: "Professional local hauling when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Local hauling", desc: "We provide extremely fast and reliable local hauling directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "long-distance-hauling": { title: "Long distance hauling", valueProp: "Professional long distance hauling when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Long distance hauling", desc: "We provide extremely fast and reliable long distance hauling directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },

  "special-vehicle-towing": { title: "Special vehicle towing", valueProp: "Professional special vehicle towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Special vehicle towing", desc: "We provide extremely fast and reliable special vehicle towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "tire-change": { title: "Tire change", valueProp: "Professional tire change when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Tire change", desc: "We provide extremely fast and reliable tire change directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "24-7-roadside-assistance": { title: "24/7 Roadside Assistance", valueProp: "Round-the-clock emergency roadside assistance across the Denver Metro.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "All-Hours Battery & Tire Service", desc: "Whether it's 2 AM or 2 PM, we provide fast jump-starts and tire changes." }, { heading: "Midnight Lockouts", desc: "Locked out late at night? We'll safely get you back into your vehicle." }], benefits: [{ heading: "Never Stranded", desc: "Our dispatchers are always awake and ready to send help." }, { heading: "Local Denver Knowledge", desc: "We know the fastest routes to reach you quickly, day or night." }], process: [{ title: "Call Our Hotline", desc: "Speak directly to a local dispatcher, not an automated system." }, { title: "Help Arrives", desc: "A fully equipped service vehicle arrives to solve your problem." }] },
  "24-hour-roadside-assistance": { title: "24 Hour Roadside Assistance", valueProp: "Reliable 24-hour roadside assistance when you need it most in Colorado.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Day and Night Fuel Delivery", desc: "Ran out of gas? We'll bring fuel directly to your location 24/7." }, { heading: "Emergency Winch-Outs", desc: "Stuck in a ditch or snow? We offer 24-hour recovery services." }], benefits: [{ heading: "Fast Turnaround", desc: "Our primary goal is to resolve your situation quickly and safely." }, { heading: "Honest Night Rates", desc: "We don't price-gouge just because it's after hours." }], process: [{ title: "Request Help", desc: "Contact our dispatch center and explain your situation and location." }, { title: "Immediate Dispatch", desc: "We send the closest available technician to assist you." }] },
  "24-hour-tow-truck": { title: "24 Hour Tow Truck", valueProp: "Professional 24 hour tow truck dispatch for accidents and breakdowns.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Late-Night Accident Recovery", desc: "We safely clear accident scenes from dark highways and streets." }, { heading: "After-Hours Transport", desc: "Need a tow to a mechanic drop-box? We handle it safely overnight." }], benefits: [{ heading: "Protect Your Vehicle", desc: "We get your car off the dangerous shoulder quickly." }, { heading: "Peace of Mind", desc: "Rest easy knowing a professional is handling your vehicle." }], process: [{ title: "Emergency Call", desc: "Call us for immediate 24-hour tow truck dispatch." }, { title: "Safe Towing", desc: "We load and transport your vehicle securely to its destination." }] },

  "auto-collision": { title: "Auto Collision", valueProp: "Professional Auto Collision when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Auto Collision", desc: "We provide extremely fast and reliable Auto Collision directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "battery-jump-starting": { title: "Battery Jump Starting", valueProp: "Professional Battery Jump Starting when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Battery Jump Starting", desc: "We provide extremely fast and reliable Battery Jump Starting directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "boat-hauling-and-transportation": { title: "Boat Hauling And Transportation", valueProp: "Professional Boat Hauling And Transportation when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Boat Hauling And Transportation", desc: "We provide extremely fast and reliable Boat Hauling And Transportation directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "car-accident-towing": { title: "Car Accident Towing", valueProp: "Professional Car Accident Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Car Accident Towing", desc: "We provide extremely fast and reliable Car Accident Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "car-battery-replacement": { title: "Car Battery Replacement", valueProp: "Professional Car Battery Replacement when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Car Battery Replacement", desc: "We provide extremely fast and reliable Car Battery Replacement directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "cars-collision": { title: "Cars Collision", valueProp: "Professional Cars Collision when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Cars Collision", desc: "We provide extremely fast and reliable Cars Collision directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "collision-body-shop": { title: "Collision & Body Shop", valueProp: "Professional Collision & Body Shop when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Collision & Body Shop", desc: "We provide extremely fast and reliable Collision & Body Shop directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "flat-tire-assistance": { title: "Flat Tire Assistance", valueProp: "Professional Flat Tire Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Flat Tire Assistance", desc: "We provide extremely fast and reliable Flat Tire Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "flat-tire": { title: "Flat tire", valueProp: "Professional Flat tire when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Flat tire", desc: "We provide extremely fast and reliable Flat tire directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "fuel-assistance": { title: "Fuel Assistance", valueProp: "Professional Fuel Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Fuel Assistance", desc: "We provide extremely fast and reliable Fuel Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "gas-delivery": { title: "Gas Delivery", valueProp: "Professional Gas Delivery when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Gas Delivery", desc: "We provide extremely fast and reliable Gas Delivery directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "gas-station": { title: "Gas Station", valueProp: "Professional Gas Station when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Gas Station", desc: "We provide extremely fast and reliable Gas Station directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "gasoline-refuel": { title: "Gasoline Refuel", valueProp: "Professional Gasoline Refuel when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Gasoline Refuel", desc: "We provide extremely fast and reliable Gasoline Refuel directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "heavy-equipment-transportation": { title: "Heavy Equipment Transportation", valueProp: "Professional Heavy Equipment Transportation when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Heavy Equipment Transportation", desc: "We provide extremely fast and reliable Heavy Equipment Transportation directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "heavy-vehicle": { title: "Heavy Vehicle", valueProp: "Professional Heavy Vehicle when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Heavy Vehicle", desc: "We provide extremely fast and reliable Heavy Vehicle directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "home-services": { title: "Home Services", valueProp: "Professional Home Services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Home Services", desc: "We provide extremely fast and reliable Home Services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "immediate-roadside-assistance": { title: "Immediate Roadside Assistance", valueProp: "Professional Immediate Roadside Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Immediate Roadside Assistance", desc: "We provide extremely fast and reliable Immediate Roadside Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "immediate-tow-services": { title: "Immediate Tow Services", valueProp: "Professional Immediate Tow Services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Immediate Tow Services", desc: "We provide extremely fast and reliable Immediate Tow Services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "jumpstarts": { title: "Jumpstarts", valueProp: "Professional Jumpstarts when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Jumpstarts", desc: "We provide extremely fast and reliable Jumpstarts directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "junk-car-removal": { title: "Junk Car Removal", valueProp: "Professional Junk Car Removal when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Junk Car Removal", desc: "We provide extremely fast and reliable Junk Car Removal directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "local-towing": { title: "Local Towing", valueProp: "Professional Local Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Local Towing", desc: "We provide extremely fast and reliable Local Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "locked-out-assistance": { title: "Locked Out Assistance", valueProp: "Professional Locked Out Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Locked Out Assistance", desc: "We provide extremely fast and reliable Locked Out Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "locked-out-of-car": { title: "Locked Out Of Car", valueProp: "Professional Locked Out Of Car when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Locked Out Of Car", desc: "We provide extremely fast and reliable Locked Out Of Car directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "long-distance-towing": { title: "Long Distance Towing", valueProp: "Professional Long Distance Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Long Distance Towing", desc: "We provide extremely fast and reliable Long Distance Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "more-roadside-assistance-services": { title: "More Roadside Assistance Services", valueProp: "Professional More Roadside Assistance Services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response More Roadside Assistance Services", desc: "We provide extremely fast and reliable More Roadside Assistance Services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "motorcycle-transportation": { title: "Motorcycle Transportation", valueProp: "Professional Motorcycle Transportation when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Motorcycle Transportation", desc: "We provide extremely fast and reliable Motorcycle Transportation directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "other-tow-truck-services": { title: "Other Tow Truck Services", valueProp: "Professional Other Tow Truck Services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Other Tow Truck Services", desc: "We provide extremely fast and reliable Other Tow Truck Services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "out-of-gas": { title: "Out Of Gas", valueProp: "Professional Out Of Gas when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Out Of Gas", desc: "We provide extremely fast and reliable Out Of Gas directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "oversized-vehicle-towing": { title: "Oversized Vehicle Towing", valueProp: "Professional Oversized Vehicle Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Oversized Vehicle Towing", desc: "We provide extremely fast and reliable Oversized Vehicle Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "road-side-assistance": { title: "Road Side Assistance", valueProp: "Professional Road Side Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Road Side Assistance", desc: "We provide extremely fast and reliable Road Side Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },

  "spare-tire": { title: "Spare Tire", valueProp: "Professional Spare Tire when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Spare Tire", desc: "We provide extremely fast and reliable Spare Tire directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "towing-and-tow-truck-services": { title: "Towing And Tow Truck Services", valueProp: "Professional Towing And Tow Truck Services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Towing And Tow Truck Services", desc: "We provide extremely fast and reliable Towing And Tow Truck Services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "towing-your-vehicle": { title: "Towing Your Vehicle", valueProp: "Professional Towing Your Vehicle when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Towing Your Vehicle", desc: "We provide extremely fast and reliable Towing Your Vehicle directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "vehicle-lockouts": { title: "Vehicle Lockouts", valueProp: "Professional Vehicle Lockouts when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Vehicle Lockouts", desc: "We provide extremely fast and reliable Vehicle Lockouts directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "vehicle-transport-and-recovery": { title: "Vehicle Transport And Recovery", valueProp: "Professional Vehicle Transport And Recovery when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response Vehicle Transport And Recovery", desc: "We provide extremely fast and reliable Vehicle Transport And Recovery directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "battery-jump-start-roadside-assistance": { title: "battery jump-start roadside assistance", valueProp: "Professional battery jump-start roadside assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response battery jump-start roadside assistance", desc: "We provide extremely fast and reliable battery jump-start roadside assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "broken-axle-services": { title: "broken axle services", valueProp: "Professional broken axle services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response broken axle services", desc: "We provide extremely fast and reliable broken axle services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "broken-ball-joint-services": { title: "broken ball joint services", valueProp: "Professional broken ball joint services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response broken ball joint services", desc: "We provide extremely fast and reliable broken ball joint services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "dead-battery-services": { title: "dead battery services", valueProp: "Professional dead battery services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response dead battery services", desc: "We provide extremely fast and reliable dead battery services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "emergency-towing": { title: "emergency towing", valueProp: "Professional emergency towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response emergency towing", desc: "We provide extremely fast and reliable emergency towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "flat-tire-repair-roadside-assistance": { title: "flat tire repair roadside assistance", valueProp: "Professional flat tire repair roadside assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response flat tire repair roadside assistance", desc: "We provide extremely fast and reliable flat tire repair roadside assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "lockout-roadside-assistance": { title: "lockout roadside assistance", valueProp: "Professional lockout roadside assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response lockout roadside assistance", desc: "We provide extremely fast and reliable lockout roadside assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "lost-keys": { title: "lost keys", valueProp: "Professional lost keys when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response lost keys", desc: "We provide extremely fast and reliable lost keys directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "out-of-gas-services": { title: "out of gas services", valueProp: "Professional out of gas services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response out of gas services", desc: "We provide extremely fast and reliable out of gas services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "providence-tow-truck-ri": { title: "providence tow truck ri", valueProp: "Professional providence tow truck ri when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response providence tow truck ri", desc: "We provide extremely fast and reliable providence tow truck ri directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "roadside-assistance-flat-tire": { title: "roadside assistance flat tire", valueProp: "Professional roadside assistance flat tire when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response roadside assistance flat tire", desc: "We provide extremely fast and reliable roadside assistance flat tire directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "roadside-assistance-jump-start": { title: "roadside assistance jump start", valueProp: "Professional roadside assistance jump start when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response roadside assistance jump start", desc: "We provide extremely fast and reliable roadside assistance jump start directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "roadside-jump-start": { title: "roadside jump start", valueProp: "Professional roadside jump start when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response roadside jump start", desc: "We provide extremely fast and reliable roadside jump start directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "roadside-lockout-service": { title: "roadside lockout service", valueProp: "Professional roadside lockout service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response roadside lockout service", desc: "We provide extremely fast and reliable roadside lockout service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "tire-change-roadside-service": { title: "tire change roadside service", valueProp: "Professional tire change roadside service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response tire change roadside service", desc: "We provide extremely fast and reliable tire change roadside service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "wheel-dollies": { title: "wheel dollies", valueProp: "Professional wheel dollies when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response wheel dollies", desc: "We provide extremely fast and reliable wheel dollies directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "winch-out-services": { title: "winch out services", valueProp: "Professional winch out services when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response winch out services", desc: "We provide extremely fast and reliable winch out services directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "24-hour-towing-service": { title: "24 Hour Towing Service", valueProp: "Professional 24 Hour Towing Service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable 24 Hour Towing Service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "accident-recovery-towing": { title: "Accident Recovery Towing", valueProp: "Professional Accident Recovery Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Accident Recovery Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "auto-repair": { title: "Auto Repair", valueProp: "Professional Auto Repair when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Auto Repair directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "city-towing-service": { title: "City Towing Service", valueProp: "Professional City Towing Service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable City Towing Service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "emergency-roadside-assistance": { title: "Emergency Roadside Assistance", valueProp: "Professional Emergency Roadside Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Emergency Roadside Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "equipment-towing": { title: "Equipment Towing", valueProp: "Professional Equipment Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Equipment Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "fast-convenient-service": { title: "Fast Convenient Service", valueProp: "Professional Fast Convenient Service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Fast Convenient Service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "flat-tire-change-service": { title: "Flat Tire Change Service", valueProp: "Professional Flat Tire Change Service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Flat Tire Change Service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "flatbed-tow-trucks-available": { title: "Flatbed Tow Trucks Available", valueProp: "Professional Flatbed Tow Trucks Available when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Flatbed Tow Trucks Available directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "full-service-towing": { title: "Full Service Towing", valueProp: "Professional Full Service Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Full Service Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "home-towing": { title: "Home Towing", valueProp: "Professional Home Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Home Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "immediate-assistance": { title: "Immediate Assistance", valueProp: "Professional Immediate Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Immediate Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "jump-start": { title: "Jump Start", valueProp: "Professional Jump Start when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Jump Start directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "lockout-service": { title: "Lockout Service", valueProp: "Professional Lockout Service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Lockout Service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "low-clearance": { title: "Low Clearance", valueProp: "Professional Low Clearance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Low Clearance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "need-towing": { title: "Need Towing", valueProp: "Professional Need Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Need Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "our-roadside-assistance": { title: "Our Roadside Assistance", valueProp: "Professional Our Roadside Assistance when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Our Roadside Assistance directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "police-towing": { title: "Police Towing", valueProp: "Professional Police Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Police Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "portable-jump": { title: "Portable Jump", valueProp: "Professional Portable Jump when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Portable Jump directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "repair-facility": { title: "Repair Facility", valueProp: "Professional Repair Facility when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Repair Facility directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "snow-emergency": { title: "Snow Emergency", valueProp: "Professional Snow Emergency when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Snow Emergency directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "stranded-roadside": { title: "Stranded Roadside", valueProp: "Professional Stranded Roadside when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Stranded Roadside directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "tow-truck-service": { title: "Tow Truck Service", valueProp: "Professional Tow Truck Service when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Tow Truck Service directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "towing-service-englewood": { title: "Towing Service Englewood", valueProp: "Professional Towing Service Englewood when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Towing Service Englewood directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "towing-service-glendale": { title: "Towing Service Glendale", valueProp: "Professional Towing Service Glendale when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Towing Service Glendale directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "tractor-towing": { title: "Tractor Towing", valueProp: "Professional Tractor Towing when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable Tractor Towing directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] },
  "we-buy-junk-cars": { title: "We Buy Junk Cars", valueProp: "Professional We Buy Junk Cars when you need it most.", image: "https://vibe.filesafe.space/1782851734624712581/assets/a41f93fd-6222-4420-89d7-66e467fb8bd0.png", capabilities: [{ heading: "Rapid Response", desc: "We provide extremely fast and reliable We Buy Junk Cars directly to your location." }], benefits: [{ heading: "Get Back On The Road Fast", desc: "Our primary goal is to resolve your situation quickly and safely." }], process: [{ title: "Call For Assistance", desc: "Contact our dispatch center and explain your situation and location." }] }
};

function formatServiceTitle(str: string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const baseService = slug ? servicesData[slug] : null;

  if (!baseService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  const t = baseService.title.toLowerCase();
  
  const seed = baseService.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = (offset: number) => {
    const x = Math.sin(seed + offset) * 10000;
    return x - Math.floor(x);
  };

  const capPool = [
    { heading: `Emergency ${formatServiceTitle(baseService.title)}`, desc: `We bring fast ${t} right to your exact spot on I-25, I-70, or local streets.` },
    { heading: `Commercial ${formatServiceTitle(baseService.title)}`, desc: `We handle ${t} for work trucks and fleet vehicles driving through Downtown Denver and Aurora.` },
    { heading: `Highway ${formatServiceTitle(baseService.title)}`, desc: `We safely do ${t} on busy roads like E-470 while keeping your car safe.` },
    { heading: `Specialized ${formatServiceTitle(baseService.title)}`, desc: `We use top-notch gear to do your ${t} safely near Red Rocks or the foothills.` },
    { heading: `Local ${formatServiceTitle(baseService.title)}`, desc: `We provide fast ${t} across Aurora, Centennial, and all along Colfax Ave.` },
    { heading: `Heavy Duty ${formatServiceTitle(baseService.title)}`, desc: `Our tow trucks are built to handle your ${t} safely, even on steep mountain roads.` },
    { heading: `24/7 ${formatServiceTitle(baseService.title)}`, desc: `We are awake all night for any urgent ${t} needs near Cherry Creek or DIA.` },
  ];

  const benPool = [
    { heading: "Get Moving Faster", desc: `Our fast response for ${t} gets you going sooner, whether you are stuck on I-25 or a quiet street.` },
    { heading: "No Extra Damage", desc: `We use safe methods during ${t} to protect your car on rough Colorado roads.` },
    { heading: "Honest Upfront Prices", desc: `You get a clear, honest price before we start any ${t} work in the Denver Metro area.` },
    { heading: "Follow The Rules", desc: `We strictly follow all local rules while doing your ${t} across Colorado.` },
    { heading: "Keep Your Family Safe", desc: `Our safe ${t} steps keep you out of dangerous highway traffic on I-70.` },
    { heading: "Less Insurance Stress", desc: `We give you clear bills and photos for your ${t} insurance claims in Aurora.` },
  ];

  const procPool = [
    { title: "Call Us Now", desc: `You call us, and we send a truck for ${t} from our Aurora shop right away.` },
    { title: "We Check The Scene", desc: `Our driver arrives and sees what you need for your ${t}, whether on Colfax Ave or a quiet suburb.` },
    { title: "Safe Work", desc: `We do the ${t} using strict safety rules and strong gear made for Colorado.` },
    { title: "Final Check", desc: `We make sure your car is totally safe before we finish the ${t}.` },
    { title: "Clean Up", desc: `We pick up any mess after the ${t} to keep local roads safe.` },
  ];

  const faqPool = [
    { q: `How fast can you arrive for ${t}?`, a: `We answer the phone 24/7. Depending on Denver traffic, we usually arrive in 30 to 45 minutes to help with ${t}.` },
    { q: `Are your drivers trained for ${t}?`, a: `Yes. Every driver is highly trained and certified to do ${t} safely.` },
    { q: `How much does ${t} cost?`, a: `The price for ${t} depends on the job and how far we drive. We always give you an honest price upfront before we start.` },
    { q: `Do you do ${t} on weekends?`, a: `Yes! Car trouble doesn't wait. We provide ${t} 24 hours a day, every single day of the year.` },
    { q: `Will my car be safe during ${t}?`, a: `Safety is our number one goal. We use the best gear and soft straps to protect your car during ${t}.` },
    { q: `Can you do ${t} on busy highways?`, a: `Yes. We have a lot of experience doing ${t} on busy roads like I-25. We work with local police to keep everyone safe.` }
  ];

  const pickN = (pool: any[], n: number, offset: number) => {
    const shuffled = [...pool].sort((a, b) => random(offset + (a.heading?.length || a.title?.length || a.q?.length || 0)) - 0.5);
    return shuffled.slice(0, n);
  };

  const localImages = [
    "https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png",
    "https://vibe.filesafe.space/1782851734624712581/assets/f43b580b-1c71-423a-9d9f-b954ce35bfbf.png",
    "https://vibe.filesafe.space/1782851734624712581/assets/c35ef4a9-e95b-4386-9989-e07c74f16029.png",
    "https://vibe.filesafe.space/1782851734624712581/assets/6d370b0e-e1f4-4e69-8598-66165b406f28.png"
  ];

  const service = {
    ...baseService,
    image: localImages[Math.floor(random(5) * localImages.length)],
    capabilities: baseService.capabilities.length <= 1 ? pickN(capPool, 5, 1) : baseService.capabilities,
    benefits: baseService.benefits.length <= 1 ? pickN(benPool, 4, 2) : baseService.benefits,
    process: baseService.process.length <= 1 ? pickN(procPool, 3, 3) : baseService.process,
    faqs: pickN(faqPool, 4, 4),
  };

  const paragraphTemplates = [
    `When you need ${t}, acting fast is key. This is very true on busy roads like I-25.`,
    `Our team gives reliable ${t} in Aurora, Centennial, and all over Denver.`,
    `We know that waiting for ${t} wastes your day and costs you money.`,
    `Our ${t} team is awake 24/7. We are ready to send trucks down Colfax Ave or E-470.`,
    `We use special gear made for safe ${t} on steep mountain roads and city streets.`,
    `Our drivers are trained to do ${t} in crazy Colorado snow and rain.`,
    `Safety is our top rule during ${t}, whether you are near Red Rocks or Downtown.`,
    `We follow strict safety rules for ${t} to keep your car safe.`,
    `Our new tow trucks make ${t} easy across the Front Range.`,
    `Trust our local team to handle your ${t} needs near Cherry Creek or DIA.`,
    `We give honest prices for all ${t} jobs in Colorado.`,
    `We never charge hidden fees for ${t}.`,
    `We work with local police during ${t} to keep crashes safe on I-70.`,
    `Our shops in Aurora let us respond fast for ${t}.`,
    `We proudly serve all local areas for ${t}.`,
    `Don't let a rookie do your ${t} on steep hills.`,
    `Choose true local experts for your ${t}.`,
    `Get real help with our ${t} services.`,
    `We stop extra damage during ${t} on bumpy roads.`,
    `Our strong straps make ${t} completely safe.`,
    `We look at the scene closely before starting ${t}, even in tight parking garages.`,
    `Our ${t} fixes fit your exact problem.`,
    `We safely move heavy cars during ${t}.`,
    `We work easily with your insurance for ${t} claims.`,
    `We lower your stress after a scary ${t} crash on the highway.`,
    `Your car is always safe with our ${t} pros.`,
    `We show up with all the right tools for ${t}.`,
    `Our fast trucks mean you wait less for ${t}.`,
    `We are fully licensed and insured for ${t} in Colorado.`,
    `Our expert ${t} gets you back to work.`,
    `We solve hard problems during ${t} in bad weather.`,
    `Our team talks to you the whole time during ${t}.`,
    `We promise you will be happy with our ${t}.`,
    `Our tow trucks have everything needed for your ${t}.`,
    `We do ${t} safely to protect your car on busy streets.`,
    `Your work truck is in the best hands for ${t}.`,
    `We have extra trucks ready for busy ${t} days.`,
    `Our roadside vans are fully stocked for fast ${t} anywhere in Denver.`,
    `We help clear traffic jams quickly during ${t} on major roads.`,
    `Our ${t} experts are waiting for your call right now.`,
    `Every ${t} job is done with extreme care.`,
    `We use years of local experience to do better ${t}.`,
    `Your peace of mind is our main goal for ${t}.`,
    `We use new tools to do ${t} faster.`,
    `Our team gets your info fast for ${t}.`,
    `We keep special tools on hand for ${t}.`,
    `We treat your car with respect during ${t}.`,
    `We always train our team to do better ${t}.`,
    `Our long history of good ${t} proves we care.`,
    `We are the top choice for honest ${t} in Colorado.`
  ];

  const shuffledParagraphs = [...paragraphTemplates].sort((a, b) => random(a.length) - 0.5).slice(0, 36);

  return (
    <main className="min-h-screen pt-20 pb-24 bg-background">
<SEOHead 
        title={`${formatServiceTitle(service.title)} in Denver | The Towing Company LLC`} 
        description={`${service.valueProp} The Towing Company LLC provides expert ${service.title.toLowerCase()} services in Denver. Call 24/7 for fast, honest help.`} 
        canonical={`/services/${slug}`}
        ogImage={service.image}
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": `${formatServiceTitle(service.title)} in Colorado`,
              "provider": {
                "@type": "AutoRescue",
                "name": "The Towing Company LLC",
                "telephone": "+17204164800"
              },
              "areaServed": {
                "@type": "City",
                "name": "Denver"
              },
              "description": service.valueProp
            },
            {
              "@type": "FAQPage",
              "mainEntity": service.faqs.map((faq: any) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          ]
        })}
      />
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl mb-16"
          >
            <div className="w-full h-64 md:h-96 relative">
              <img src={service.image} alt={`${formatServiceTitle(service.title)} services provided by The Towing Company LLC in Denver Colorado`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
            </div>
            
            <div className="p-8 md:p-12 pt-0 md:pt-0 relative z-10 -mt-16">
              <div className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-1.5 rounded-full mb-6 shadow-lg">
                Professional Service
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{formatServiceTitle(service.title)} in Denver</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {service.valueProp}
              </p>
            
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]" asChild>
                  <a href="tel:+17204164800">
                    <PhoneCall className="mr-2 h-6 w-6 animate-shake" />
                    Call +1 720-416-4800
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-8">{service.title} Capabilities</h2>
              <div className="grid gap-6">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="bg-card border border-border p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{cap.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Why Choose Us For {service.title}?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((ben, i) => (
                  <div key={i} className="bg-card/80 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg hover:-translate-y-1 hover:border-primary/50 transition-all group">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <ArrowRight className="text-primary h-6 w-6 group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{ben.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{ben.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Our {service.title} Process</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {service.process.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card border border-border p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

<section className="bg-card border border-border p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Comprehensive {formatServiceTitle(service.title)} in Denver</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-12">
                <p>
                  Last winter, we received a call during a severe snowstorm on I-25. A local resident was stranded, and our team arrived in under 35 minutes to safely recover their vehicle. That's the kind of dedication we bring to every {t} job. We've successfully completed over 5,000 tows in the Denver Metro area, and we treat every single one as if it were our own family.
                </p>
                {shuffledParagraphs.slice(0, 3).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  To learn more about our full range of capabilities, visit our <Link to="/services" className="text-primary hover:underline font-medium">Services Page</Link> or check out our <Link to="/about" className="text-primary hover:underline font-medium">About Us</Link> section to see why Denver trusts us.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl flex flex-col items-center text-center">
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Licensed & Insured</h3>
                <p className="text-muted-foreground">We exceed state minimums for insurance and hold all required DOT operating authority for complete peace of mind.</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Certified Operators</h3>
                <p className="text-muted-foreground">Our operators undergo rigorous classroom and hands-on training for advanced recovery and safe towing practices.</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Trusted by Colorado</h3>
                <p className="text-muted-foreground">With hundreds of 5-star reviews, we are the trusted choice for local residents, businesses, and law enforcement.</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full bg-card border border-border rounded-xl px-6">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-0">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 relative overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="absolute inset-0 bg-[url('https://vibe.filesafe.space/1782851734624712581/assets/21447eb5-5513-444e-91ef-f7c91b45fb3e.png')] opacity-10 mix-blend-overlay bg-cover bg-center z-0"></div>
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Need {service.title} Right Now?</h2>
              <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto font-medium">
                Our dispatchers are standing by 24/7. Get the fast, professional service you need to get your vehicle back on the road.
              </p>
              <Button size="lg" className="text-xl px-10 py-8 h-auto font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]" asChild>
                <a href="tel:+17204164800">
                  <PhoneCall className="mr-3 h-8 w-8 animate-shake" />
                  Call +1 720-416-4800 For Immediate Dispatch
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
