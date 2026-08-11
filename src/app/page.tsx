import { getHomePageData, getAllServices } from "@/lib/wordpress";
import HomeClient from "./HomeClient";

export const revalidate = 60; // Revalidate every minute, or adjust as needed

export default async function HomePage() {
  let homeData = null;
  let servicesData: any[] = [];
  
  try {
    // Attempt to fetch from WordPress
    homeData = await getHomePageData();
    servicesData = await getAllServices();
  } catch (error) {
    console.error("Failed to fetch home page data from WordPress:", error);
  }

  // Pass data to the client component. 
  // If WordPress data is missing or WP is down, the client component will use its beautiful hardcoded fallbacks!
  return <HomeClient homeData={homeData} servicesData={servicesData} />;
}
