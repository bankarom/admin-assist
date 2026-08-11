"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Building2, Users, Briefcase, PhoneCall, ChevronRight, Star, Clock, Globe, Shield, MonitorSmartphone, Zap, Calculator, FileText, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { submitLeadForm } from "./actions/submitForm";

export default function HomeClient({ homeData, servicesData }: { homeData?: any, servicesData?: any[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean, message?: string} | null>(null);

  // Fallbacks
  const pillText = homeData?.heroPillText || "Premium US Administrative Support";
  const titleText = homeData?.heroTitle || "Optimize Your <br /><span className=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500\">Repossession</span> <br />Workflow.";
  const subtitleText = homeData?.heroSubtitle || "Stop wasting valuable resources on administrative overhead. Empower your field agents while our specialized remote experts handle skip tracing, compliance, and back-office operations at a fraction of the cost.";
  const phoneStr = homeData?.phoneNumber || "(407) 900-0208";
  
  // Format phone number for tel: link (strip non-digits)
  const phoneHref = phoneStr.replace(/\D/g,'');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // CF7 expects FormData
    const formData = new FormData(e.currentTarget);

    // If multiple platforms were selected, CF7 checkboxes usually need special handling, 
    // but default FormData handles it by sending multiple values.
    
    try {
      const result = await submitLeadForm(formData);
      setSubmitStatus(result);
      if (result.success) {
        (e.target as HTMLFormElement).reset(); // clear form
      }
    } catch (err) {
      setSubmitStatus({ success: false, message: "A network error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* HERO SECTION - MODERN 50/50 LAYOUT */}
      <section className="relative w-full pt-6 pb-12 md:pt-10 lg:pt-12 md:pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[800px] h-[800px] bg-brand-50 rounded-full blur-[120px] opacity-80 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
                {pillText}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]" dangerouslySetInnerHTML={{ __html: titleText }} />
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                {subtitleText}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/#contact" className="w-full sm:w-auto cursor-pointer">
                  <Button size="lg" className="w-full text-lg h-14 px-8 bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20 cursor-pointer">
                    <PhoneCall className="w-5 h-5 mr-2" /> Schedule Free Discovery Call
                  </Button>
                </Link>
                <a href={`tel:${phoneHref}`} className="w-full sm:w-auto cursor-pointer">
                  <Button size="lg" variant="outline" className="w-full text-lg h-14 px-8 border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50 text-slate-800 cursor-pointer">
                    <span className="text-brand-600 font-bold mr-2">Call:</span> {phoneStr}
                  </Button>
                </a>
              </div>
              
              {/* Trust Metrics */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 text-sm text-slate-600 font-semibold border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>48-72hr Onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>Risk-Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    $
                  </div>
                  <span>Save 60-70% on Costs</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Image Layout */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/adminassist_home_hero_1786360444382.jpg" 
                alt="Modern Repo Operations Center" 
                fill 
                className="object-cover" 
              />
              
              {/* Gradient Overlay for better contrast on widgets */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Floating Widget */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Operations Scaled</div>
                    <div className="text-lg font-bold text-slate-900">Efficiency Increased</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Cost Reduction</div>
                  <div className="text-2xl font-black text-green-500">70%</div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>


      {/* SERVICES OVERVIEW */}
      <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Enterprise-Grade <br/>Support Services</h2>
              <p className="text-lg text-slate-600">
                We don't just complete tasks; we integrate into your business operations. Our comprehensive support solutions are designed to scale with you.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">View All Services <ChevronRight className="ml-2 w-4 h-4"/></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(servicesData && servicesData.length > 0 
              ? servicesData.slice(0, 6).map(wpSvc => {
                  const fallback = SERVICES.find(s => s.slug === wpSvc.slug) || SERVICES[0];
                  return {
                    slug: wpSvc.slug,
                    title: wpSvc.title,
                    description: wpSvc.serviceDetails?.overview || fallback.description,
                    icon: fallback.icon,
                    highlights: fallback.highlights
                  };
                })
              : SERVICES
            ).map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                  <p className="mb-6 text-slate-600 leading-relaxed line-clamp-3">{service.description}</p>
                  
                  <ul className="mb-8 space-y-3">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-brand-500 mr-3 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={`/services/${service.slug}`} className="mt-auto inline-flex items-center text-sm font-bold text-brand-600 group-hover:text-brand-700">
                  Explore Solution <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full">View All Services</Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Seamless Integration Process</h2>
            <p className="text-lg text-slate-600">We make onboarding incredibly simple. From our first call to your dedicated assistant's first day, we handle the heavy lifting.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 z-0"></div>
            
            {[
              { step: "01", title: "Discovery Call", desc: "We analyze your operational needs, bottlenecks, and requirements." },
              { step: "02", title: "Talent Matching", desc: "We select the perfect professional from our vetted US-focused talent pool." },
              { step: "03", title: "Onboarding", desc: "Seamless integration into your company culture, tools, and processes." },
              { step: "04", title: "Scale & Grow", desc: "Ongoing performance management and the ability to scale your team anytime." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-2xl font-bold text-brand-600 relative">
                  {item.step}
                  <div className="absolute inset-[-4px] rounded-full border-2 border-brand-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Comprehensive) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image src="/images/adminassist_whyus_1_1786361032147.jpg" alt="Dedicated professionals" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-900/20 to-transparent"></div>
              
              {/* Floating Badges */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-brand-200" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Top 1%</div>
                    <div className="text-brand-100 text-sm">Vetted Talent</div>
                  </div>
                </div>
                
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">100% Secure</div>
                    <div className="text-brand-100 text-sm">Data Protection</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{homeData?.whyUsTitle || "Why Industry Leaders Choose Admin Assist"}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {homeData?.whyUsSubtitle || "Unlike basic virtual assistant platforms, we provide enterprise-level operational support. Our teams are deeply integrated into US business culture and standards."}
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Dedicated Staffing Model", desc: "You don't get a random pool of workers. You get a dedicated professional who learns your business intimately." },
                  { icon: Globe, title: "US Business Culture Alignment", desc: "Our professionals are trained in US communication styles, software standards, and compliance requirements." },
                  { icon: Clock, title: "Immediate Operational Readiness", desc: "Skip the painful hiring, interviewing, and training phases. We deploy ready-to-work professionals." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY INTEGRATION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Seamless <span className="text-brand-600">Technology</span> Integration</h2>
            <p className="text-lg text-slate-600">
              Our experts are trained and experienced in all leading industry platforms. No extra training time, no onboarding headaches.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { name: "RDN", img: "/images/logos/rdn.png" },
              { name: "Recovery Connect", img: "" },
              { name: "Clear Plan", img: "/images/logos/clear-plan.png" },
              { name: "Clear Data", img: "/images/logos/cleardata-logo.png" },
              { name: "Wombat (ALS)", img: "/images/logos/wombat.png" },
              { name: "iRepo", img: "" },
              { name: "IBeam", img: "/images/logos/iBeam.png" },
              { name: "IDICore", img: "/images/logos/idicore.png" },
              { name: "Webtracker", img: "/images/logos/webtracker.png" }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-slate-50 p-4 mb-4 flex items-center justify-center">
                  <div className="w-full h-full bg-white flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                    {tech.img ? (
                      <img 
                        src={tech.img} 
                        alt={`${tech.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <span className="font-bold text-slate-800 text-center text-lg">{tech.name}</span>
                    )}
                  </div>
                </div>
                <span className="font-semibold text-slate-800 text-sm md:text-base">{tech.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-500 font-medium mb-6">And many more platforms. If you use a different system, our team can quickly adapt.</p>
            <Link href="/#contact">
            <Button className="bg-brand-700 hover:bg-brand-800 text-white">Discuss Your Platform Integration</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 bg-white border-y border-slate-100" id="pricing">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Simple, <span className="text-brand-600">Transparent</span> Pricing</h2>
            <p className="text-lg text-slate-600">
              Enterprise-grade administrative support at a fraction of the cost. No hidden fees, no long-term contracts.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Main Pricing Card */}
            <div className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 p-32 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-32 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
                {/* Left Side: Price & Features */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-700/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-2xl">
                      $
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-extrabold flex items-baseline">
                        10<span className="text-xl text-slate-400 font-normal ml-1">/hour</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 font-medium mb-8 text-lg">Per specialist • Scale up or down as needed</p>
                  
                  <div className="space-y-4 mb-10">
                    <h4 className="font-bold text-lg text-white mb-6">What's Included:</h4>
                    {[
                      "Expert-level specialists",
                      "All major platform integration",
                      "48-72hr onboarding",
                      "Real-time communication",
                      "Dedicated account manager",
                      "Daily, weekly & monthly reporting",
                      "Performance analytics"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/#contact" className="block">
                    <Button size="lg" className="w-full h-14 text-lg bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                      Start Your Free Trial
                    </Button>
                  </Link>
                </div>
                
                {/* Right Side: Comparison & Scaling */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="font-bold text-xl text-white mb-6">Cost Comparison:</h4>
                  
                  <div className="space-y-4 mb-8">
                    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                      <div className="text-sm text-slate-400 mb-1">US Employee (40 hrs/week @ $22/hr)</div>
                      <div className="text-2xl font-bold text-red-400 mb-1">$3,520+/month</div>
                      <div className="text-xs text-slate-500">Plus benefits, taxes, overhead</div>
                    </div>
                    
                    <div className="bg-brand-900/50 rounded-xl p-5 border border-brand-500/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-500/10"></div>
                      <div className="relative z-10">
                        <div className="text-sm text-brand-200 mb-1">Admin Assist Specialist (40 hrs/week)</div>
                        <div className="text-3xl font-bold text-white mb-1">$1,600/month</div>
                        <div className="text-xs text-brand-300">All-inclusive, no hidden costs</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 text-green-400 font-bold text-center mb-10">
                    Save $1,920+ per specialist monthly!
                  </div>
                  
                  <Link href="/#contact" className="block">
                    <Button variant="outline" size="lg" className="w-full h-14 text-lg border-slate-600 bg-transparent hover:bg-slate-800 text-white">
                      Discuss Your Needs
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Bottom Scaling Examples */}
              <div className="bg-slate-950 p-8 border-t border-slate-800 text-center">
                <h5 className="font-bold text-slate-300 mb-6 text-sm uppercase tracking-widest">Flexible Scaling Examples</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
                  <div className="pt-4 sm:pt-0">
                    <div className="text-lg font-bold text-white">1 Specialist</div>
                    <div className="text-sm text-slate-400">40 hrs/week = $1,600/mo</div>
                  </div>
                  <div className="pt-4 sm:pt-0">
                    <div className="text-lg font-bold text-white">3 Specialists</div>
                    <div className="text-sm text-slate-400">120 hrs/week = $4,800/mo</div>
                  </div>
                  <div className="pt-4 sm:pt-0">
                    <div className="text-lg font-bold text-white">5+ Specialists</div>
                    <div className="text-sm text-slate-400">Custom hours & coverage</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Value Props Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
              {[
                { icon: Shield, title: "Risk-Free Trial", desc: "30-day money-back guarantee", color: "text-green-500", bg: "bg-green-50" },
                { icon: Clock, title: "No Contracts", desc: "Scale up or down anytime", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Users, title: "Expert Team", desc: "Pre-trained on all platforms", color: "text-purple-500", bg: "bg-purple-50" },
                { icon: PhoneCall, title: "24/7 Support", desc: "Always available when you need us", color: "text-orange-500", bg: "bg-orange-50" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-4 transition-transform hover:scale-110`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Latest Insights</h2>
            <Link href="/blog">
              <Button variant="outline" className="hidden sm:flex">View All Posts</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "How to Maximize ROI with a Remote Administrative Team", 
                category: "OPERATIONS", 
                date: "Aug 08, 2026", 
                slug: "maximize-roi-administrative-team",
                image: "/images/adminassist_blog_1_1786360495554.jpg" 
              },
              { 
                title: "Top 5 Software Tools Every Executive Assistant Needs", 
                category: "TECHNOLOGY", 
                date: "Aug 06, 2026", 
                slug: "top-software-tools-executive-assistant",
                image: "/images/adminassist_blog_2_1786360511738.jpg" 
              },
              { 
                title: "The Future of BPO: Trends to Watch in 2027", 
                category: "INDUSTRY", 
                date: "Aug 05, 2026", 
                slug: "future-of-bpo-trends-2027",
                image: "/images/adminassist_blog_3_1786360525825.jpg" 
              }
            ].map((post, i) => (
              <div key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-sm font-bold text-brand-600 mb-3 tracking-wider">{post.category}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors line-clamp-2">{post.title}</h4>
                  <div className="flex items-center justify-between text-sm text-slate-500 mt-auto">
                    <span>{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700">
                      Read <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog">
              <Button variant="outline" className="w-full">View All Posts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (10 Items) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100" id="faqs">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about working with Admin Assist.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How quickly can you integrate with our existing technology (RDN, Clearplan)?", a: "We have deep expertise in industry-standard platforms. We can typically integrate into your existing tech stack and begin operations within 48 to 72 hours without disrupting your daily flow." },
              { q: "Are your virtual assistants based in the US or offshore?", a: "We provide premium US-aligned professionals who are deeply integrated into US business culture, ensuring seamless communication and strict adherence to US compliance standards." },
              { q: "How do you handle sensitive data and compliance?", a: "Security is our top priority. We use enterprise-grade encryption, secure networks, and strict NDA protocols. Our teams are trained in data hygiene and compliance tracking to keep your operations secure." },
              { q: "What happens if we need to scale up our operations suddenly?", a: "Our flexible staffing model allows you to rapidly expand your dedicated team during peak seasons or sudden volume increases, saving you the time and cost of emergency hiring." },
              { q: "Do we get a dedicated account manager?", a: "Yes! You don't just get a pool of random workers. You get a dedicated operations manager and a consistent team that learns your business intimately." },
              { q: "What is the difference between Admin Assist and traditional BPOs?", a: "Traditional BPOs focus on call centers and low-level tasks. We provide enterprise-grade, highly specialized operational support (including CRM management, accounting, and repossession logistics) tailored to complex B2B needs." },
              { q: "Can you help document our chaotic internal processes?", a: "Absolutely. One of our core strengths is taking undocumented workflows and building clear, step-by-step Standard Operating Procedures (SOPs) for your organization." },
              { q: "How do you track performance and ensure accountability?", a: "We provide regular reporting on Key Performance Indicators (KPIs), daily deliverables, and task completion rates so you always have full visibility into your team's output." },
              { q: "What if we use custom, proprietary software?", a: "Our professionals are highly adaptable and tech-native. We can quickly learn and master your proprietary systems during our streamlined onboarding process." },
              { q: "Is there a long-term lock-in contract?", a: "No. We believe in earning your business every month. We offer flexible agreements and even a risk-free trial period to prove our value." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 group-open:-rotate-180 transition-transform duration-300">
                    <ChevronRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CONTACT FORM SECTION */}
      <section className="py-24 bg-white" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Ready to Transform Your Repo Operations?</h2>
            <p className="text-lg text-slate-600">Schedule a free 15-minute discovery call to see how we can help optimize your processes.</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 rounded-2xl p-8 md:p-10 text-white h-fit sticky top-24" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #0891b2 100%)' }}>
              <h3 className="text-3xl font-bold mb-10">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100 mb-1 font-medium">Call us directly</div>
                    <div className="text-xl font-bold">(407) 900-0208</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="text-sm text-blue-100 mb-1 font-medium">Email us</div>
                    <div className="text-xl font-bold">repo@adminassist.us</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100 mb-1 font-medium">Response time</div>
                    <div className="text-xl font-bold">Within 2 hours</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-white/20">
                <h4 className="text-xl font-bold mb-6">What to expect:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200" />
                    <span className="text-lg">15-minute discovery call</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200" />
                    <span className="text-lg">Custom cost analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200" />
                    <span className="text-lg">Platform integration assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-200" />
                    <span className="text-lg">Personalized implementation plan</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                {submitStatus && (
                  <div className={`p-4 rounded-lg border ${submitStatus.success ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" required className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" required className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" required className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" required className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" name="company" required className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Current Monthly Repo Volume</label>
                  <select name="volume" className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all bg-white text-slate-700">
                    <option value="">Select volume range</option>
                    <option value="1-50">1-50 repos per month</option>
                    <option value="51-100">51-100 repos per month</option>
                    <option value="101-250">101-250 repos per month</option>
                    <option value="251-500">251-500 repos per month</option>
                    <option value="500+">500+ repos per month</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-700">Current Platforms (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["RDN", "Recovery Connect", "Clear Plan", "Clear Data", "Wombat (ALS)", "Other"].map((platform) => (
                      <label key={platform} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="platforms" value={platform} className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                        <span className="text-sm text-slate-600">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Tell us about your current challenges</label>
                  <textarea 
                    name="challenges"
                    className="w-full p-4 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all min-h-[120px] resize-y"
                    placeholder="Describe your current pain points, team size, and what you hope to achieve..."
                  ></textarea>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl shadow-lg disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Schedule My Free Discovery Call"}
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to receive communications from Admin Assist. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
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
    highlights: ["Accepting/Declining", "Order Loading", "Coverage Verification"]
  },
  { 
    title: "Appointment & Communication", 
    slug: "appointment-communication", 
    icon: PhoneCall, 
    description: "Professional debtor communication, de-escalation, and lot redemption scheduling.",
    highlights: ["Redemption Scheduling", "Customer Service", "Call Auditing"]
  },
  { 
    title: "Skip Tracing & Investigation", 
    slug: "skip-tracing-investigation", 
    icon: Shield, 
    description: "Advanced data mining, social media deep-dives, and database research to locate assets.",
    highlights: ["Advanced Skips", "Asset Location", "Background Checks"]
  },
  { 
    title: "Financial Management", 
    slug: "financial-management", 
    icon: Calculator, 
    description: "Specialized bookkeeping, driver pay calculations, and immediate lender invoicing.",
    highlights: ["Same-Day Invoicing", "Driver Pay", "Expense Tracking"]
  },
  { 
    title: "Storage & Logistics", 
    slug: "storage-logistics", 
    icon: Building2, 
    description: "Managing digital lot inventory, transport coordination, and personal property tracking.",
    highlights: ["Lot Management", "Driver Comms", "Property Tracking"]
  },
  { 
    title: "Field Agent Support", 
    slug: "field-agent-support", 
    icon: Users, 
    description: "Real-time dispatch support, rapid condition report processing, and emergency assistance.",
    highlights: ["Real-Time Support", "CR Processing", "Performance Tracking"]
  },
  // 4 GENERIC SERVICES
  { 
    title: "Administrative Support", 
    slug: "administrative-support", 
    icon: FileText, 
    description: "Comprehensive daily administrative tasks to keep your business running smoothly.",
    highlights: ["Email Management", "Document Prep", "Travel Arrangements"]
  },
  { 
    title: "Customer Support", 
    slug: "customer-support", 
    icon: PhoneCall, 
    description: "Professional, US-focused customer service for your clients, ensuring high satisfaction.",
    highlights: ["Omnichannel Support", "Ticket Resolution", "Client Onboarding"]
  },
  { 
    title: "Lead Generation", 
    slug: "lead-generation", 
    icon: Database, 
    description: "Targeted outbound campaigns and prospect research to consistently fill your sales pipeline.",
    highlights: ["Prospect Research", "Outreach Campaigns", "CRM Updates"]
  },
  { 
    title: "Back Office Operations", 
    slug: "back-office", 
    icon: Shield, 
    description: "Robust back-office support including compliance tracking and vendor coordination.",
    highlights: ["Data Management", "Compliance", "Vendor Coordination"]
  }
];
