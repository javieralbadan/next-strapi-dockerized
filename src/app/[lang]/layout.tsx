import { getLocales } from '@/api/locales';
import { getNavItems } from '@/api/navItems';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';

export default async function LanguageLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  const availableLocales = await getLocales();
  const hasValidLocale = availableLocales.some(({ code }: { code: string }) => code === lang);
  if (!hasValidLocale) {
    return notFound();
  }

  const menu = await getNavItems(lang);

  return (
    <>
      <Header lang={lang} menu={menu} />
      {children}
    </>
  );
}
