import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portofolio-widya-nine.vercel.app"
  ),

  title: {
    default: "Widya Aulia | Portfolio",
    template: "%s | Widya Aulia",
  },

  description:
    "Portfolio Widya Aulia, siswa Rekayasa Perangkat Lunak yang berfokus pada web development, UI/UX, dan pengembangan aplikasi digital.",

  openGraph: {
    title: "Widya Aulia | Portfolio",
    description:
      "Portfolio Widya Aulia, siswa Rekayasa Perangkat Lunak yang berfokus pada web development, UI/UX, dan pengembangan aplikasi digital.",
    url: "https://portofolio-widya-nine.vercel.app",
    siteName: "Widya Aulia | Portfolio",
    locale: "id_ID",
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