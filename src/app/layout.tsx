import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Khizar Arain | Full-Stack Developer",
    template: "%s | Khizar Arain",
  },
  description: siteConfig.description,
  keywords: [
    "Khizar Arain",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Python CLI",
    "Portfolio",
  ],
  authors: [{ name: "Khizar Arain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Khizar Arain",
    url: siteConfig.url,
    title: "Khizar Arain | Full-Stack Developer",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@KhizarArain103",
    title: "Khizar Arain | Full-Stack Developer",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
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
