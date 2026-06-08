// Example Contact Page Integration
// Place this file at: src/app/contact/page.tsx

import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Khizar Arain',
  description: 'Get in touch with me. Send me a message and I will respond as soon as possible.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <ContactForm />
        </div>

        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Email Contact */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:khizar@example.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              khizar@example.com
            </a>
          </div>

          {/* Response Time */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-600">
              I typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* FAQ Section (Optional) */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What should I include in my message?
              </h3>
              <p className="text-gray-600">
                Please include as much detail as possible about your inquiry. This helps me respond faster and more accurately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does it take to respond?
              </h3>
              <p className="text-gray-600">
                I aim to respond to all messages within 24 hours on business days. For urgent matters, please mark them as such in your message.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Will my information be kept private?
              </h3>
              <p className="text-gray-600">
                Yes, your information is stored securely and will only be used to respond to your inquiry. I never share contact information with third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I attach files?
              </h3>
              <p className="text-gray-600">
                The current form doesn't support attachments. For files or portfolios, please email me directly or provide links in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
