export const contactServices = [
  {
    id: "full-stack",
    title: "Frontend & Backend Development",
    description: "Full-stack web apps, Next.js/React.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Shopify custom themes, headless commerce.",
  },
  {
    id: "design-systems",
    title: "UI/UX Design Systems",
    description: "Component libraries, accessible responsive design.",
  },
  {
    id: "performance",
    title: "Performance & SEO",
    description: "Core Web Vitals, technical SEO, SSR.",
  },
] as const;

export type ContactServiceId = (typeof contactServices)[number]["id"];

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  service?: ContactServiceId | "";
  /** Honeypot — must stay empty. */
  website?: string;
}

export interface ContactFieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(
  input: ContactPayload,
): ContactFieldErrors | null {
  const errors: ContactFieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    errors.message = "Tell me a little more about the project (at least a sentence).";
  } else if (message.length > 5000) {
    errors.message = "That's a bit long — keep it under 5,000 characters.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export function serviceLabel(id: string | undefined): string | null {
  if (!id) return null;
  return contactServices.find((service) => service.id === id)?.title ?? null;
}
