import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { ContactForm } from "./ContactForm";

export const meta = {
  description: "Contact form with service chips, validation, and an API-backed submit.",
  layout: "frame",
  frameWidth: 1024,
} satisfies ComponentPreviewMeta;

export default function ContactFormPreview() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <ContactForm />
    </div>
  );
}
