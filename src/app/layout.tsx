import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import CustomCursor from "@/components/custom-cursor";
import NoiseOverlay from "@/components/noise-overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trishulhub — Building Digital Experiences That Matter",
  description:
    "Trishulhub is a web development and digital services agency specializing in web development, digital marketing, social media management, UI/UX design, e-commerce solutions, and CRM solutions.",
  keywords: [
    "Trishulhub",
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
    "E-Commerce",
    "CRM Solutions",
    "Social Media Management",
    "India",
  ],
  authors: [{ name: "Trishulhub" }],
  openGraph: {
    title: "Trishulhub — Building Digital Experiences That Matter",
    description:
      "Web development and digital services agency. We craft powerful web solutions, drive digital growth, and help businesses thrive.",
    type: "website",
    siteName: "Trishulhub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishulhub — Building Digital Experiences That Matter",
    description:
      "Web development and digital services agency. We craft powerful web solutions, drive digital growth, and help businesses thrive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0B] text-[#F5F2ED]`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
