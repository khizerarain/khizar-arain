import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Have a project in mind? I&apos;d love to hear about it. Choose the
            best way to reach me below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Card
              key={method.label}
              className="border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <CardContent className="p-8">
                <method.icon
                  className="h-7 w-7 text-white"
                  strokeWidth={1.5}
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {method.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {method.value}
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  {method.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 rounded-full border-white/10 bg-transparent text-white hover:bg-white/5"
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

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white">
            Prefer a direct message?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-neutral-400">
            For project inquiries, send an email with a brief description of
            what you need and I&apos;ll get back within 24 hours.
          </p>
          <Button
            size="lg"
            className="mt-6 rounded-full bg-white px-8 text-black hover:bg-neutral-200"
            asChild
          >
            <a href="mailto:realkhizararain7@gmail.com">Send an Email</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
