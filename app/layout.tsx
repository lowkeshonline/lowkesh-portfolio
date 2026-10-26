import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import SiteHeader from "./_components/SiteHeader";
import SocialDock from "./_components/SocialDock";
import { profile } from "./_data/profile";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Software Engineer`,
  description:
    "Lokesh Chonga is a software engineer based in Hyderabad, India, building clear, fast web products with React, Next.js, Node, and TypeScript.",
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    "Lokesh Chonga",
    "software engineer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description:
      "Software engineer building clear, fast web products. Currently finishing an MCA and interning at Shipturtle Apps.",
    type: "website",
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — Software Engineer`,
    description: "Software engineer building clear, fast web products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1113",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <span id="top" className="top-anchor" aria-hidden="true" />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div className="site-shell">{children}</div>
        <SocialDock />
      </body>
    </html>
  );
}
