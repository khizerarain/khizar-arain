import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MnemoHero } from "@/components/mnemo/MnemoHero";
import { VideoShowcase } from "@/components/mnemo/VideoShowcase";
import { ProblemStatement } from "@/components/mnemo/ProblemStatement";
import { WhatIsMnemo } from "@/components/mnemo/WhatIsMnemo";
import { WhyBuilt } from "@/components/mnemo/WhyBuilt";
import { HowItWorks } from "@/components/mnemo/HowItWorks";
import { FeaturesBento } from "@/components/mnemo/FeaturesBento";
import { TechStack } from "@/components/mnemo/TechStack";
import { Architecture } from "@/components/mnemo/Architecture";
import { ScreenshotsGallery } from "@/components/mnemo/ScreenshotsGallery";
import { DashboardShowcase } from "@/components/mnemo/DashboardShowcase";
import { QuizShowcase } from "@/components/mnemo/QuizShowcase";
import { AuthShowcase } from "@/components/mnemo/AuthShowcase";
import { ChatShowcase } from "@/components/mnemo/ChatShowcase";
import { PerformanceMetrics } from "@/components/mnemo/PerformanceMetrics";
import { Roadmap } from "@/components/mnemo/Roadmap";
import { DevelopmentJourney } from "@/components/mnemo/DevelopmentJourney";
import { CtaSection } from "@/components/mnemo/CtaSection";

export const metadata: Metadata = {
  title: "MNEMO | AI-Powered Learning Platform",
  description:
    "An AI-powered neuroscience inspired learning platform designed to improve memory retention and learning through interactive quizzes, intelligent assistance and modern personalized experiences.",
  keywords: [
    "MNEMO",
    "AI Learning",
    "Next.js",
    "Supabase",
    "Interactive Quizzes",
    "Personalized Learning",
  ],
  openGraph: {
    title: "MNEMO | AI-Powered Learning Platform",
    description:
      "An AI-powered neuroscience inspired learning platform designed to improve memory retention and learning through interactive quizzes, intelligent assistance and modern personalized experiences.",
    images: ["https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function MnemoPage() {
  return (
    <div className="relative bg-black">
      <div className="fixed top-20 left-6 z-40 hidden md:block">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full text-neutral-400 hover:bg-white/5 hover:text-white"
          asChild
        >
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <MnemoHero />
      <VideoShowcase />
      <ProblemStatement />
      <WhatIsMnemo />
      <WhyBuilt />
      <HowItWorks />
      <FeaturesBento />
      <TechStack />
      <Architecture />
      <DashboardShowcase />
      <QuizShowcase />
      <AuthShowcase />
      <ChatShowcase />
      <ScreenshotsGallery />
      <PerformanceMetrics />
      <Roadmap />
      <DevelopmentJourney />
      <CtaSection />
    </div>
  );
}
