import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { GitHubIcon, InstagramIcon, PyPIIcon, XIcon } from "./BrandIcons";

export const meta = {
  description: "Inline SVG brand marks (lucide-react v1 ships none).",
} satisfies ComponentPreviewMeta;

const icons = [
  { label: "X", Icon: XIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "GitHub", Icon: GitHubIcon },
  { label: "PyPI", Icon: PyPIIcon },
];

export default function BrandIconsPreview() {
  return (
    <ul className="flex items-center gap-6">
      {icons.map(({ label, Icon }) => (
        <li key={label} className="flex flex-col items-center gap-2">
          <Icon className="h-6 w-6 text-foreground" />
          <span className="text-xs text-muted-foreground">{label}</span>
        </li>
      ))}
    </ul>
  );
}
