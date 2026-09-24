import type { ReactNode } from "react";

export interface ComponentPreviewMeta {
  /** Display name on the card. Defaults to the file name in PascalCase. */
  name?: string;
  /** One-line description shown under the name. */
  description?: string;
  /**
   * "inline" (default) renders the preview centered in a small stage.
   * "frame" renders it at desktop width and scales it down to fit the card —
   * use it for full-width sections, navbars, and page-level layouts.
   */
  layout?: "inline" | "frame";
  /** Render inside the scoped `.dark` palette (used by the MNEMO page). */
  dark?: boolean;
  /** Virtual viewport width for "frame" previews. Defaults to 1280. */
  frameWidth?: number;
}

export interface ComponentPreviewModule {
  default: () => ReactNode | Promise<ReactNode>;
  meta?: ComponentPreviewMeta;
}
