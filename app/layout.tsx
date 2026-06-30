import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sachiprasad.dev"),
  title: "Sachi Prasad — Computer Science Engineer (Cyber Security)",
  description:
    "Sachi Prasad — Python developer, data analyst, and machine learning engineer building secure, data-driven applications. CSE undergraduate at SRM IST Delhi NCR specializing in Cyber Security.",
  keywords: [
    "Sachi Prasad",
    "Python Developer",
    "Data Analyst",
    "Machine Learning",
    "Cyber Security",
    "Portfolio",
  ],
  authors: [{ name: "Sachi Prasad" }],
  openGraph: {
    title: "Sachi Prasad — Computer Science Engineer (Cyber Security)",
    description:
      "Python developer & data analyst building secure, data-driven applications.",
    url: "https://sachiprasad.dev",
    siteName: "Sachi Prasad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachi Prasad — Computer Science Engineer (Cyber Security)",
    description:
      "Python developer & data analyst building secure, data-driven applications.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
