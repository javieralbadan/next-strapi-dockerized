import '@coreui/coreui/dist/css/coreui.min.css';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bastion 365",
  description: "Bastion 365",
};

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE;
  
  return (
    <html lang={defaultLocale}>
      <body>
        {children}
      </body>
    </html>
  );
}
