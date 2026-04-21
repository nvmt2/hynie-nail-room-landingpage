import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hynie Nail Room | Premium Nail Care & Art",
  description: "Experience luxury nail services at Hynie Nail Room. Expert technicians, premium products, and a relaxing atmosphere.",
};

import { themes, currentTheme } from "@/configs/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = themes[currentTheme];

  const themeStyle = {
    "--background": theme.background,
    "--foreground": theme.foreground,
    "--primary": theme.primary,
    "--on-primary": theme.onPrimary,
    "--primary-container": theme.primaryContainer,
    "--secondary": theme.secondary,
    "--on-secondary": theme.onSecondary,
    "--on-surface": theme.onSurface,
    "--on-surface-variant": theme.onSurfaceVariant,
    "--outline-variant": theme.outlineVariant,
    "--surface-container": theme.surfaceContainer,
  } as React.CSSProperties;


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={themeStyle}>
        {children}
      </body>
    </html>
  );
}

