import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, PhoneCall, Building2, CheckCircle2, Shield, Calculator, FileText, Database } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full py-20 bg-brand-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Comprehensive Administrative Services
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto mb-8">
            Expert support tailored to your business needs. We handle the operations so you can focus on growth.
          </p>
          <Link href="/#contact"><Button size="lg" variant="secondary">Book a Consultation</Button></Link>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-brand-900">{service.title}</h3>
                <p className="mb-6 text-slate-600 flex-1">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-brand-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold text-brand-600 group-hover:text-brand-700 mt-auto">
                  View Service Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const SERVICES = [
  // 6 REPO SERVICES
  { 
    title: "Assignment Management", 
    slug: "assignment-management", 
    icon: Briefcase, 
    description: "End-to-end handling of your recovery orders, accepting assignments, and loading cases.",
    features: ["Accepting/Declining", "Order Loading", "Coverage Verification", "Priority Assessment"]
  },
  { 
    title: "Appointment & Communication", 
    slug: "appointment-communication", 
    icon: PhoneCall, 
    description: "Professional debtor communication, de-escalation, and lot redemption scheduling.",
    features: ["Redemption Scheduling", "Customer Service", "Call Auditing", "Real-Time Updates"]
  },
  { 
    title: "Skip Tracing & Investigation", 
    slug: "skip-tracing-investigation", 
    icon: Shield, 
    description: "Advanced data mining, social media deep-dives, and database research to locate assets.",
    features: ["Advanced Skips", "Asset Location", "Background Checks", "Contact Info Updates"]
  },
  { 
    title: "Financial Management", 
    slug: "financial-management", 
    icon: Calculator, 
    description: "Specialized bookkeeping, driver pay calculations, and immediate lender invoicing.",
    features: ["Same-Day Invoicing", "Driver Pay", "Expense Tracking", "Billing & Bookkeeping"]
  },
  { 
    title: "Storage & Logistics", 
    slug: "storage-logistics", 
    icon: Building2, 
    description: "Managing digital lot inventory, transport coordination, and personal property tracking.",
    features: ["Lot Management", "Driver Comms", "Property Tracking", "Vehicle Logistics"]
  },
  { 
    title: "Field Agent Support", 
    slug: "field-agent-support", 
    icon: Users, 
    description: "Real-time dispatch support, rapid condition report processing, and emergency assistance.",
    features: ["Real-Time Support", "CR Processing", "Performance Tracking", "Delay Prevention"]
  },
  // 4 GENERIC SERVICES
  { 
    title: "Administrative Support", 
    slug: "administrative-support", 
    icon: FileText, 
    description: "Comprehensive daily administrative tasks to keep your business running smoothly.",
    features: ["Email Management", "Document Prep", "Travel Arrangements", "Data Organization"]
  },
  { 
    title: "Customer Support", 
    slug: "customer-support", 
    icon: PhoneCall, 
    description: "Professional, US-focused customer service for your clients, ensuring high satisfaction.",
    features: ["Omnichannel Support", "Ticket Resolution", "Client Onboarding", "Live Chat"]
  },
  { 
    title: "Lead Generation", 
    slug: "lead-generation", 
    icon: Database, 
    description: "Targeted outbound campaigns and prospect research to consistently fill your sales pipeline.",
    features: ["Prospect Research", "Outreach Campaigns", "CRM Updates", "List Building"]
  },
  { 
    title: "Back Office Operations", 
    slug: "back-office", 
    icon: Shield, 
    description: "Robust back-office support including compliance tracking and vendor coordination.",
    features: ["Data Management", "Compliance", "Vendor Coordination", "Inventory Management"]
  }
];
