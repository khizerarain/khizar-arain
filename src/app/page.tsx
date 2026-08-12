import { Suspense } from "react";
import { Hero } from "@/components/sections/home/Hero";
import {
  BuildingInPublic,
  GitHubActivity,
  GitHubActivitySkeleton,
} from "@/components/sections/home/BuildingInPublic";
import { ForFounders } from "@/components/sections/home/ForFounders";
import { StatsRow } from "@/components/sections/home/StatsRow";
import { Work } from "@/components/sections/home/Work";
import { Packages } from "@/components/sections/home/Packages";
import { Services } from "@/components/sections/home/Services";
import { Writing } from "@/components/sections/home/Writing";
import { Stack } from "@/components/sections/home/Stack";
import { FinalCta } from "@/components/sections/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildingInPublic>
        <Suspense fallback={<GitHubActivitySkeleton />}>
          <GitHubActivity />
        </Suspense>
      </BuildingInPublic>
      <ForFounders />
      <StatsRow />
      <Work />
      <Packages />
      <Services />
      <Writing />
      <Stack />
      <FinalCta />
    </>
  );
}
