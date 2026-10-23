// All editable site content lives here: copy, stats, contact details, testimonials.
import {
  Globe,
  Smartphone,
  Code2,
  BadgeCheck,
  RadioTower,
  LayoutTemplate,
  Headset,
  Cpu,
  Palette,
  FlaskConical,
  Sparkles,
  Wrench,
  Search,
  PenTool,
  Hammer,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Tech Tanks",
  tagline: "Technology solutions that move your business forward.",
  country: "Nigeria",
  regulator: "NCC",
  address: "44 Kitwe Street, Wuse Zone 4, Abuja, Nigeria",
  phone: "+234 907 710 8981",
  email: "hello@techtanks.tech",
  whatsapp: "2349077108981", // international format, digits only
  hours: "Mon – Fri, 8:00am – 6:00pm",
  mapEmbedUrl: "", // optional Google Maps embed URL; leave empty to hide the map
  socials: {
    linkedin: "https://linkedin.com/company/",
    x: "https://x.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Type Approval · Telecom · Software",
  title: "Technology Solutions That Move Your Business Forward",
  subtitle:
    "Specialists in NCC type approval and telecom services, backed by web, mobile, and custom software, so one team takes you from first idea to final sign-off.",
  primaryCta: "Get a Free Consultation",
  secondaryCta: "Explore Our Solutions",
  trustLine: `Trusted by organisations across ${company.country}`,
};

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Clients Served" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

export type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Core services get a larger, highlighted card. */
  featured?: boolean;
  highlights?: string[];
};

export const solutions: Solution[] = [
  {
    icon: BadgeCheck,
    title: "Type Approval",
    featured: true,
    description: `End-to-end support for equipment type approval and certification with the ${company.regulator}. We handle the paperwork, testing, and follow-up so your products reach the market faster.`,
    highlights: [
      `${company.regulator} type approval applications & documentation`,
      "Equipment testing coordination",
      "Regulatory liaison through to certificate",
      "Support for OEMs, importers & distributors",
    ],
  },
  {
    icon: RadioTower,
    title: "Telecom Services",
    featured: true,
    description:
      "Network design, deployment, connectivity, and infrastructure support that keeps your organisation reliably connected.",
    highlights: [
      "Network planning & design",
      "Deployment & installation",
      "Connectivity & last-mile solutions",
      "Infrastructure maintenance & support",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, secure, and scalable websites and web applications built to convert visitors and grow with your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS & Android apps your customers will enjoy using every day.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored enterprise systems, portals, and automation that fit how your organisation actually works.",
  },
];

export const services: Solution[] = [
  { icon: LayoutTemplate, title: "Website Design", description: "Clean, on-brand designs that build trust at first glance." },
  { icon: Headset, title: "Technical Support & Technology Consulting", description: "Expert advice and responsive support when you need it." },
  { icon: Cpu, title: "Software & Hardware Solutions", description: "The right tools and equipment, sourced and set up properly." },
  { icon: Palette, title: "Graphic Design & Printing", description: "Brand assets and print materials that look professional." },
  { icon: FlaskConical, title: "Research & Development", description: "Prototypes and studies that turn ideas into working products." },
  { icon: Sparkles, title: "Emerging Technology Solutions", description: "Practical AI, IoT, cloud, and automation for real results." },
  { icon: Wrench, title: "Technical Services", description: "Installation, maintenance, and on-site technical work." },
];

export const serviceOptions = [...solutions, ...services].map((s) => s.title);

export const whyUs = {
  title: "One partner for your entire technology journey",
  body: "Most organisations juggle separate vendors for software, connectivity, and compliance. We bring it together, so you get one accountable team, fewer handoffs, and faster results.",
  points: [
    { title: "End-to-end delivery", text: "Strategy, build, launch, and support, all under one roof." },
    { title: "Regulatory & compliance expertise", text: "We know the type approval process and handle it for you." },
    { title: "Dedicated support", text: "A named contact who knows your project and responds quickly." },
    { title: "Transparent pricing & timelines", text: "Clear quotes, clear milestones, no surprises." },
  ],
};

export const process = [
  { icon: Search, title: "Discover", text: "We learn your goals, users, and constraints." },
  { icon: PenTool, title: "Design", text: "We plan the solution and shape the experience." },
  { icon: Hammer, title: "Build & Test", text: "We develop in clear milestones and test thoroughly." },
  { icon: Rocket, title: "Deploy & Support", text: "We launch smoothly and stay on hand to help." },
];

export const industries = [
  "Government",
  "Telecom Operators",
  "Fintech",
  "Education",
  "Healthcare",
  "SMEs",
  "NGOs",
];

// Partner logos live in /public/partners/. Without a `logo`, the `short` label is shown in a badge.
export const partners: { name: string; short: string; sector: string; logo?: string }[] = [
  { name: "HP Nigeria", short: "HP", sector: "Technology", logo: "/partners/hp.jpg" },
  { name: "Keystone Bank", short: "KB", sector: "Banking", logo: "/partners/keystone-bank.jpg" },
  { name: "NIRSAL", short: "NIRSAL", sector: "Agricultural Finance", logo: "/partners/nirsal.jpg" },
  { name: "MINISO Nigeria", short: "MINISO", sector: "Retail", logo: "/partners/miniso.jpg" },
  { name: "Unity Bank", short: "UB", sector: "Banking", logo: "/partners/unity-bank.jpg" },
  { name: "Universal Service Provision Fund (USPF)", short: "USPF", sector: "Government", logo: "/partners/uspf.jpg" },
];

export const cta = {
  title: "Ready to build something great?",
  text: "Tell us about your project and get a free consultation within 24 hours.",
  button: "Start Your Project",
};

