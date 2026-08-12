import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Khizar Arain for web development, e-commerce, and design projects.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "realkhizararain7@gmail.com",
    href: "mailto:realkhizararain7@gmail.com",
    description: "Send me a message directly.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03103080347",
    href: "tel:03103080347",
    description: "Available during business hours.",
  },
  {
    icon: Calendar,
    label: "Calendar",
    value: "Book a call",
    href: "#",
    description: "Schedule a 20-minute intro call.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
    description: "Working remotely worldwide.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-24">
      <div className="mx-auto max-w-5xl px-6 pt-32 md:pt-40">
        <header className="max-w-2xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Have a project in mind? I&apos;d love to hear about it. Choose the
            best way to reach me below.
          </p>
        </header>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Card
              key={method.label}
              className="rounded-2xl border border-border bg-card ring-0 transition-colors hover:border-foreground/25"
            >
              <CardContent className="p-8">
                <method.icon
                  className="h-7 w-7 text-foreground"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {method.label}
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  {method.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {method.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 rounded-full px-4"
                  asChild
                >
                  <Link href={method.href}>
                    {method.label === "Email"
                      ? "Send Email"
                      : method.label === "Phone"
                        ? "Call Now"
                        : method.label === "Calendar"
                          ? "Schedule"
                          : "View Location"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Prefer a direct message?
          </h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-muted-foreground">
            For project inquiries, send an email with a brief description of
            what you need and I&apos;ll get back within 24 hours.
          </p>
          <Button size="lg" className="mt-8 rounded-full px-8" asChild>
            <a href="mailto:realkhizararain7@gmail.com">Send an Email</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
