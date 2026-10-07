import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-widya-nine.vercel.app"),
  title: {
    default: "Widya Aulia - Website Profil & Portfolio",
    template: "%s | Widya Aulia",
  },
  description:
    "Portofolio Widya Aulia, siswa SMKN 1 Pasuruan dari jurusan Rekayasa Perangkat Lunak yang berfokus pada web development dan UI/UX.",
  openGraph: {
    title: "Widya Aulia - Website Profil & Portfolio",
    description:
      "Portofolio Widya Aulia, siswa SMKN 1 Pasuruan yang berfokus pada web development dan UI/UX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}