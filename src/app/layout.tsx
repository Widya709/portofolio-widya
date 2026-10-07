import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const siteUrl = "https://widya-aulia.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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
    url: siteUrl,
    siteName: "Widya Aulia Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-v2.png", // Simpan gambar di public/og-v2.png
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
    images: ["/og-v2.png"],
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