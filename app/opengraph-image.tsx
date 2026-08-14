import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/content";

export const alt = `${siteMeta.name} — ${siteMeta.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);

  if (match) {
    const response = await fetch(match[1]);
    if (response.ok) return response.arrayBuffer();
  }
  throw new Error(`Failed to load font asset for ${family}`);
}

/** Sitewide default Open Graph / social-share image — brand blue, wordmark + tagline. */
export default async function OpengraphImage() {
  const title = siteMeta.name;
  const subtitle = siteMeta.tagline;

  const [titleFont, subtitleFont] = await Promise.all([
    loadGoogleFont("Noto+Sans+KR", 900, title),
    loadGoogleFont("Noto+Sans+KR", 500, subtitle),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1242C8 0%, #092663 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 108,
            height: 108,
            borderRadius: 32,
            background: "#ffffff",
            marginBottom: 44,
          }}
        >
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#1242C8" }} />
        </div>
        <div
          style={{
            fontFamily: "Noto Sans KR",
            fontWeight: 900,
            fontSize: 104,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: "Noto Sans KR",
            fontWeight: 500,
            fontSize: 40,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans KR", data: titleFont, weight: 900, style: "normal" },
        { name: "Noto Sans KR", data: subtitleFont, weight: 500, style: "normal" },
      ],
    },
  );
}
