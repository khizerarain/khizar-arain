"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <ContactForm />

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            What happens next?
          </h3>
          <ul className="text-blue-800 space-y-2">
            <li>✓ Your message is securely stored in our database</li>
            <li>✓ You'll receive a confirmation on this page</li>
            <li>✓ I'll review your message and get back to you soon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
