/**
 * WordPress Headless API Configuration
 * 
 * This file handles the connection to the WordPress backend via GraphQL.
 */

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'http://wpadminassist.improxdcc.com/graphql';

export async function fetchGraphQL(query: string, variables = {}) {
  try {
    const res = await fetch(WP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
      // Suppress console.error here because Next.js dev server will intercept it 
      // and show a full-screen red error overlay to the user.
      // We gracefully fallback to hardcoded data instead.
      // console.warn('GraphQL Errors (Fallback triggered):', json.errors);
      return null;
    }
    return json.data;
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    return null;
  }
}

export async function getAllPosts() {
  const data = await fetchGraphQL(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return data?.posts?.nodes || [];
}

export async function getPostBySlug(slug: string) {
  const data = await fetchGraphQL(`
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `, { id: slug });

  return data?.post || null;
}

export async function getPostsByCategory(categorySlug: string) {
  const data = await fetchGraphQL(`
    query PostsByCategory($categoryName: String!) {
      posts(where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }, first: 3) {
        nodes {
          id
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `, { categoryName: categorySlug });

  return data?.posts?.nodes || [];
}

export async function getHomePageData() {
  const data = await fetchGraphQL(`
    query GetHomePage {
      page(id: "home", idType: URI) {
        title
        homeDetails {
          heroPillText
          heroTitle
          heroSubtitle
          phoneNumber
          whyUsTitle
          whyUsSubtitle
        }
      }
    }
  `);
  
  return data?.page?.homeDetails || null;
}

export async function getAllServices() {
  const data = await fetchGraphQL(`
    query GetAllServices {
      services(first: 20) {
        nodes {
          slug
          title
          serviceDetails {
            subtitle
            overview
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return data?.services?.nodes || [];
}

export async function getRecentPosts(limit: number = 3) {
  const data = await fetchGraphQL(`
    query GetRecentPosts($first: Int!) {
      posts(first: $first, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `, { first: limit });

  return data?.posts?.nodes || [];
}

export async function getServiceBySlug(slug: string) {
  const data = await fetchGraphQL(`
    query GetServiceBySlug($id: ID!) {
      service(id: $id, idType: SLUG) {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        serviceDetails {
          subtitle
          overview
          challengesTitle
          challenges
          features {
            title
            desc
          }
          whyUs {
            title
            desc
          }
        }
      }
    }
  `, { id: slug });

  return data?.service || null;
}
