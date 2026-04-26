import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../globals.css";
import { themes, currentTheme } from "@/configs/theme";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales } from "@/navigation";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const theme = themes[currentTheme];
  
  const messages = await getMessages();

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
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={themeStyle}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
