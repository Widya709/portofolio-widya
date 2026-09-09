import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Widya Aulia | Portfolio",
  description: "Personal portfolio of Widya Aulia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}