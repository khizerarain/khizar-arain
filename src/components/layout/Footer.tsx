import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { siteConfig, socialLinks } from "@/lib/site";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* A compact "KA" monogram drawn with half-block glyphs. */
const signature = `█ ▄▀  ▄▀▄
█▀▄   █▀█
▀  ▀  ▀ ▀`;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <pre
              aria-hidden="true"
              className="font-mono text-[13px] leading-tight text-foreground/70"
            >
              {signature}
            </pre>
            <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground">
              build · ship · repeat
            </p>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Pages">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Pages
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Social
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <div className="flex flex-col items-start justify-between gap-3 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Khizar Arain. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
