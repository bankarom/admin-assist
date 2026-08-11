import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getAllPosts } from "@/lib/wordpress";

// NOTE: This structure pulls live data from WordPress and falls back to dummy data
const fetchBlogPosts = async () => {
  const dummyPosts = [
    {
      id: 1,
      slug: "maximize-roi-administrative-team",
      title: "How to Maximize ROI with a Remote Administrative Team",
      excerpt: "In today's fast-paced business environment, maximizing Return on Investment (ROI) is crucial for sustainable growth...",
      date: "August 08, 2026",
      image: "/images/adminassist_blog_1_1786360495554.jpg",
    },
    {
      id: 2,
      slug: "top-software-tools-executive-assistant",
      title: "Top 5 Software Tools Every Executive Assistant Needs",
      excerpt: "The role of an Executive Assistant (EA) has evolved dramatically. Today's EAs are strategic partners who manage complex projects...",
      date: "August 06, 2026",
      image: "/images/adminassist_blog_2_1786360511738.jpg",
    },
    {
      id: 3,
      slug: "future-of-bpo-trends-2027",
      title: "The Future of BPO: Trends to Watch in 2027",
      excerpt: "The Business Process Outsourcing (BPO) industry is undergoing a massive transformation. What was once seen purely as a cost-cutting measure...",
      date: "August 05, 2026",
      image: "/images/adminassist_blog_3_1786360525825.jpg",
    },
    {
      id: 4,
      slug: "essential-kpis-remote-workers",
      title: "7 Essential KPIs for Tracking Remote Worker Productivity",
      excerpt: "Tracking remote productivity goes beyond hours logged. Discover the top 7 Key Performance Indicators (KPIs) that truly measure output, efficiency, and business impact.",
      date: "August 01, 2026",
      image: "/images/adminassist_home_hero_1786360444382.jpg",
    },
    {
      id: 5,
      slug: "overcoming-time-zone-challenges",
      title: "Overcoming Time Zone Challenges in Global Teams",
      excerpt: "Managing a team across multiple time zones can be a logistical nightmare. Learn how asynchronous communication and the right tools can turn this challenge into a 24/7 productivity advantage.",
      date: "July 28, 2026",
      image: "/images/adminassist_service_hero_1786360462305.jpg",
    },
    {
      id: 6,
      slug: "data-security-remote-work",
      title: "Data Security Best Practices for Remote Administrative Assistants",
      excerpt: "When your assistants are handling sensitive company data remotely, security is paramount. Here is a comprehensive guide to securing endpoints, managing access, and ensuring compliance.",
      date: "July 22, 2026",
      image: "/images/adminassist_stressed_owner_1786360478457.jpg",
    },
    {
      id: 7,
      slug: "building-company-culture-remotely",
      title: "How to Build a Strong Company Culture with a Remote Team",
      excerpt: "Culture is not built in a ping-pong room; it's built on shared values and communication. Discover actionable strategies to make your remote workers feel deeply connected to your mission.",
      date: "July 18, 2026",
      image: "/images/adminassist_whyus_1_1786361032147.jpg",
    },
    {
      id: 8,
      slug: "ai-vs-human-assistants",
      title: "AI vs. Human Assistants: Why You Need Both in 2026",
      excerpt: "AI can draft emails and schedule meetings, but it lacks empathy and complex problem-solving. Explore why the most successful executives are pairing powerful AI tools with skilled human assistants.",
      date: "July 15, 2026",
      image: "/images/adminassist_whyus_2_1786361048027.jpg",
    },
    {
      id: 9,
      slug: "onboarding-remote-talent-effectively",
      title: "The Ultimate 30-Day Onboarding Plan for Remote Talent",
      excerpt: "The first 30 days are critical for a remote hire's long-term success. Get our step-by-step onboarding template to ensure your new administrative professional integrates seamlessly.",
      date: "July 10, 2026",
      image: "/images/adminassist_blog_1_1786360495554.jpg",
    },
    {
      id: 10,
      slug: "cost-savings-outsourcing-back-office",
      title: "The Real Cost Savings of Outsourcing Your Back Office",
      excerpt: "Are you really saving money by outsourcing? We break down the hidden costs of in-house hiring versus the predictable ROI of utilizing a specialized remote back-office team.",
      date: "July 05, 2026",
      image: "/images/adminassist_blog_2_1786360511738.jpg",
    }
  ];

  // Fetch live posts from WordPress
  let wpPostsRaw: any[] = [];
  try {
    const raw = await getAllPosts();
    // Filter out the default WordPress "Hello world!" post
    wpPostsRaw = raw.filter((post: any) => post.slug !== "hello-world" && post.title !== "Hello world!");
  } catch (error) {
    console.error("Failed to fetch WP posts", error);
  }

  // Format WordPress posts to match our frontend schema
  const wpPosts = wpPostsRaw.map((post: any) => {
    // Strip HTML from excerpt
    const cleanExcerpt = post.excerpt ? post.excerpt.replace(/(<([^>]+)>)/gi, "").substring(0, 150) + "..." : "Click to read more about this topic.";
    
    // Format Date
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });

    return {
      id: `wp-${post.id}`,
      slug: post.slug,
      title: post.title,
      excerpt: cleanExcerpt,
      date: formattedDate,
      image: post.featuredImage?.node?.sourceUrl || "/images/adminassist_blog_1_1786360495554.jpg", // Fallback image if they didn't upload one in WP
    };
  });

  // Return WordPress posts first, followed by dummy posts
  return [...wpPosts, ...dummyPosts];
};

export default async function BlogListingPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Main Content Area (Blog List) */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Featured Image */}
              <div className="relative w-full aspect-[21/9] md:aspect-[16/6] overflow-hidden bg-slate-100">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="text-sm font-semibold text-brand-600 mb-4">{post.date}</div>
                
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-brand-700 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center font-bold text-brand-600 hover:text-brand-800 transition-colors"
                >
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
