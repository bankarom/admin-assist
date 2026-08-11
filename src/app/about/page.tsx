import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Users, Clock, ArrowRight, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-800/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Empowering Businesses With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Elite US Support</span>
            </h1>
            <p className="text-xl text-brand-100 leading-relaxed mb-8">
              Admin Assist was founded on a simple premise: businesses shouldn't have to choose between high-quality operational support and affordable overhead.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-brand-900 hover:bg-slate-100 h-14 px-8 text-lg font-semibold">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION & STORY */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-100">
                <Image src="/images/adminassist_home_hero_1786360444382.jpg" alt="Admin Assist Team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-100 rounded-3xl -z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-50 rounded-full -z-0"></div>
              
              <div className="absolute bottom-12 -left-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm font-medium text-slate-500">Commitment to Quality</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                  Redefining What a Remote Professional Can Do For You
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  For too long, outsourcing meant sacrificing quality, dealing with language barriers, and spending more time managing remote workers than actually doing business. We built Admin Assist to change that entirely.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We provide enterprise-grade, US-focused operational support that seamlessly integrates into your existing workflows. Our professionals aren't just order-takers; they are strategic partners trained in your specific industry platforms, whether that's Auto Repossession, Real Estate, or Healthcare.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-brand-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Top 1% Talent</h4>
                    <p className="text-sm text-slate-600">Rigorous vetting ensures only the best join our team.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-brand-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Data Security</h4>
                    <p className="text-sm text-slate-600">Enterprise protocols to protect your sensitive information.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES SUMMARY */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">A Full Spectrum of Operational Support</h2>
            <p className="text-lg text-slate-600">
              We provide an entire ecosystem of administrative services designed to scale your business. One partner, endless capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Administrative", desc: "Daily task management and operational organization." },
              { title: "Executive", desc: "High-level calendar and confidential support." },
              { title: "Customer Support", desc: "Omnichannel, US-focused client relations." },
              { title: "Lead Generation", desc: "Pipeline building and CRM data hygiene." },
              { title: "Back Office", desc: "Vendor coordination and compliance tracking." },
              { title: "Accounting", desc: "Bookkeeping and financial report preparation." },
              { title: "HR & Onboarding", desc: "Recruiting support and employee management." },
              { title: "CRM Management", desc: "Salesforce/HubSpot updates and workflow automation." }
            ].map((srv, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all">
                <CheckCircle2 className="w-8 h-8 text-brand-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">{srv.title}</h4>
                <p className="text-slate-600 text-sm">{srv.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">View Detailed Service Capabilities <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide every interaction, every task, and every partnership.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Uncompromising Quality", icon: Award, desc: "We don't settle for 'good enough'. We aim for excellence in every spreadsheet, email, and customer interaction." },
              { title: "Seamless Integration", icon: Users, desc: "We adapt to your culture and your tools. Your clients will never know they are speaking to an outsourced team." },
              { title: "Proactive Partnership", icon: Target, desc: "We don't just wait for instructions. We actively look for ways to optimize your workflows and save you time." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-brand-600 mb-6">
                  <value.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great Together.</h2>
          <p className="text-xl text-brand-200 mb-10">
            Stop drowning in operational tasks. Partner with Admin Assist and get back to growing your business.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-white text-brand-900 hover:bg-slate-100 h-14 px-8 text-lg">
              Book Your Free Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
