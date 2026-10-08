import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obraksa.es"),
  title: "Obraksa Solano | Obras y reformas en Mallorca",
  description:
    "Obras y reformas para viviendas y locales en Mallorca. Calidad, compromiso y atención personalizada para cada proyecto.",
  alternates: {
    canonical: "https://obraksa.es",
  },
  icons: {
    icon: "/images/image.png",
  },
  openGraph: {
    title: "Obraksa Solano | Obras y reformas en Mallorca",
    description:
      "Obras y reformas para viviendas y locales en Mallorca. Calidad, compromiso y atención personalizada para cada proyecto.",
    url: "https://obraksa.es",
    siteName: "Obraksa Solano",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Obraksa Solano | Obras y reformas en Mallorca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obraksa Solano | Obras y reformas en Mallorca",
    description:
      "Obras y reformas para viviendas y locales en Mallorca. Calidad, compromiso y atención personalizada para cada proyecto.",
    images: ["/images/image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
