import { getPublishedPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khizararain.com";

  try {
    const postsData = await getPublishedPosts({ limit: 1000 });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${baseUrl}/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     ${postsData.data
       .map(
         (post) => `
     <url>
       <loc>${baseUrl}/blog/${post.slug}</loc>
       <lastmod>${new Date(post.updated_at).toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.6</priority>
     </url>
     `,
       )
       .join("")}
   </urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml;charset=UTF-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
