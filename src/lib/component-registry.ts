import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { ComponentPreviewModule } from "@/lib/component-preview";
import { componentPreviews } from "@/lib/component-previews.generated";

/**
 * Auto-discovery for the /components page.
 *
 * Every `.tsx` file under src/components is listed automatically — there is no
 * manual list to maintain. Files ending in `.preview.tsx` are treated as live
 * previews for the component next to them, not as components themselves.
 * See src/components/README.md for how to add one.
 *
 * Server-only: reads the filesystem at build time.
 */

const COMPONENTS_DIR = path.join(process.cwd(), "src", "components");
const PREVIEW_SUFFIX = ".preview.tsx";

export interface ComponentEntry {
  /** Path relative to src/components, e.g. "ui/button.tsx". */
  file: string;
  name: string;
  description?: string;
  category: string;
  exports: string[];
  preview?: ComponentPreviewModule;
}

export interface ComponentCategory {
  slug: string;
  title: string;
  components: ComponentEntry[];
}

/** Known folders get a friendly title and a fixed order; new folders are appended. */
const categoryTitles: Record<string, string> = {
  "": "General",
  ui: "UI primitives",
  layout: "Layout",
  animation: "Animation",
  icons: "Icons",
  "sections/home": "Homepage sections",
  projects: "Projects",
  blog: "Blog",
  content: "Content",
  contact: "Contact",
  mnemo: "MNEMO case study",
};

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function toPascalCase(base: string) {
  return base
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function titleCase(folder: string) {
  return folder
    .split(/[/\-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseExports(source: string) {
  const names = new Set<string>();
  const declaration =
    /export\s+(?:default\s+)?(?:async\s+)?(?:function|const|class)\s+([A-Za-z0-9_]+)/g;
  for (const match of source.matchAll(declaration)) names.add(match[1]);

  const list = /export\s*\{([^}]+)\}/g;
  for (const match of source.matchAll(list)) {
    for (const item of match[1].split(",")) {
      const name = item.trim().split(/\s+as\s+/).pop()?.trim();
      if (name && !name.startsWith("type ")) names.add(name);
    }
  }
  return [...names];
}

/** All component files, relative to src/components, POSIX-style. */
export function listComponentFiles() {
  return walk(COMPONENTS_DIR)
    .filter((file) => file.endsWith(".tsx") && !file.endsWith(PREVIEW_SUFFIX))
    .map((file) => path.relative(COMPONENTS_DIR, file).split(path.sep).join("/"))
    .sort();
}

export function readComponentSource(file: string) {
  if (!listComponentFiles().includes(file)) return null;
  return readFileSync(path.join(COMPONENTS_DIR, file), "utf8");
}

export function getComponentCategories(): ComponentCategory[] {
  const groups = new Map<string, ComponentEntry[]>();

  for (const file of listComponentFiles()) {
    const folder = path.posix.dirname(file) === "." ? "" : path.posix.dirname(file);
    const source = readFileSync(path.join(COMPONENTS_DIR, file), "utf8");
    const preview = componentPreviews[file];

    const entry: ComponentEntry = {
      file,
      name: preview?.meta?.name ?? toPascalCase(path.posix.basename(file, ".tsx")),
      description: preview?.meta?.description,
      category: folder,
      exports: parseExports(source),
      preview,
    };

    groups.set(folder, [...(groups.get(folder) ?? []), entry]);
  }

  const known = Object.keys(categoryTitles);
  const order = (slug: string) =>
    known.includes(slug) ? known.indexOf(slug) : known.length;

  return [...groups.entries()]
    .sort(([a], [b]) => order(a) - order(b) || a.localeCompare(b))
    .map(([slug, components]) => ({
      slug: slug.replaceAll("/", "-") || "general",
      title: categoryTitles[slug] ?? titleCase(slug),
      components,
    }));
}
