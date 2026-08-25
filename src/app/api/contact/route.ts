import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";
import {
  serviceLabel,
  validateContact,
  type ContactPayload,
} from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden fields; humans don't. Pretend success.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact(body);
  if (errors) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery isn't configured yet. Email me directly instead.",
      },
      { status: 503 },
    );
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();
  const service = serviceLabel(body.service);

  const text = [
    `New project inquiry from ${name} <${email}>`,
    service ? `Service: ${service}` : "Service: (not specified)",
    "",
    message,
  ].join("\n");

  const html = `
    <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
    <p><strong>Service:</strong> ${escapeHtml(service ?? "(not specified)")}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <beth.t@example.com>",
      to: [siteConfig.email],
      reply_to: email,
      subject: `Project inquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Couldn't send the message. Please email me directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
