import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { ContactModal } from "@/components/contact/contact-modal";
import { ContactModalProvider } from "@/components/contact/contact-provider";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ogImage = {
  url: "/brand/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteMeta.name} — ${siteMeta.tagline}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: `${siteMeta.name} | ${siteMeta.tagline}`,
  description: siteMeta.description,
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.tagline}`,
    description: siteMeta.description,
    locale: "ko_KR",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | ${siteMeta.tagline}`,
    description: siteMeta.description,
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream text-ink-900 antialiased">
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
