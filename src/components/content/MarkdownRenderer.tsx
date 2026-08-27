"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

interface MarkdownRendererProps {
  children: string;
  /** Project markdown files open with `# Title`; shift those headings down. Blog posts already have a page `<h1>`. */
  shiftHeadings?: boolean;
}

export default function MarkdownRenderer({
  children,
  shiftHeadings = true,
}: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, [remarkToc, { heading: "toc", maxDepth: 3 }]]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
      components={{
        ...(shiftHeadings
          ? {
              h1: ({ children: content, ...props }: { children?: React.ReactNode }) => (
                <h2 {...props}>{content}</h2>
              ),
              h2: ({ children: content, ...props }: { children?: React.ReactNode }) => (
                <h3 {...props}>{content}</h3>
              ),
              h3: ({ children: content, ...props }: { children?: React.ReactNode }) => (
                <h4 {...props}>{content}</h4>
              ),
            }
          : {}),
        img: (props) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            {...props}
            className="rounded-2xl border border-border"
            alt={props.alt || ""}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
