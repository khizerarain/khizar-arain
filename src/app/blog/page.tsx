import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blog/BlogList";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on the projects I've shipped — why I built them, what they do, and what I learned.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Section className="pt-32 pb-8 md:pt-40 md:pb-10">
        <Eyebrow>Writing</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Writing on software, tools, and everything I build
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Notes on the projects I&apos;ve shipped — why I built them, what they
          do, and what I learned.
        </p>
      </Section>

      <Section className="pt-0 pb-24 md:pt-0">
        <BlogList posts={posts} />
      </Section>
    </>
  );
}
