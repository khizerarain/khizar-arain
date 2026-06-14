import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface ParsedMarkdown<T> {
  frontmatter: T;
  content: string;
  slug: string;
}

export async function readMarkdownFiles<T>(
  directory: string,
): Promise<ParsedMarkdown<T>[]> {
  const dir = path.join(/*turbopackIgnore: true*/ process.cwd(), directory);

  try {
    await fs.access(dir);
  } catch {
    return [];
  }

  const files = await fs.readdir(dir);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  const parsed = await Promise.all(
    mdFiles.map(async (file) => {
      const filePath = path.join(/*turbopackIgnore: true*/ dir, file);
      const raw = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(raw);
      const slug = path.basename(file, ".md");

      return {
        frontmatter: data as T,
        content,
        slug,
      };
    }),
  );

  return parsed;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}
