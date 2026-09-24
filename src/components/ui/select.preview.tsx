import type { ComponentPreviewMeta } from "@/lib/component-preview";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export const meta = {
  description: "Dropdown select built on Base UI.",
} satisfies ComponentPreviewMeta;

const options = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function SelectPreview() {
  return (
    <Select defaultValue="Next.js">
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Pick a technology" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
