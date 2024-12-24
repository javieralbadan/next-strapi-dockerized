import '@coreui/coreui/dist/css/coreui.min.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLocales } from '@/api/locales';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bastion 365",
  description: "Bastion 365",
};

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  const locales = await getLocales();
  const defaultLocale = locales.find(({ isDefault }: { isDefault: boolean }) => isDefault);
  const langCode = defaultLocale.code || process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE;
  
  return (
    <html lang={langCode}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
