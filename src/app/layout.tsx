import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import CustomCursor from "@/components/custom-cursor";
import NoiseOverlay from "@/components/noise-overlay";
import GoogleAnalytics from "@/components/google-analytics";
import AgentationWrapper from "@/components/agentation-wrapper";
import Preloader from "@/components/preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trishulhub — Building Digital Experiences That Matter",
    template: "%s — Trishulhub",
  },
  description:
    "Trishulhub is a digital solutions agency specializing in web development, digital marketing, social media management, UI/UX design, e-commerce solutions, and CRM solutions. Based in India, serving globally.",
  keywords: [
    "Trishulhub",
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
    "E-Commerce",
    "CRM Solutions",
    "Social Media Management",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "India",
    "Digital Agency",
  ],
  authors: [{ name: "Trishulhub", url: "https://trishulhub.in" }],
  creator: "Trishulhub",
  publisher: "Trishulhub",
  metadataBase: new URL("https://trishulhub.in"),
  openGraph: {
    title: "Trishulhub — Building Digital Experiences That Matter",
    description:
      "Digital solutions agency specializing in web development, marketing, and design. We craft powerful web solutions and help businesses thrive.",
    url: "https://trishulhub.in",
    siteName: "Trishulhub",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishulhub — Building Digital Experiences That Matter",
    description:
      "Digital solutions agency specializing in web development, marketing, and design. We craft powerful web solutions and help businesses thrive.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        {/* Preload Kanit font for preloader counter */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0B] text-[#F5F2ED]`}
      >
        <Preloader />
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
          <Toaster />
          <AgentationWrapper />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
