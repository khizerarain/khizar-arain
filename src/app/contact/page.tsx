import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { BookingButton } from "@/components/contact/BookingButton";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  GitHubIcon,
  InstagramIcon,
  XIcon,
} from "@/components/icons/BrandIcons";
import {
  bookingUrl,
  linkedinUrl,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea? Get in touch with Khizar Arain — full-stack development, e-commerce, design systems, and performance work.",
};

const connect = [
  {
    label: "X",
    handle: "@KhizarArain103",
    href: "https://x.com/KhizarArain103",
    description: "Follow me for updates on what I'm building.",
    icon: XIcon,
  },
  {
    label: "Instagram",
    handle: "@realkhizerarain",
    href: "https://www.instagram.com/realkhizerarain/",
    description: "Follow my work and behind-the-scenes.",
    icon: InstagramIcon,
  },
  {
    label: "GitHub",
    handle: `@${siteConfig.githubUsername}`,
    href: `https://github.com/${siteConfig.githubUsername}`,
    description: "Check out my open source projects and CLI tools.",
    icon: GitHubIcon,
  },
  {
    label: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Drop me a line for collaborations or opportunities.",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s build something
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Have an idea? Let&apos;s turn it into reality.
        </p>
        <div className="mt-9">
          <BookingButton label="Book a 20-min intro call" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          or send a message below
        </p>
      </Section>

      <Section id="contact-form" className="py-10 md:py-16">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Connect elsewhere</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          Find me on the internet.
        </h2>
        <ul className="mt-10">
          {connect.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group grid gap-1 border-t border-border py-6 transition-colors hover:border-foreground/25 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-start sm:gap-8"
              >
                <span className="flex items-center gap-2.5 text-base font-medium text-foreground">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  {item.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span className="block font-mono text-sm text-foreground">
                    {item.handle}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </a>
            </li>
          ))}
          {linkedinUrl && (
            <li>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-1 border-t border-border py-6 transition-colors hover:border-foreground/25 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-start sm:gap-8"
              >
                <span className="flex items-center gap-2.5 text-base font-medium text-foreground">
                  LinkedIn
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span className="block font-mono text-sm text-foreground">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Connect with me professionally.
                  </span>
                </span>
              </a>
            </li>
          )}
        </ul>
      </Section>

      <Section className="border-t border-border">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Prefer a call?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Skip the form and grab a time that works for you — 20 minutes, no
            pressure.
          </p>
          <div
            className={
              bookingUrl
                ? "mt-8 flex justify-center"
                : "mt-8 flex justify-center [&_div]:items-center [&_p]:text-center"
            }
          >
            <BookingButton label="Book a call" />
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
