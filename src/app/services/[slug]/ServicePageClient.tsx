"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { motion } from "framer-motion";

// Comprehensive Data for 10 Services (6 Repo + 4 Generic)
const SERVICES_DATA = {
  // REPO SERVICES (6)
  "assignment-management": {
    title: "Assignment Management",
    subtitle: "End-to-end, automated handling of your recovery orders and dispatch routing.",
    heroImage: "/images/adminassist_service_hero_1786360462305.jpg",
    challengeImage: "/images/adminassist_blog_3_1786360525825.jpg",
    overview: "Managing incoming assignments from multiple portals (RDN, Clearplan, iRepo) is chaotic and error-prone. We handle the complete lifecycle of your assignments, from instant acceptance based on your precise coverage rules, to meticulously loading cases into your routing systems so your field agents can hit the road faster with zero data entry errors.",
    challengesTitle: "Assignment Chaos is Costing You Recoveries & Scorecard Points",
    challenges: [
      "Missing highly profitable assignments due to slow manual response times",
      "Costly data entry errors when manually loading cases into Clearplan",
      "Dispatchers overwhelmed by managing 5+ different lender portals simultaneously",
      "Accidentally accepting assignments outside of profitable coverage areas"
    ],
    features: [
      { title: "Automated Acceptance & Rules Logic", desc: "We deploy advanced rule-based logic to rapidly review and accept profitable assignments based on your specific coverage zones, client preferences, and current lot capacity." },
      { title: "Precision Order & Case Loading", desc: "Every assignment is manually verified or automatically loaded directly into your core mapping systems (Clearplan, Recovery Connect) with zero data loss or translation errors." },
      { title: "Dynamic Coverage Area Detection", desc: "We utilize live mapping tools to verify zip codes and physical addresses, ensuring you only accept assignments within your active, profitable recovery zones." },
      { title: "Intelligent Priority Assessment", desc: "We flag high-value assets, aging accounts, or time-sensitive orders (like impounds) for immediate, priority action by your dispatch team." },
      { title: "Cross-Portal Synchronization", desc: "Seamlessly synchronize statuses between RDN, iRepo, and Clearplan to ensure all platforms reflect the latest assignment data." },
      { title: "Automated Fee Requests", desc: "Instantly trigger fee increase requests for out-of-zone or complex recoveries based on your predefined margin requirements." }
    ],
    whyUs: [
      { title: "Speed to Lead", desc: "Our teams monitor portals 24/7/365, guaranteeing you never miss an incoming assignment, protecting your lender scorecards." },
      { title: "Zero Data Errors", desc: "Meticulous loading into Clearplan ensures field agents have exact, actionable data without typos." },
      { title: "Rule-Based Logic", desc: "We follow your exact agency criteria for accepting, rejecting, or requesting fee increases on out-of-zone orders." },
      { title: "Native Tech Expertise", desc: "Deep, pre-trained expertise in RDN, iRepo, Recovery Connect, and custom integrations." }
    ],
    tech: ["RDN", "Recovery Connect", "Clearplan", "iRepo", "Zendesk"],
    faqs: [
      { q: "How quickly do you accept assignments?", a: "We monitor queues in real-time and accept within minutes to protect your scorecards and capture the best leads." },
      { q: "Do you load assignments directly into Clearplan?", a: "Yes, we ensure all accepted orders are mapped perfectly and immediately in Clearplan for your drivers." },
      { q: "What if an order is out of our coverage zone?", a: "We automatically decline it or immediately request a fee increase based on your predefined margin rules." },
      { q: "Can you handle multiple portals simultaneously?", a: "Yes, our specialists seamlessly manage RDN, iRepo, ALS, and direct lender portals concurrently via multi-monitor setups." },
      { q: "Do you provide weekend coverage?", a: "Absolutely. We provide 7-day, round-the-clock coverage to ensure weekend assignments are never missed." },
      { q: "How do you handle updates on new assignments?", a: "We log all critical updates (like new gate codes or debtor contact info) and push them directly to your field agents via Slack or Clearplan notes." }
    ]
  },
  "appointment-communication": {
    title: "Appointment & Communication",
    subtitle: "Enterprise-grade debtor communication, de-escalation, and secure redemption scheduling.",
    heroImage: "/images/adminassist_blog_2_1786360511738.jpg",
    challengeImage: "/images/adminassist_stressed_owner_1786360478457.jpg",
    overview: "Post-recovery logistics and debtor communications can overwhelm your office staff and lead to FDCPA violations. We handle inbound and outbound calls, schedule personal property redemptions, coordinate with debtors for vehicle releases, and ensure every single interaction is logged securely for flawless compliance.",
    challengesTitle: "Redemptions & Angry Debtors Are Disrupting Your Office",
    challenges: [
      "Core office staff spending hours on the phone with highly aggressive or angry debtors",
      "Double-booked redemption appointments causing massive lot congestion and security risks",
      "Missing compliance logs and incomplete call notes leading to lender audits",
      "Lenders actively complaining about poor customer service scores and hold times"
    ],
    features: [
      { title: "Strategic Appointment Setting", desc: "We schedule personal property and vehicle redemptions using shared digital calendars to ensure spaced-out, secure, and organized lot visits." },
      { title: "De-escalation & Customer Service", desc: "Our specialists handle inbound debtor calls with extreme professionalism, utilizing proven psychological de-escalation tactics." },
      { title: "Rigorous Call Auditing", desc: "We review recorded calls weekly to ensure strict adherence to FDCPA, CFPB, and specific lender compliance guidelines." },
      { title: "Real-Time System Updates", desc: "We log all communication notes, debtor attitudes, and release details directly into RDN or your proprietary CRM in real-time." },
      { title: "Post-Recovery Follow-Ups", desc: "Automated and manual outreach to debtors for post-recovery instructions and compliance notifications." },
      { title: "Bilingual Communication", desc: "Seamlessly handling interactions in multiple languages to ensure clear communication and compliance across all demographics." }
    ],
    whyUs: [
      { title: "De-escalation Trained", desc: "Our specialists undergo rigorous training to handle high-stress, hostile calls calmly and professionally." },
      { title: "Bulletproof Compliance", desc: "We adhere strictly to FDCPA, CFPB, and lender-specific communication guidelines to protect your agency." },
      { title: "Seamless Lot Scheduling", desc: "We manage your lot manager's calendar to ensure smooth, safe, and spaced-out redemptions." },
      { title: "US-Aligned Culture", desc: "Clear, empathetic, accent-neutral communication that protects your agency's and the lender's reputation." }
    ],
    tech: ["Zendesk", "RingCentral", "Calendly", "RDN", "Aircall"],
    faqs: [
      { q: "Do you speak directly with debtors?", a: "Yes, we act as your white-labeled front-line office staff, handling all inbound calls for redemptions and releases." },
      { q: "How do you schedule appointments?", a: "We use enterprise tools like Calendly integrated with your lot manager's Outlook/Google calendar to entirely prevent double-booking." },
      { q: "Are your agents trained in FDCPA?", a: "Absolutely. Regulatory compliance is our top priority when communicating with consumers on behalf of your agency." },
      { q: "Can you handle Spanish-speaking callers?", a: "Yes, we provide fully bilingual specialists to handle your Spanish-speaking demographic seamlessly." },
      { q: "Do you charge release fees on the phone?", a: "We don't process payments, but we strictly inform the debtor of the required fees (exact cash, money order) before they arrive." },
      { q: "How do you log the calls for audits?", a: "Every interaction is meticulously summarized and noted in RDN or your CRM to ensure a bulletproof audit trail for lenders." }
    ]
  },
  "skip-tracing-investigation": {
    title: "Skip Tracing & Investigation",
    subtitle: "Advanced data mining to locate hard-to-find assets.",
    heroImage: "/images/adminassist_whyus_1_1786361032147.jpg",
    challengeImage: "/images/adminassist_blog_1_1786360495554.jpg",
    overview: "When an asset goes dark, your agents shouldn't be wasting gas driving to dead addresses. Our dedicated skip tracers utilize advanced databases, social media investigations, and data cross-referencing to find accurate, actionable addresses for your field team.",
    challengesTitle: "Agents Are Wasting Time on Bad Addresses",
    challenges: [
      "Low recovery rates due to outdated lender information",
      "Field agents burning fuel checking empty driveways",
      "Lack of time to deeply investigate high-value targets",
      "Compliance risks from improper background searches"
    ],
    features: [
      { title: "Advanced Skip Tracing", desc: "Utilizing premium databases like TLO, IRB, and CLEAR to locate assets." },
      { title: "Asset Location Services", desc: "Cross-referencing LPR data with utility bills and recent credit pulls." },
      { title: "Background Verification", desc: "Confirming active military status or bankruptcy filings prior to recovery." },
      { title: "Contact Info Updates", desc: "Providing updated phone numbers and addresses to the lender." },
      { title: "Social Media Footprinting", desc: "Deep-dive investigations into public social profiles and marketplace listings to triangulate asset locations." },
      { title: "Familial Cross-Referencing", desc: "Analyzing extended family and known associate networks to uncover hidden assets." }
    ],
    whyUs: [
      { title: "Relentless Investigators", desc: "We dig deeper than basic database searches, utilizing social media and deep web." },
      { title: "Agent Integration", desc: "We push hot leads directly to the agent's Clearplan app in real-time." },
      { title: "LPR Experts", desc: "We analyze historical camera hits to predict the asset's next location." },
      { title: "Compliant Searches", desc: "Strict adherence to GLBA and DPPA regulations." }
    ],
    tech: ["TLOxp", "IRBsearch", "Clearplan", "DRN"],
    faqs: [
      { q: "Do you have your own database access?", a: "We operate using your agency's licensed credentials for TLO, IRB, or other databases to ensure compliance." },
      { q: "How do you communicate with field agents?", a: "We can drop pins directly in Clearplan or message agents via Slack/Teams when a hot address is found." },
      { q: "Can you run military (SCRA) checks?", a: "Yes, we can verify active duty status to protect your agency from wrongful repossessions." },
      { q: "Do you do social media investigations?", a: "Yes, we utilize Facebook, LinkedIn, and Instagram to track down elusive debtors." },
      { q: "How fast can you turn around a skip?", a: "We prioritize based on aging. Hot skips can be processed and pushed to agents within minutes." },
      { q: "Do you check for bankruptcies?", a: "Yes, we verify PACER to ensure the debtor hasn't filed for bankruptcy protection." }
    ]
  },
  "financial-management": {
    title: "Financial Management",
    subtitle: "Specialized bookkeeping and invoicing for repo agencies.",
    heroImage: "/images/adminassist_service_hero_1786360462305.jpg",
    challengeImage: "/images/adminassist_blog_2_1786360511738.jpg",
    overview: "Cash flow is the lifeblood of your agency. We manage the complex financial tasks specific to the repossession industry, ensuring invoices are submitted to lenders instantly upon recovery, and field agents are paid accurately for their successful hits.",
    challengesTitle: "Delayed Invoicing is Killing Your Cash Flow",
    challenges: [
      "Taking days to invoice lenders after a successful recovery",
      "Errors in calculating complex agent commission structures",
      "Losing track of unpaid storage or transport fees",
      "Owners spending weekends doing agency bookkeeping"
    ],
    features: [
      { title: "Data Processing & Invoicing", desc: "Submitting accurate invoices to lenders immediately upon asset recovery." },
      { title: "Billing & Bookkeeping", desc: "Reconciling incoming lender payments against open RDN invoices." },
      { title: "Driver Pay Management", desc: "Calculating complex commission splits for your field agents and spotters." },
      { title: "Expense Tracking", desc: "Logging fuel cards, toll fees, and lot maintenance expenses." },
      { title: "Storage Fee Recovery", desc: "Aggressively tracking and collecting daily storage and personal property fees from lenders." },
      { title: "Profitability Analytics", desc: "Generating detailed monthly reports on route profitability and overall agency margins." }
    ],
    whyUs: [
      { title: "Same-Day Invoicing", desc: "We invoice lenders the moment the condition report is approved." },
      { title: "Commission Accuracy", desc: "We ensure your agents are paid exactly what they earned, keeping morale high." },
      { title: "Repo-Specific Finance", desc: "We understand the difference between voluntary, involuntary, and skip fees." },
      { title: "CPA Ready", desc: "We keep your QuickBooks pristine for your end-of-year tax filing." }
    ],
    tech: ["QuickBooks", "RDN", "Xero", "Gusto"],
    faqs: [
      { q: "Can you invoice directly through RDN?", a: "Yes, we generate and submit invoices directly through RDN or the specific lender portal." },
      { q: "How do you calculate driver pay?", a: "We follow your exact commission structure (flat fee, percentage, skip bonus) based on the logs." },
      { q: "Do you handle collections on unpaid invoices?", a: "We can send regular aging reports and follow-up emails to lenders regarding past-due invoices." },
      { q: "Can you manage our toll and fuel expenses?", a: "Yes, we can reconcile your PrePass, Bestpass, and fleet fuel card statements." },
      { q: "Do you have access to our bank accounts?", a: "We only require 'View Only' access for reconciliation. We cannot authorize transfers." },
      { q: "Can you track storage fees?", a: "Yes, we calculate and bill for daily storage, personal property storage, and transport fees." }
    ]
  },
  "storage-logistics": {
    title: "Storage & Logistics",
    subtitle: "Managing lot inventory and transport coordination.",
    heroImage: "/images/adminassist_blog_3_1786360525825.jpg",
    challengeImage: "/images/adminassist_whyus_1_1786361032147.jpg",
    overview: "A disorganized lot leads to lost property, damaged vehicles, and compliance nightmares. We manage your digital lot inventory, coordinate transport with auction houses, and ensure personal property is inventoried and tracked perfectly.",
    challengesTitle: "Lot Chaos Leads to Liability",
    challenges: [
      "Vehicles sitting on the lot for weeks without auction release",
      "Losing track of personal property boxes",
      "Poor communication with transport drivers",
      "Inaccurate lot inventory causing compliance failures"
    ],
    features: [
      { title: "Storage Management", desc: "Tracking exactly which vehicles are on your lot and how long they've been there." },
      { title: "Driver Communications", desc: "Coordinating pickup times with transport drivers and auction houses." },
      { title: "Vehicle Logistics", desc: "Managing releases, transport orders, and gate passes." },
      { title: "Inventory Tracking", desc: "Maintaining digital logs of all personal property bags and their specific shelf locations." },
      { title: "Auction Release Hounding", desc: "Proactively contacting lenders to secure auction release authorizations and clear lot space." },
      { title: "Compliance Auditing", desc: "Conducting regular digital audits of lot inventory to ensure 100% compliance with state regulations." }
    ],
    whyUs: [
      { title: "Auction Coordination", desc: "We push lenders to send releases faster so you can clear your lot." },
      { title: "Digital Precision", desc: "We ensure your physical lot perfectly matches your digital system." },
      { title: "Transport Routing", desc: "We help coordinate efficient load-outs for transport trucks." },
      { title: "Liability Protection", desc: "Strict tracking of personal property to prevent debtor lawsuits." }
    ],
    tech: ["Clearplan", "RDN", "Custom Lot Managers", "Excel/Google Sheets"],
    faqs: [
      { q: "How do you track personal property?", a: "We log the unique bag/box IDs into your system along with the corresponding VIN and lot location." },
      { q: "Can you arrange transport to the auction?", a: "We can communicate with the transport companies, send gate passes, and schedule pickup windows." },
      { q: "Do you monitor how long cars sit on the lot?", a: "Yes, we run weekly aging reports and ping lenders to get release authorizations for older units." },
      { q: "Can you help with police reporting?", a: "Yes, we can submit the necessary post-recovery notifications to local police departments." },
      { q: "Do you handle transport invoicing?", a: "Yes, we ensure all transport and lot fees are billed before the vehicle leaves the yard." },
      { q: "How do you handle gate passes?", a: "We verify the transporter's credentials and issue the digital gate pass required for pickup." }
    ]
  },
  "field-agent-support": {
    title: "Field Agent Support",
    subtitle: "Real-time dispatch and backend support for your drivers.",
    heroImage: "/images/adminassist_whyus_2_1786361048027.jpg",
    challengeImage: "/images/adminassist_service_hero_1786360462305.jpg",
    overview: "Your field agents should be focused on the road and safely securing assets, not typing on a laptop. Our dispatch support team acts as their co-pilot, entering condition reports, processing updates, and handling emergencies in real-time.",
    challengesTitle: "Agents Are Too Busy Typing to Drive",
    challenges: [
      "Agents spending 20 minutes per stop entering condition reports",
      "Delayed updates to lenders because agents are on the road",
      "Lack of real-time support during hostile recoveries",
      "Poor routing causing agents to cross paths inefficiently"
    ],
    features: [
      { title: "Real-Time Field Support", desc: "Acting as a digital co-pilot, communicating via Slack or radio." },
      { title: "Delay Prevention", desc: "Processing condition reports (CRs) instantly while the agent drives to the next stop." },
      { title: "Emergency Assistance", desc: "Rapidly verifying orders or contacting authorities during hostile situations." },
      { title: "Performance Monitoring", desc: "Tracking agent scans, hits, and route efficiency via Clearplan." },
      { title: "Dynamic Night Routing", desc: "Identifying dense clusters of assignments and dynamically updating routes during graveyard shifts." },
      { title: "On-Hook Approvals", desc: "Instantly securing verbal releases from lenders when an agent has an 'On Hold' vehicle on the hook." }
    ],
    whyUs: [
      { title: "Agent Safety First", desc: "We take the admin burden off so they can keep their eyes on their surroundings." },
      { title: "Instant CR Processing", desc: "Agents upload raw photos; we build and submit the formal CR." },
      { title: "Route Optimization", desc: "We help identify the most dense clusters of addresses for night runs." },
      { title: "Always Awake", desc: "We provide dedicated night-shift dispatchers for your graveyard agents." }
    ],
    tech: ["Clearplan", "Slack", "Microsoft Teams", "RDN", "Zello"],
    faqs: [
      { q: "Do you work night shifts?", a: "Yes! We know repossessions happen at night. We have dedicated graveyard shift support teams." },
      { q: "How do agents send you condition reports?", a: "Agents can drop raw photos and voice notes into a dedicated Slack channel; we do the rest." },
      { q: "Can you update Clearplan statuses?", a: "Yes, we instantly update addresses as 'Bad Address', 'On Hold', or 'Recovered'." },
      { q: "How do you handle hostile situations?", a: "If an agent calls a code word, we can immediately verify the order status with the lender or dispatch local police." },
      { q: "Do you monitor LPR hits?", a: "Yes, we can monitor live DRN hits and route the closest agent to the location." },
      { q: "Can you request on-hook approvals?", a: "Yes, if an agent has the car on-hook but the order is on hold, we instantly call the lender for a verbal release." }
    ]
  },
  
  // GENERIC BUSINESS SERVICES (4)
  "administrative-support": {
    title: "Administrative Support",
    subtitle: "End-to-end daily administrative support to keep your operations organized.",
    heroImage: "/images/adminassist_blog_2_1786360511738.jpg",
    challengeImage: "/images/adminassist_stressed_owner_1786360478457.jpg",
    overview: "Our Administrative Support services are designed to offload the repetitive, time-consuming tasks that drain your team's energy. From managing crowded inboxes and complex scheduling to organizing digital files and preparing documents, our highly trained professionals handle it all with precision.",
    challengesTitle: "Managing Tasks with a Small Team is Challenging",
    challenges: [
      "Balancing core business growth with endless administrative tasks",
      "High operational overhead eating into profit margins",
      "Difficulty scaling operations without massive hiring costs",
      "Time-consuming training on internal systems and software"
    ],
    features: [
      { title: "Email & Inbox Management", desc: "Sorting, filtering, and responding to routine inquiries." },
      { title: "Document Preparation", desc: "Drafting, formatting, and proofreading essential business documents." },
      { title: "Data Organization", desc: "Maintaining digital files, CRMs, and internal databases." },
      { title: "Travel Arrangements", desc: "Booking flights, hotels, and managing complex itineraries." },
      { title: "Calendar Synchronization", desc: "Proactively managing executive calendars to prevent conflicts and ensure deep-work blocks." },
      { title: "Meeting Minutes & Follow-Ups", desc: "Attending virtual meetings, taking precise notes, and assigning action items to stakeholders." }
    ],
    whyUs: [
      { title: "Rapid Onboarding", desc: "Get started within 48 hours with our streamlined onboarding process." },
      { title: "Proven Cost Savings", desc: "Cut wage costs significantly while improving operational efficiency." },
      { title: "Scalable Teams", desc: "Expand or contract your team based on seasonal business needs." },
      { title: "Tech Proficient", desc: "Pre-trained on Google Workspace, Slack, and standard office tools." }
    ],
    tech: ["Google Workspace", "Microsoft 365", "Slack", "Asana", "Trello", "Notion", "Salesforce"],
    faqs: [
      { q: "How quickly can you get started with our operations?", a: "We can typically have a dedicated professional onboarded and integrated into your systems within 48 to 72 hours." },
      { q: "How do you ensure data security and compliance?", a: "We utilize enterprise-grade security protocols, secure networks, and strict NDAs." },
      { q: "Can we scale our team up or down based on seasonal needs?", a: "Absolutely. Our flexible model allows you to add or reduce administrative support based on your exact business demands." },
      { q: "Will my assistant work in my time zone?", a: "Yes, we align our working hours precisely with your preferred US time zone." },
      { q: "Do I have to train the assistant on how to use basic software?", a: "No. All our professionals are highly proficient in standard tools before they are assigned to you." },
      { q: "What if I don't have enough work for a full-time assistant?", a: "We offer fractional support models so you only pay for the exact hours or deliverables you need." }
    ]
  },
  "customer-support": {
    title: "Customer Support",
    subtitle: "Professional, US-focused customer service for your clients.",
    heroImage: "/images/adminassist_blog_1_1786360495554.jpg",
    challengeImage: "/images/adminassist_blog_3_1786360525825.jpg",
    overview: "Deliver world-class customer experiences without building a massive internal call center. Our trained support specialists handle inbound inquiries, resolve complex tickets, and represent your brand with the utmost professionalism and cultural alignment.",
    challengesTitle: "Poor Support is Costing You Clients",
    challenges: [
      "High abandonment rates due to long hold times",
      "Negative reviews from offshore teams with language barriers",
      "Inability to provide 24/7 or extended hour support",
      "Backlogs in ticketing systems during peak seasons"
    ],
    features: [
      { title: "Inbound/Outbound Calls", desc: "Handling inquiries, orders, and proactive outreach." },
      { title: "Email Support", desc: "Rapid, accurate email resolution based on your SOPs." },
      { title: "Live Chat Support", desc: "Real-time assistance for website visitors and users." },
      { title: "Ticket Resolution", desc: "Managing Zendesk, Freshdesk, or HubSpot queues." },
      { title: "Omnichannel Integration", desc: "Seamlessly switching between social media DMs, SMS, and traditional channels to resolve issues." },
      { title: "Escalation Management", desc: "De-escalating severe complaints and routing complex technical issues to your internal tier-2 team." }
    ],
    whyUs: [
      { title: "Accent Neutrality", desc: "Professionals trained for clear, empathetic US communication." },
      { title: "Deep Brand Training", desc: "We learn your products inside and out before taking calls." },
      { title: "Metrics Driven", desc: "We rigorously track CSAT, First Response Time, and Resolution Rates." },
      { title: "Flexible Shifts", desc: "Coverage available across all US time zones." }
    ],
    tech: ["Zendesk", "Intercom", "Freshdesk", "HubSpot Service Hub", "RingCentral", "Aircall"],
    faqs: [
      { q: "Do you provide 24/7 support coverage?", a: "Yes, we can build a rotating team to ensure your customers get answers at any hour." },
      { q: "How do you handle escalations?", a: "We follow your exact Standard Operating Procedures (SOPs) and escalate complex issues directly to your internal team." },
      { q: "Can you use our existing phone system?", a: "Yes, we integrate directly into cloud-based VoIP systems like RingCentral or Aircall." },
      { q: "How do you measure success?", a: "We track core metrics including CSAT, CES, and First Contact Resolution (FCR)." },
      { q: "Will they sound like outsourced agents?", a: "No. Our teams are heavily trained in US cultural nuances and accent neutralization." },
      { q: "Can they handle social media complaints?", a: "Yes, we provide social listening and response services across standard platforms." }
    ]
  },
  "lead-generation": {
    title: "Lead Generation",
    subtitle: "Targeted campaigns and prospect research to fill your sales pipeline.",
    heroImage: "/images/adminassist_whyus_1_1786361032147.jpg",
    challengeImage: "/images/adminassist_whyus_2_1786361048027.jpg",
    overview: "Your sales team should be closing deals, not hunting for contact info. Our Lead Generation specialists handle the time-consuming top-of-funnel work: building targeted lists, conducting prospect research, and executing initial outreach campaigns.",
    challengesTitle: "Sales Reps Are Wasting Time Prospecting",
    challenges: [
      "Account executives spending 40% of their day doing data entry",
      "Inconsistent lead flow leading to unpredictable revenue",
      "Outdated or inaccurate CRM data killing conversion rates",
      "Lack of structured outreach follow-ups"
    ],
    features: [
      { title: "Prospect Research", desc: "Finding key decision-makers on LinkedIn and ZoomInfo." },
      { title: "List Building", desc: "Creating targeted, verified lead lists for your campaigns." },
      { title: "Outreach Campaigns", desc: "Managing cold email sequences and initial messaging." },
      { title: "CRM Updates", desc: "Ensuring all contact data is perfectly accurate and up-to-date." },
      { title: "Data Hygiene & Verification", desc: "Rigorous email verification processes to protect your domain reputation and reduce bounce rates." },
      { title: "Appointment Setting", desc: "Managing calendar bookings and coordinating direct meetings for your account executives." }
    ],
    whyUs: [
      { title: "Sales-Minded", desc: "Assistants who truly understand B2B sales cycles." },
      { title: "Data Accuracy", desc: "Rigorous verification to prevent bounce rates and protect sender reputation." },
      { title: "Tech Stack Native", desc: "Experts in Apollo, Sales Navigator, and more." },
      { title: "Consistent Volume", desc: "Reliable daily quota delivery to keep your closers busy." }
    ],
    tech: ["Apollo.io", "LinkedIn Sales Navigator", "ZoomInfo", "HubSpot Sales", "Outreach", "Salesloft"],
    faqs: [
      { q: "Do your assistants make cold calls?", a: "Our primary focus is data-driven lead gen and email outreach. We can provide specialized SDRs for calling upon request." },
      { q: "How do you ensure data accuracy?", a: "We use a multi-step verification process to ensure high deliverability." },
      { q: "Can you write the cold email scripts?", a: "Yes, we have experienced copywriters who can craft high-converting cold email sequences." },
      { q: "How many leads can you generate per week?", a: "Volume depends on the strictness of your ICP, but typically 200-500 verified leads per week." },
      { q: "Do you manage our LinkedIn accounts?", a: "Yes, we can execute social selling campaigns directly from your founders' LinkedIn accounts." },
      { q: "What happens if a prospect replies?", a: "We immediately notify your sales team or book the meeting directly on your calendar." }
    ]
  },
  "back-office": {
    title: "Back Office Operations",
    subtitle: "Robust support for internal operations, compliance, and vendor management.",
    heroImage: "/images/adminassist_blog_3_1786360525825.jpg",
    challengeImage: "/images/adminassist_home_hero_1786360444382.jpg",
    overview: "A business is only as strong as its back office. We handle the crucial, behind-the-scenes operational tasks that keep your company compliant, stocked, and running smoothly. From vendor coordination to data hygiene, we act as the operational backbone of your organization.",
    challengesTitle: "Internal Operations Are Becoming a Bottleneck",
    challenges: [
      "Losing track of vendor contracts and compliance renewals",
      "Messy internal databases slowing down every department",
      "Key personnel bogged down by manual inventory or ordering tasks",
      "Lack of standardized operating procedures (SOPs)"
    ],
    features: [
      { title: "Compliance Tracking", desc: "Monitoring licenses, insurance, and regulatory requirements." },
      { title: "Vendor Coordination", desc: "Managing supplier communications and purchase orders." },
      { title: "Data Management", desc: "Cleansing and organizing large datasets." },
      { title: "Inventory Management", desc: "Tracking stock levels and reordering supplies." },
      { title: "SOP Documentation", desc: "Creating and maintaining comprehensive standard operating procedures for internal workflows." },
      { title: "Contract Lifecycle Management", desc: "Tracking contract renewals, expirations, and essential terms across all vendors." }
    ],
    whyUs: [
      { title: "Detail Obsessed", desc: "Zero tolerance for data entry errors." },
      { title: "Process Builders", desc: "We help document and standardize your chaotic workflows." },
      { title: "Highly Reliable", desc: "Consistent, daily execution of critical tasks." },
      { title: "Cross-Functional", desc: "Able to support multiple departments simultaneously." }
    ],
    tech: ["Airtable", "Smartsheet", "QuickBase", "SAP", "Oracle", "Monday.com"],
    faqs: [
      { q: "Can you help us build SOPs?", a: "Yes, our team is excellent at taking undocumented processes and turning them into clear, step-by-step SOPs." },
      { q: "Do you handle physical inventory?", a: "While we operate remotely, we manage the software and logistics tracking for physical inventory in your warehouses." },
      { q: "Can you interface with our legal team?", a: "Yes, we often coordinate with legal teams to ensure compliance documents are properly filed." },
      { q: "How do you handle confidential data?", a: "We use strict access controls and zero-trust security policies." },
      { q: "Can you migrate us to a new ERP?", a: "We provide the heavy lifting data-entry required for successful ERP migrations." },
      { q: "Do you provide project management support?", a: "Yes, we can act as project coordinators, keeping your internal teams on track." }
    ]
  },
  "default": {
    title: "Premium Business Solutions",
    subtitle: "Customized operational support to drive your business forward.",
    heroImage: "/images/adminassist_service_hero_1786360462305.jpg",
    challengeImage: "/images/adminassist_stressed_owner_1786360478457.jpg",
    overview: "We deliver tailored business solutions designed to optimize your workflow, reduce overhead, and increase your team's overall output. Our professionals are trained across various industries and software platforms.",
    challengesTitle: "Operational Bottlenecks Are Slowing Your Growth",
    challenges: [
      "Teams are stretched too thin across multiple departments",
      "Skyrocketing internal overhead and payroll costs",
      "Inability to scale rapidly during peak seasons",
      "Data silos and disorganized internal systems"
    ],
    features: [
      { title: "Custom Workflows", desc: "Tailored to your exact requirements." },
      { title: "Dedicated Support", desc: "A team that understands your business." },
      { title: "Performance Tracking", desc: "Regular reporting on KPIs and deliverables." },
      { title: "Continuous Optimization", desc: "Always finding ways to improve efficiency." },
      { title: "Strategic Integration", desc: "Seamless integration directly with your proprietary software." },
      { title: "Scalable Operations", desc: "Easily adjust support bandwidth as your business demands fluctuate." }
    ],
    whyUs: [
      { title: "Industry Expertise", desc: "Professionals with background in your specific sector." },
      { title: "Advanced Software Proficiency", desc: "Pre-trained on major industry platforms." },
      { title: "Scalability", desc: "Grow your team instantly when demand spikes." },
      { title: "Cost Efficiency", desc: "Maximize ROI without compromising on quality." }
    ],
    tech: ["HubSpot", "Zendesk", "QuickBooks", "RingCentral", "Monday.com", "ClickUp"],
    faqs: [
      { q: "Do you support custom software?", a: "Yes, our professionals are highly adaptable and can be trained on your proprietary systems quickly." },
      { q: "What is your pricing model?", a: "We offer flexible, transparent pricing based on the level of expertise and hours required." },
      { q: "Are your services guaranteed?", a: "Yes, we stand behind our work with a satisfaction guarantee and flexible terms." },
      { q: "How do we get started?", a: "Simply schedule a discovery call, and we'll outline a customized implementation plan." },
      { q: "Can I interview the assistant first?", a: "Absolutely. We want to ensure a perfect personality and cultural fit for your team." },
      { q: "Do you provide equipment?", a: "Our remote professionals come fully equipped with secure, high-speed workstations." }
    ]
  }
};

export default function ServicePageClient({ slug, wpData, relatedPosts = [] }: { slug: string, wpData?: any, relatedPosts?: any[] }) {
  const localData = SERVICES_DATA[slug as keyof typeof SERVICES_DATA] || SERVICES_DATA["default"];
  
  const service = {
    title: wpData?.title || localData.title,
    subtitle: wpData?.serviceDetails?.subtitle || localData.subtitle,
    overview: wpData?.serviceDetails?.overview || localData.overview,
    features: wpData?.serviceDetails?.features || localData.features,
    whyUs: wpData?.serviceDetails?.whyUs || localData.whyUs,
    heroImage: wpData?.featuredImage?.node?.sourceUrl || localData.heroImage,
    challengeImage: localData.challengeImage,
    challengesTitle: localData.challengesTitle,
    challenges: localData.challenges,
    tech: localData.tech,
    faqs: localData.faqs
  };

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="max-w-3xl">
              {/* BREADCRUMBS */}
              <div className="flex items-center text-sm font-medium text-slate-500 mb-8 space-x-2">
                <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 line-clamp-1">{service.title}</span>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10"
              >
                {service.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/#contact">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-brand-500/25 transition-all">
                    Discuss Your Needs <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative h-[400px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image src={service.heroImage} alt={service.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* OVERVIEW & CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm mb-6">
                  <Zap className="w-4 h-4" /> Service Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Built for High-Volume Excellence</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.overview}</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.challengesTitle}</h3>
                <ul className="space-y-4">
                  {service.challenges.map((challenge: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={service.challengeImage} alt="Business Challenges" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10">
                <p className="text-white text-xl font-medium leading-relaxed">
                  "Stop letting operational friction dictate your growth. We provide the leverage you need to scale effortlessly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Core Capabilities</h2>
            <p className="text-xl text-slate-600">Discover how our specialized team executes tasks flawlessly and efficiently, integrating directly with your proprietary tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: any, i: number) => (
              <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-brand-100">
                    <CheckCircle2 className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Admin Assist</h2>
            <p className="text-lg text-slate-400">We don't just provide remote workers; we provide strategic operational partners.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.whyUs.map((reason: any, i: number) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
                <Zap className="w-8 h-8 text-brand-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Native Technology Integration</h2>
            <p className="text-slate-600">Our professionals come pre-trained on the platforms you already use.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.tech.map((tech: string, i: number) => (
              <div key={i} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium font-mono hover:border-brand-300 hover:bg-brand-50 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our {service.title} service.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq: any, i: number) => (
              <details key={i} className="group bg-white rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden border border-slate-200 shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-slate-900">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-open:-rotate-180 transition-transform duration-300">
                    <ChevronRight className="w-5 h-5 rotate-90 text-brand-600" />
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

      {/* RELATED POSTS FROM WORDPRESS */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Related Insights</h2>
                <p className="text-lg text-slate-600">Discover our latest articles on {service.title}.</p>
              </div>
              <Link href="/blog" className="hidden md:flex items-center text-brand-600 font-bold hover:text-brand-700">
                View all articles <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post: any) => (
                <div key={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={post.featuredImage?.node?.sourceUrl || "/images/adminassist_blog_1_1786360495554.jpg"} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-slate-500 mt-auto">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700">
                        Read <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-brand-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Optimize Your {service.title}?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Schedule a free discovery call today and let us build a custom implementation plan for your business.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-white text-brand-700 hover:bg-slate-100 font-bold shadow-xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
