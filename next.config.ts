import { execFileSync, spawn } from "node:child_process";
import type { NextConfig } from "next";
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants";

const previewScript = "scripts/generate-component-previews.mjs";

// Keeps the /components page's preview map in sync with *.preview.tsx files.
function syncComponentPreviews(phase: string) {
  if (phase !== PHASE_DEVELOPMENT_SERVER && phase !== PHASE_PRODUCTION_BUILD) {
    return;
  }
  // next.config is evaluated by several worker processes; only the first one
  // should generate + watch. Children inherit this env flag.
  if (process.env.COMPONENT_PREVIEWS_SYNCED) return;
  process.env.COMPONENT_PREVIEWS_SYNCED = "1";

  execFileSync(process.execPath, [previewScript], { stdio: "inherit" });

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const watcher = spawn(process.execPath, [previewScript, "--watch"], {
      stdio: "inherit",
    });
    process.on("exit", () => watcher.kill());
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mnemo-brain.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default function config(phase: string): NextConfig {
  syncComponentPreviews(phase);
  return nextConfig;
}
