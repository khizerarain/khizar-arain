import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { isValidDate } from "@/lib/utils";

export async function GET() {
  const baseUrl = siteConfig.url;
  const posts = await getAllPosts();

  const items = posts
    .filter((post) => isValidDate(post.createdAt))
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      ${post.category ? `<category>${escapeXml(post.category)}</category>` : ""}
    </item>
  `,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Khizar Arain Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Notes on the projects I have shipped — why I built them, what they do, and what I learned.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
