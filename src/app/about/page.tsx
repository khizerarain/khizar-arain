import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Khizar Arain, a full-stack developer focused on clean, modern, and high-performing digital experiences.",
};

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "GSAP",
  "Framer Motion",
  "Shopify",
  "Figma",
  "Git",
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    description:
      "Building websites, web applications, and e-commerce stores for clients around the world.",
  },
  {
    role: "E-commerce Developer",
    company: "Self-employed",
    period: "2022 — 2023",
    description:
      "Developed and optimized Shopify stores, custom themes, and conversion-focused product pages.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Khizar Arain
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Full-stack developer with a passion for clean code, thoughtful
            design, and products that perform.
          </p>
        </div>

        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <Avatar className="h-40 w-40 border border-white/10">
            <AvatarImage src="/khizar-self.png" alt="Khizar Arain" />
            <AvatarFallback className="bg-neutral-900 text-2xl text-white">
              KA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg leading-relaxed text-neutral-300">
              I&apos;m a full-stack developer focused on building clean, modern,
              and high-performing digital experiences. I work across frontend
              and backend, with strong practical experience in e-commerce and
              production-ready web development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              My goal is simple: turn ideas into websites and products that look
              premium, load fast, and deliver real business results. I believe
              great software sits at the intersection of solid engineering and
              careful design.
            </p>
          </div>
        </div>

        <Separator className="mb-16 bg-white/10" />

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="border-white/10 px-4 py-1.5 text-sm text-neutral-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">Experience</h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <Card
                key={item.role + item.company}
                className="border-white/10 bg-white/[0.02]"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm text-neutral-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-400">
                    {item.company}
                  </p>
                  <p className="mt-3 text-neutral-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
