/**
 * Live package metadata from PyPI. Cached for a day so a flaky request
 * cannot take the /projects page down at every visit.
 */

export async function getPypiVersions(
  names: string[],
): Promise<Record<string, string>> {
  const entries = await Promise.all(
    names.map(async (name) => {
      try {
        const response = await fetch(`https://pypi.org/pypi/${name}/json`, {
          headers: { "User-Agent": "khizar-arain-portfolio" },
          next: { revalidate: 86400 },
        });
        if (!response.ok) return [name, ""] as const;
        const data = (await response.json()) as { info?: { version?: string } };
        return [name, data.info?.version ?? ""] as const;
      } catch {
        return [name, ""] as const;
      }
    }),
  );

  return Object.fromEntries(entries.filter(([, version]) => version));
}
