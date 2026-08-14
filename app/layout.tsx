import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: `${siteMeta.name} | ${siteMeta.tagline}`,
  description: siteMeta.description,
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.tagline}`,
    description: siteMeta.description,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream text-ink-900 antialiased">{children}</body>
    </html>
  );
}
