import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { Skeleton } from "@/components/ui/skeleton";
import { getRecentRepos } from "@/lib/github";
import { siteConfig } from "@/lib/site";
import { formatRelativeTime } from "@/lib/utils";

const profileUrl = `https://github.com/${siteConfig.githubUsername}`;

/** Async island so the GitHub request never blocks the rest of the page. */
export async function GitHubActivity() {
  const repos = await getRecentRepos();

  if (repos.length === 0) return null;

  return (
    <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.name}>
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-1 border-t border-border py-4 transition-colors hover:border-foreground/25"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-medium text-foreground">
                {repo.name}
              </span>
              {repo.stars > 0 && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  {repo.stars}
                </span>
              )}
              <ArrowUpRight
                className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
            {repo.description && (
              <p className="line-clamp-1 text-sm text-muted-foreground">
                {repo.description}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              {repo.language ? `${repo.language} · ` : ""}
              updated {formatRelativeTime(repo.pushedAt)}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function GitHubActivitySkeleton() {
  return (
    <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="border-t border-border py-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-2 h-3 w-full" />
          <Skeleton className="mt-2 h-3 w-24" />
        </div>
      ))}
    </div>
  );
}

export function BuildingInPublic({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Section className="border-t border-border">
      <Eyebrow>Building in public</Eyebrow>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          What I&apos;ve been shipping, live from GitHub.
        </h2>
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GitHubIcon className="h-4 w-4" />
          @{siteConfig.githubUsername}
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
      {children}
    </Section>
  );
}
