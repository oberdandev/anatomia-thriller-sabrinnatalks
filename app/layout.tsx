import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Playfair_Display, IM_Fell_English } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fell = IM_Fell_English({
  variable: "--font-fell",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vozes Vitorianas do Mistério — Curso Livre | Sabrinna Talks",
  description:
    "Uma imersão na história e na teoria literária do suspense. Dos romances de Newgate a Poe, das sensation novels às origens do thriller moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${playfair.variable} ${fell.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
