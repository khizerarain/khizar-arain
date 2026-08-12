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
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, [remarkToc, { heading: "toc", maxDepth: 3 }]]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
      components={{
        // Content files open with `# Title`, but the page already renders the
        // title as its <h1>. Shift markdown headings down one level so each
        // page keeps a single <h1>.
        h1: ({ children: content, ...props }) => (
          <h2 {...props}>{content}</h2>
        ),
        h2: ({ children: content, ...props }) => (
          <h3 {...props}>{content}</h3>
        ),
        h3: ({ children: content, ...props }) => (
          <h4 {...props}>{content}</h4>
        ),
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
