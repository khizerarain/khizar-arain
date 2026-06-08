import { generateRSSFeed } from "@/lib/blog";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khizararain.com";
  const rss = await generateRSSFeed(siteUrl);

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml;charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
