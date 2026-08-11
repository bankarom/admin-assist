import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Home, LineChart, Scale, HeartPulse, ShoppingBag, CheckCircle2 } from "lucide-react";

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full py-20 bg-brand-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto mb-8">
            Specialized administrative support tailored to the unique compliance, software, and operational needs of your specific industry.
          </p>
          <Link href="/#contact"><Button size="lg" variant="secondary">Discuss Your Industry</Button></Link>
        </div>
      </section>

      {/* INDUSTRIES LIST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <industry.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-brand-900">{industry.title}</h3>
                <p className="mb-6 text-slate-600 flex-1">{industry.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Common Tasks:</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-brand-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-brand-600 group-hover:text-brand-700 mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't see your industry?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our highly trained professionals have diverse backgrounds and can adapt to almost any operational environment. Let's discuss your specific requirements.
          </p>
          <Link href="/#contact"><Button size="lg" className="bg-brand-700 hover:bg-brand-800 text-white">Contact Us Today</Button></Link>
        </div>
      </section>
    </div>
  );
}

const INDUSTRIES = [
  { 
    title: "Auto Repossession & Towing", 
    icon: Car, 
    description: "Deep expertise in the auto recovery industry. We are proficient in RDN, Clearplan, iRepo, and major forwarding systems.",
    features: ["Condition Report Updates", "Forwarder Communications", "Data Entry in RDN", "Compliance Tracking"]
  },
  { 
    title: "Real Estate & Property", 
    icon: Home, 
    description: "Support for realtors, property managers, and brokerages to streamline transactions and tenant management.",
    features: ["Listing Management", "Tenant Screening Support", "Lease Administration", "Appointment Setting"]
  },
  { 
    title: "Financial & Accounting", 
    icon: LineChart, 
    description: "Secure, confidential assistance for CPAs, wealth managers, and financial institutions.",
    features: ["Data Verification", "Receipt Tracking", "Basic Bookkeeping", "Client Follow-ups"]
  },
  { 
    title: "Legal Practices", 
    icon: Scale, 
    description: "Detail-oriented support for law firms, ensuring accurate document handling and pristine scheduling.",
    features: ["Document Formatting", "Court Calendar Management", "Client Intake", "Filing Assistance"]
  },
  { 
    title: "Healthcare & Medical", 
    icon: HeartPulse, 
    description: "HIPAA-compliant administrative support handling the paperwork so you can focus on patient care.",
    features: ["Patient Scheduling", "Insurance Verification", "Medical Billing Support", "Records Management"]
  },
  { 
    title: "E-Commerce & Retail", 
    icon: ShoppingBag, 
    description: "Operational and customer service support to keep your digital storefront running 24/7.",
    features: ["Order Processing", "Inventory Updates", "Customer Inquiries", "Refund Management"]
  }
];
