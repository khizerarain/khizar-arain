import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "./avatar";

export const meta = {
  description: "Image avatar with fallback initials, sizes, and grouping.",
} satisfies ComponentPreviewMeta;

export default function AvatarPreview() {
  return (
    <div className="flex items-center gap-6">
      <Avatar size="lg">
        <AvatarImage src="/khizar-self.png" alt="Khizar Arain" />
        <AvatarFallback>KA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KA</AvatarFallback>
      </Avatar>
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}
