import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eyebrow } from "@/components/ui/eyebrow";

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
  "Python",
  "Docker",
  "JavaScript",
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
    <div className="min-h-screen pb-24">
      <div className="mx-auto max-w-5xl px-6 pt-32 md:pt-40">
        <header className="max-w-2xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Khizar Arain
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Full-stack developer with a passion for clean code, thoughtful
            design, and products that perform.
          </p>
        </header>

        <div className="mt-16 mb-16 flex flex-col items-start gap-10 md:flex-row">
          <Avatar className="h-40 w-40 shrink-0">
            <AvatarImage src="/khizar-self.png" alt="Portrait of Khizar Arain" />
            <AvatarFallback className="bg-secondary text-2xl text-foreground">
              KA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a full-stack developer focused on building clean, modern,
              and high-performing digital experiences. I work across frontend
              and backend, with strong practical experience in e-commerce and
              production-ready web development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My goal is simple: turn ideas into websites and products that look
              premium, load fast, and deliver real business results. I believe
              great software sits at the intersection of solid engineering and
              careful design.
            </p>
          </div>
        </div>

        <Separator className="mb-16" />

        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
            Experience
          </h2>
          <ul>
            {experience.map((item) => (
              <li
                key={item.role + item.company}
                className="grid gap-2 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8"
              >
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
