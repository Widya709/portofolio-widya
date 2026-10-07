import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}