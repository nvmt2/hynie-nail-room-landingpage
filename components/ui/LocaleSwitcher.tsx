'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { locales } from '@/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2 items-center text-sm font-medium uppercase tracking-widest">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleLocaleChange(l)}
          className={`transition-colors hover:text-primary ${locale === l ? 'text-primary' : 'text-on-surface/60'
            }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
