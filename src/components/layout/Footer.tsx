import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "X", href: "https://x.com/KhizarArain103" },
  { label: "Instagram", href: "https://www.instagram.com/realkhizerarain/" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-white"
            >
              khizar arain
            </Link>
            <p className="mt-2 max-w-xs text-sm text-neutral-400">
              Full-stack developer building clean, modern, and high-performing
              digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Pages
              </span>
              <div className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Social
              </span>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Khizar Arain. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
