import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export const meta = {
  description: "Slide-in panel used for the mobile navigation.",
} satisfies ComponentPreviewMeta;

export default function SheetPreview() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="rounded-full px-6" />}>
        Open sheet
      </SheetTrigger>
      <SheetContent side="right" className="border-border bg-background">
        <SheetHeader>
          <SheetTitle>Sheet title</SheetTitle>
          <SheetDescription>Panels slide in from any edge.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
