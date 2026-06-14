"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface MarkdownRendererProps {
  children: string;
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, [remarkToc, { heading: "toc", maxDepth: 3 }]]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
      components={{
        img: ({ node, ...props }) => (
          <img
            {...props}
            className="rounded-2xl border border-white/10"
            alt={props.alt || ""}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
