'use client';

import { Instagram, Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/configs/site";
import { useTranslations } from 'next-intl';

/**
 * Footer section rendered as a Client Component for localization support.
 */
export default function Footer() {
  const t = useTranslations('Footer');
  const tHero = useTranslations('Hero');

  return (
    <footer className="bg-surface-container py-16 px-8 border-t border-outline-variant/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-headline italic text-primary font-semibold">
              {siteConfig.name}
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
              <a
                className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs text-secondary">
              {t('contact')}
            </h5>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-3 hover:text-primary transition-colors">
                <MapPin size={18} className="text-primary shrink-0" />
                <a href={`https://maps.app.goo.gl/Ko4TtK4jN3UW16QJA`} target="_blank" rel="noopener noreferrer">
                  {siteConfig.contact.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span><a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneFormatted}</a></span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs text-secondary">
              {t('hours')}
            </h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex justify-between gap-4">
                <span>{t('daily')}</span>
                <span className="font-medium text-on-surface text-right">
                  {tHero('openingHoursTime')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-secondary font-bold">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.8060182355657!2d108.20562427709947!3d16.023610401101426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190051edb465%3A0xaedb9cebbe5ec3cb!2sHynie%20Nail!5e0!3m2!1sen!2s!4v1776178610654!5m2!1sen!2s" className="w-full md:w-[350px] h-[200px] rounded-xl border border-outline-variant/30 shadow-sm" loading="lazy"></iframe>
          <p>© 2024 Hynie Nails Room. {t('rights')}</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">
              {t('privacy')}
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
