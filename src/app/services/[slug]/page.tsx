import { getPostsByCategory, getServiceBySlug, getRecentPosts } from "@/lib/wordpress";
import ServicePageClient from "./ServicePageClient";
import { HARDCODED_BLOGS } from "@/lib/hardcodedBlogs";

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  // Try to fetch related posts from WordPress based on this service's slug
  let relatedPosts: any[] = [];
  try {
    relatedPosts = await getPostsByCategory(slug);
    
    // Fallback: If no posts exist in this category, use hardcoded industry blogs
    // This ensures the page always looks populated with highly relevant content
    if (!relatedPosts || relatedPosts.length === 0) {
      if (HARDCODED_BLOGS[slug as keyof typeof HARDCODED_BLOGS]) {
        relatedPosts = HARDCODED_BLOGS[slug as keyof typeof HARDCODED_BLOGS];
      } else {
        relatedPosts = await getRecentPosts(3);
      }
    }
  } catch (error) {
    console.error(`Failed to fetch related posts for service ${slug}`, error);
    // Ultimate fallback if WP totally fails
    if (HARDCODED_BLOGS[slug as keyof typeof HARDCODED_BLOGS]) {
      relatedPosts = HARDCODED_BLOGS[slug as keyof typeof HARDCODED_BLOGS];
    }
  }

  // Fetch the specific service ACF data from WordPress
  let wpData = null;
  try {
    wpData = await getServiceBySlug(slug);
  } catch (error) {
    console.error(`Failed to fetch WP data for service ${slug}`, error);
  }

  // Pass the slug, related posts, and WP data down to the client component
  // Safely slice to exactly 3 posts for the UI
  return <ServicePageClient slug={slug} relatedPosts={(relatedPosts || []).slice(0, 3)} wpData={wpData} />;
}
