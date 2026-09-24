import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ComponentEntry } from "@/lib/component-registry";
import { cn } from "@/lib/utils";
import { PreviewFrame } from "./PreviewFrame";

function PreviewStage({ entry }: { entry: ComponentEntry }) {
  const preview = entry.preview;

  if (!preview) {
    const base = entry.file.replace(/\.tsx$/, "");
    return (
      <div className="flex min-h-44 items-center justify-center p-8">
        <p className="max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
          No preview yet. Add{" "}
          <code className="font-mono text-xs text-foreground">
            {base.split("/").pop()}.preview.tsx
          </code>{" "}
          next to this file to render one here.
        </p>
      </div>
    );
  }

  const Preview = preview.default;
  const meta = preview.meta ?? {};

  const content =
    meta.layout === "frame" ? (
      <PreviewFrame width={meta.frameWidth}>
        <Preview />
      </PreviewFrame>
    ) : (
      <div className="flex min-h-44 items-center justify-center p-8">
        <Preview />
      </div>
    );

  return meta.dark ? (
    <div className="dark bg-black text-foreground">{content}</div>
  ) : (
    content
  );
}

export function ComponentCard({ entry }: { entry: ComponentEntry }) {
  const isFrame = entry.preview?.meta?.layout === "frame";
  const fileName = entry.file.split("/").pop();

  return (
    <article
      id={entry.file.replace(/\.tsx$/, "").replaceAll("/", "-")}
      className={cn(
        "flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20",
        isFrame && "md:col-span-2",
      )}
    >
      <div className="border-b border-border bg-background">
        <PreviewStage entry={entry} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {entry.name}
          </h3>
          <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
            src/components/{entry.file}
          </p>
          {entry.description && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          )}
          {entry.exports.length > 1 && (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Exports">
              {entry.exports.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="shrink-0 self-start rounded-full px-4"
          asChild
        >
          <a
            href={`/components/source/${entry.file}`}
            download={fileName}
            aria-label={`Download ${fileName}`}
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download
          </a>
        </Button>
      </div>
    </article>
  );
}
