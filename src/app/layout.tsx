import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-widya-nine.vercel.app"),

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
    url: "https://portofolio-widya-nine.vercel.app",
    siteName: "Widya Aulia Portfolio",
    type: "website",

    images: [
      {
        url: "/opengraph-image",
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
    images: ["/opengraph-image"],
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