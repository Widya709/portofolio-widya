import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://widya-aulia.my.id"),

  title: {
    default: "Widya Aulia Website Profil & Portfolio",
    template: "%s | Widya Aulia",
  },

  description:
    "Portofolio siswa SMK Rekayasa Perangkat Lunak, dibangun dengan Next.js dan Supabase.",

  openGraph: {
    title: "Widya Aulia Website Profil & Portfolio",
    description:
      "Portofolio siswa SMK Rekayasa Perangkat Lunak, dibangun dengan Next.js dan Supabase.",
    url: "https://widya-aulia.my.id",
    siteName: "Widya Aulia Portfolio",
    type: "website",
    images: [
      {
        url: "https://widya-aulia.my.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Widya Aulia Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Widya Aulia Website Profil & Portfolio",
    description:
      "Portofolio siswa SMK Rekayasa Perangkat Lunak, dibangun dengan Next.js dan Supabase.",
    images: ["https://widya-aulia.my.id/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}