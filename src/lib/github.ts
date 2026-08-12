import { siteConfig } from "./site";

export interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  pushedAt: string;
}

interface GitHubApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

/**
 * Most recently pushed public repos, used by the "Building in public" strip.
 *
 * Unauthenticated requests are rate limited (60/hour per IP), so the response
 * is cached for an hour. Any failure resolves to an empty list — the section
 * degrades to a plain link rather than breaking the page.
 */
export async function getRecentRepos(limit = 4): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=pushed&per_page=20`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "khizar-arain-portfolio",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const repos = (await response.json()) as GitHubApiRepo[];
    if (!Array.isArray(repos)) return [];

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, limit)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        pushedAt: repo.pushed_at,
      }));
  } catch {
    return [];
  }
}
