'use client';

import { siteConfig } from "@/configs/site";
import { useTranslations } from 'next-intl';
import LocaleSwitcher from "./LocaleSwitcher";

/**
 * Premium Navbar rendered as a Client Component to support localization with static export.
 */
export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 px-8 py-5 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-headline italic text-primary font-semibold">{siteConfig.name}</div>
        {/* <LocaleSwitcher /> */}
      </div>
      <div className="hidden md:flex gap-10 items-center">
        <a className="text-on-surface hover:text-primary transition-colors font-medium tracking-tight" href="#gallery">{t('gallery')}</a>
        <a className="text-on-surface hover:text-primary transition-colors font-medium tracking-tight" href="#shop">{t('shop')}</a>
        <a className="text-on-surface hover:text-primary transition-colors font-medium tracking-tight" href="#services">{t('services')}</a>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
