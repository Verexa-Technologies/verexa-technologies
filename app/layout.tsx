import type { Metadata } from "next";
import { Inter, Outfit, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Verexa Technologies | Digital Solutions, Web & Mobile Development",
    template: "%s | Verexa Technologies",
  },
  description: "Empowering global brands with cutting-edge digital experiences. We specialize in web design, mobile app development, graphic design, cloud infrastructure, and IT support based in Toronto, Canada.",
  keywords: [
    "Verexa Technologies",
    "Web Design Toronto",
    "Mobile App Development",
    "Cloud Infrastructure",
    "IT Support",
    "Digital Agency",
    "Graphic Design",
    "Software Development",
    "UI/UX Design",
  ],
  authors: [{ name: "Verexa Technologies" }],
  creator: "Verexa Technologies",
  publisher: "Verexa Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Verexa Technologies | Digital Solutions & IT Support",
    description: "Empowering global brands with cutting-edge digital experiences. We design, build, and deploy the future.",
    url: "https://verexatechnologies.ca",
    siteName: "Verexa Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Verexa Technologies Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verexa Technologies | Digital Solutions",
    description: "Empowering global brands with cutting-edge digital experiences.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
