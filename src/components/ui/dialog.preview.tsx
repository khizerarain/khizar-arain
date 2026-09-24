import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export const meta = {
  description: "Accessible modal dialog built on Base UI.",
} satisfies ComponentPreviewMeta;

export default function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="rounded-full px-6" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            Dialogs trap focus and close on Escape or outside click.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
