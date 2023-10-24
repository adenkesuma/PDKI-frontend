import { NextAuthProvider } from "./provider";
import "./globals.css";
import { montserrat } from "@/utils/font";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Head from "next/head";

export const metadata = {
  title: "Perhimpunan Dokter Keluarga Indonesia",
  description: "perhimpunan dokter keluarga indonesia",
  icons: {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    url: "/favicon.png",
  },
};

async function getDirLang(locale: string) {
  try {
    return (await import(`../../../dir-lang/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

function UseLocale() {
  const locale = useLocale()
  return locale
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  // const locale = useLocale();
  const locale = UseLocale()
  const dir = await getDirLang(locale);

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <Head>
        <link rel='icon' href='./favicon.ico'/>
      </Head>
      <body className={`${montserrat.className} bg-gray-100`}>
        <NextAuthProvider>
          <NextIntlClientProvider locale={locale} messages={dir}>
            {children}
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
