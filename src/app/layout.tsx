import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Khizar Arain | Full-Stack Developer",
    template: "%s | Khizar Arain",
  },
  description:
    "Portfolio of Khizar Arain, a full-stack developer building clean, modern, and high-performing digital experiences.",
  keywords: [
    "Khizar Arain",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Khizar Arain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Khizar Arain",
    title: "Khizar Arain | Full-Stack Developer",
    description:
      "Portfolio of Khizar Arain, a full-stack developer building clean, modern, and high-performing digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khizar Arain | Full-Stack Developer",
    description:
      "Portfolio of Khizar Arain, a full-stack developer building clean, modern, and high-performing digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TooltipProvider delay={100}>
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
