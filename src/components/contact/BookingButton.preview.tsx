import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { BookingButton } from "./BookingButton";

export const meta = {
  description: "Booking CTA — falls back to a placeholder until a booking link is set.",
} satisfies ComponentPreviewMeta;

export default function BookingButtonPreview() {
  return <BookingButton label="Book a 20-min intro call" />;
}
