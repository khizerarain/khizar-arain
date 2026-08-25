"use client";

import React, { useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";
import {
  contactServices,
  validateContact,
  type ContactFieldErrors,
  type ContactServiceId,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const inputClass =
  "h-11 rounded-xl border-border bg-card px-4 text-foreground";

export function ContactForm() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState<ContactServiceId | "">("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState("");

  const toggleService = (id: ContactServiceId) => {
    setService((current) => (current === id ? "" : id));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");

    const payload = { name, email, message, service, website: honeypot };
    const nextErrors = validateContact(payload);
    if (nextErrors) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        errors?: ContactFieldErrors;
      };

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(
          data.error || "Couldn't send the message. Please email me directly.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setService("");
    } catch {
      setServerError("Couldn't send the message. Please email me directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-card p-8 md:p-10"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          <Check className="h-5 w-5 text-foreground" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          Message sent.
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          Thanks — I&apos;ll read this and get back to you. If it&apos;s urgent,
          email me at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-foreground underline decoration-border underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <fieldset>
        <legend className="text-2xl font-semibold tracking-tight text-foreground">
          What can I help you with?
        </legend>
        <p className="mt-2 text-sm text-muted-foreground">
          Optional — pick one and it travels with the message.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {contactServices.map((item) => {
            const selected = service === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleService(item.id)}
                aria-pressed={selected}
                className={cn(
                  "rounded-2xl border px-5 py-4 text-left transition-colors",
                  selected
                    ? "border-foreground bg-secondary"
                    : "border-border bg-card hover:border-foreground/25",
                )}
              >
                <span className="block text-sm font-medium text-foreground">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {item.description}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-5">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="text-sm font-medium text-foreground"
          >
            Name
          </label>
          <Input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={cn("mt-2", inputClass)}
          />
          {errors.name && (
            <p
              id={`${formId}-name-error`}
              className="mt-1.5 text-sm text-destructive"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(errors.email) || undefined}
            aria-describedby={
              errors.email ? `${formId}-email-error` : undefined
            }
            className={cn("mt-2", inputClass)}
          />
          {errors.email && (
            <p
              id={`${formId}-email-error`}
              className="mt-1.5 text-sm text-destructive"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formId}-message`}
            className="text-sm font-medium text-foreground"
          >
            Tell me about your project
          </label>
          <Textarea
            id={`${formId}-message`}
            name="message"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
            className="mt-2 min-h-36 rounded-xl border-border bg-card px-4 py-3 text-foreground"
          />
          {errors.message && (
            <p
              id={`${formId}-message-error`}
              className="mt-1.5 text-sm text-destructive"
            >
              {errors.message}
            </p>
          )}
        </div>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            id={`${formId}-website`}
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        {status === "error" && serverError && (
          <p role="alert" className="text-sm text-destructive">
            {serverError}{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-destructive/40 underline-offset-4"
            >
              {siteConfig.email}
            </a>
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="rounded-full px-6"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && (
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>
      </div>
    </form>
  );
}
