import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://widya-aulia.my.id"),
  title: {
    default: "Widya Aulia - Website Profil & Portfolio",
    template: "%s | Widya Aulia",
  },
  description:
    "Portofolio Widya Aulia, siswa SMKN 1 Pasuruan yang berfokus pada web development dan UI/UX.",
  openGraph: {
    title: "Widya Aulia - Website Profil & Portfolio",
    description:
      "Portofolio Widya Aulia, siswa SMKN 1 Pasuruan yang berfokus pada web development dan UI/UX.",
    url: "https://widya-aulia.my.id",
    siteName: "Widya Aulia Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Widya Aulia - Personal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Widya Aulia - Website Profil & Portfolio",
    description:
      "Portofolio Widya Aulia, siswa SMKN 1 Pasuruan yang berfokus pada web development dan UI/UX.",
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