import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import Navbar from "./_components/Navbar";
import "../app/globals.css";
import Footer from "./_components/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Lokesh.OS - Portfolio",
  description: "Lokesh.OS - Building Systems for humans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col relative font-geist bg-background text-on-background">
        <div
          className="pointer-events-none fixed inset-0 z-9999"
          style={{ opacity: 0.03 }}
        >
          <svg className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
