import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";

const BLOGS_DATA = {
  "maximize-roi-administrative-team": {
    title: "How to Maximize ROI with a Remote Administrative Team",
    category: "Operations",
    date: "Aug 08, 2026",
    author: "Improx Team",
    image: "/images/adminassist_blog_1_1786360495554.jpg",
    content: `
      <p class="mb-6 leading-relaxed text-lg text-slate-700">In today's fast-paced business environment, maximizing Return on Investment (ROI) is crucial for sustainable growth. One of the most effective strategies companies are adopting is the integration of remote administrative teams. But how do you ensure you are getting the most out of this setup? Here is a comprehensive guide to maximizing ROI with your remote staff.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">1. Clear Communication and Expectations</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">The foundation of any successful remote team is crystal clear communication. From day one, establish explicit expectations regarding working hours, response times, and deliverables. Utilizing tools like Slack or Microsoft Teams can bridge the gap, but the true ROI comes from documenting Standard Operating Procedures (SOPs). When your remote team knows exactly how a task should be completed, error rates plummet and efficiency skyrockets.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">2. Leverage the Right Technology Stack</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">You cannot maximize ROI if your team is using outdated tools. Investing in the right technology stack—such as Asana for project management, HubSpot for CRM, and Zoom for face-to-face check-ins—ensures your remote administrative team can work as effectively as if they were sitting in the office next to you. Automation within these tools can further reduce manual workload, allowing your team to focus on higher-value tasks.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">3. Shift from Time-Tracking to Output-Tracking</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Traditional management often focuses on hours worked, but in a remote setting, this metric is less relevant. To truly boost ROI, shift your focus to output and Key Performance Indicators (KPIs). If an administrative professional can complete a complex data entry task accurately in two hours instead of four, that efficiency should be celebrated. Paying for results rather than just seat-time encourages productivity and innovation.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">4. Treat Them Like In-House Employees</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">A common mistake is treating remote administrative staff as temporary or external vendors. The highest ROI comes when these professionals are integrated into your company culture. Invite them to all-hands meetings, celebrate their wins, and provide constructive feedback. When remote workers feel valued and part of a larger mission, their dedication and output quality naturally increase.</p>
      
      <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10">
        <p class="font-medium text-brand-900 mb-0">By implementing these strategies, businesses can transform their remote administrative teams from a basic cost-saving measure into a powerful engine for growth. The key lies in strategic integration, clear metrics, and fostering a strong team culture.</p>
      </div>
    `
  },
  "top-software-tools-executive-assistant": {
    title: "Top 5 Software Tools Every Executive Assistant Needs",
    category: "Technology",
    date: "Aug 06, 2026",
    author: "Improx Team",
    image: "/images/adminassist_blog_2_1786360511738.jpg",
    content: `
      <p class="mb-6 leading-relaxed text-lg text-slate-700">The role of an Executive Assistant (EA) has evolved dramatically. Today's EAs are strategic partners who manage complex projects, coordinate global travel, and act as the gatekeepers for C-suite executives. To perform at this elite level, they need an elite toolkit. Here are the top 5 software tools every Executive Assistant needs to master in 2026.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">1. Advanced Calendar Management (Calendly / Motion)</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Scheduling is the cornerstone of an EA's job. Tools like Calendly eliminate the back-and-forth of finding a meeting time. However, newer AI-driven tools like Motion go a step further by automatically rearranging an executive's schedule based on priority and deep-work preferences. Mastering these platforms ensures the executive's time is relentlessly protected.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">2. Collaborative Workspaces (Notion / Coda)</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Gone are the days of scattered Word documents and endless email chains. Platforms like Notion and Coda allow EAs to build custom databases, track meeting minutes, create internal wikis, and manage complex projects all in one unified space. These tools serve as the ultimate "second brain" for both the assistant and the executive.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">3. Expense Management (Expensify / Ramp)</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Handling receipts and expense reports used to be a tedious, end-of-month nightmare. Modern EAs rely on tools like Expensify or corporate card platforms like Ramp. These tools automate receipt scanning, categorize expenses in real-time, and seamlessly integrate with the company's accounting software, saving hours of manual data entry.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">4. Secure Digital Signatures (DocuSign)</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Executives sign a lot of documents—NDAs, contracts, and board resolutions. DocuSign remains the gold standard for secure, legally binding electronic signatures. A top-tier EA knows how to set up complex routing orders, tag documents correctly, and ensure sensitive agreements are executed without delay.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">5. AI-Powered Writing Assistants (Grammarly Pro / ChatGPT)</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">EAs draft countless emails, memos, and reports on behalf of their executives. Utilizing AI writing assistants ensures that every piece of communication is not only grammatically flawless but also matches the executive's specific tone and style. ChatGPT can be used to summarize long reports, while Grammarly ensures the final polish.</p>
      
      <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10">
        <p class="font-medium text-brand-900 mb-0">By equipping an Executive Assistant with these five tools, executives empower them to operate at maximum efficiency, turning administrative overhead into a strategic advantage.</p>
      </div>
    `
  },
  "future-of-bpo-trends-2027": {
    title: "The Future of BPO: Trends to Watch in 2027",
    category: "Industry",
    date: "Aug 05, 2026",
    author: "Improx Team",
    image: "/images/adminassist_blog_3_1786360525825.jpg",
    content: `
      <p class="mb-6 leading-relaxed text-lg text-slate-700">The Business Process Outsourcing (BPO) industry is undergoing a massive transformation. What was once seen purely as a cost-cutting measure has evolved into a strategic partnership model focused on specialized skills and advanced technology. As we approach 2027, several key trends are reshaping the landscape of global outsourcing.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">1. The Rise of Hyper-Specialization</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">The days of the "jack-of-all-trades" call center are fading. Companies are now seeking BPO partners with deep, niche expertise. Whether it is compliance tracking for auto repossession, HIPAA-certified healthcare data entry, or complex legal document formatting, the future belongs to BPOs that can offer hyper-specialized talent that requires zero basic training from the client.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">2. AI Integration Over AI Replacement</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">While there was fear that Artificial Intelligence would replace the BPO sector, the reality in 2027 is different. Leading BPOs are integrating AI into their workflows to supercharge their human agents. AI is handling the initial triage of customer tickets, summarizing long calls in real-time, and predicting customer sentiment, allowing the human agent to focus on empathy, complex problem solving, and high-value interactions.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">3. The Shift to "Nearshoring" and Cultural Alignment</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Cost is no longer the only factor. Companies have realized that poor cultural alignment and language barriers can severely damage their brand reputation. There is a massive trend towards nearshoring (e.g., Latin America for US companies) or utilizing highly trained, accent-neutral professionals who deeply understand US business etiquette and consumer expectations.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">4. Outcome-Based Pricing Models</h3>
      <p class="mb-6 leading-relaxed text-lg text-slate-700">Historically, BPOs charged per hour or per "seat." By 2027, we are seeing a shift towards outcome-based or performance-based pricing. Clients want to pay for results—such as leads generated, tickets resolved within SLA, or successful collections—rather than just the time an agent spends logged into the system. This aligns the incentives of both the BPO and the client.</p>
      
      <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10">
        <p class="font-medium text-brand-900 mb-0">As these trends continue to develop, companies that view their BPO providers as strategic extensions of their internal teams—rather than just cheap labor—will be the ones that gain a significant competitive edge in their respective markets.</p>
      </div>
    `
  }
};

import { getPostBySlug } from "@/lib/wordpress";
import { HARDCODED_BLOGS } from "@/lib/hardcodedBlogs";

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  // 1. Try to fetch from WordPress first!
  let wpPostRaw = null;
  try {
    wpPostRaw = await getPostBySlug(slug);
  } catch(e) {
    console.error("WP fetch failed for slug", slug);
  }

  let post = null;

  if (wpPostRaw) {
    // We found the post in WordPress! Let's format it.
    const formattedDate = new Date(wpPostRaw.date).toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });

    post = {
      title: wpPostRaw.title,
      category: wpPostRaw.categories?.nodes?.[0]?.name || "General",
      date: formattedDate,
      author: wpPostRaw.author?.node?.name || "Improx Team",
      image: wpPostRaw.featuredImage?.node?.sourceUrl || "/images/adminassist_blog_1_1786360495554.jpg",
      content: wpPostRaw.content
    };
  } else {
    // 2. Search HARDCODED_BLOGS for the slug
    let hardcodedMatch = null;
    let foundCategory = "General";
    
    for (const [category, blogs] of Object.entries(HARDCODED_BLOGS)) {
      const match = blogs.find(b => b.slug === slug);
      if (match) {
        hardcodedMatch = match;
        foundCategory = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        break;
      }
    }

    if (hardcodedMatch) {
      const formattedDate = new Date(hardcodedMatch.date).toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      });
      
      // Generate a rich, 300-400 word enterprise article by expanding on the highly-specific excerpt
      const generatedContent = `
        <p class="mb-6 leading-relaxed text-xl font-medium text-slate-800">${hardcodedMatch.excerpt}</p>
        
        <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">The Strategic Advantage</h3>
        <p class="mb-6 leading-relaxed text-lg text-slate-700">Implementing this approach provides a significant competitive edge in today's fast-paced environment. By focusing on operational efficiency and leveraging specialized expertise, organizations can reduce overhead while simultaneously improving their primary KPIs. When your backend processes are streamlined, your frontline workers can focus entirely on revenue-generating activities rather than administrative friction. This shift from manual, error-prone tasks to automated or delegated workflows is exactly what separates industry leaders from those struggling to maintain margins.</p>
        
        <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">Core Implementation Steps</h3>
        <p class="mb-6 leading-relaxed text-lg text-slate-700">To successfully integrate these methodologies, businesses must first audit their existing processes. Identify the bottlenecks—whether it's manual data entry, poor communication protocols, or outdated software stacks. Once identified, establish clear Standard Operating Procedures (SOPs) that define exactly how the new workflow will operate. Partnering with a specialized support team ensures these SOPs are executed flawlessly, day in and day out. Furthermore, utilizing enterprise-grade software to track performance metrics guarantees that the new implementation is delivering the expected return on investment.</p>
        
        <h3 class="text-2xl font-bold mb-4 mt-10 text-slate-900 border-l-4 border-brand-500 pl-4">Long-Term Impact and Scalability</h3>
        <p class="mb-6 leading-relaxed text-lg text-slate-700">The true value of this operational shift is realized over the long term. As your business volume grows, a robust, well-documented process can scale infinitely without a proportional increase in internal headcount. This scalable model not only protects your profitability but also ensures a consistent, high-quality experience for your clients and stakeholders regardless of market fluctuations. By committing to continuous improvement and leveraging external expertise where appropriate, your organization builds a resilient foundation capable of weathering any industry challenges.</p>

        <div class="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-10">
          <p class="font-medium text-brand-900 mb-0">Ready to transform your operations? Contact our enterprise team today to discuss a custom implementation plan tailored to your specific agency requirements.</p>
        </div>
      `;

      post = {
        title: hardcodedMatch.title,
        category: foundCategory,
        date: formattedDate,
        author: "Improx Team",
        image: hardcodedMatch.featuredImage.node.sourceUrl,
        content: generatedContent
      };
    } else {
      // 3. Ultimate Fallback if entirely unknown slug
      post = BLOGS_DATA[slug as keyof typeof BLOGS_DATA] || {
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        category: "General",
        date: "July 2026",
        author: "Improx Team",
        image: "/images/adminassist_blog_1_1786360495554.jpg",
        content: `<p class="mb-6 leading-relaxed text-lg text-slate-700">Content for this article is being updated.</p>`
      };
    }
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* HEADER SECTION */}
      <section className="pt-12 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6 text-sm font-bold tracking-wider uppercase">
            <span className="text-brand-600">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-slate-600 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                <User className="w-5 h-5" />
              </div>
              <div className="font-medium">By {post.author}</div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-400" />
              <div className="font-medium">{post.date}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
              <div className="font-medium text-slate-500">3 min read</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg border border-slate-100">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
          
          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-brand-600 hover:prose-a:text-brand-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-slate-900">Share this article</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to apply these insights?</h2>
          <p className="text-xl text-brand-200 mb-8">
            Let's discuss how our team can transform your business workflows and bottom line.
          </p>
          <Link href="/#contact">
            <button className="bg-white text-brand-900 hover:bg-slate-100 h-14 px-8 text-lg font-bold rounded-lg shadow-xl">
              Schedule a Strategy Call
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
