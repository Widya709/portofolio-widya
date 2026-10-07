import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://widya-aulia.my.id"),

  title: "Widya Aulia | Portfolio",

  description:
    "Widya Aulia — Software Engineering Student, Web Development & UI/UX.",

  openGraph: {
    title: "Widya Aulia | Portfolio",
    description:
      "Widya Aulia — Software Engineering Student, Web Development & UI/UX.",
    url: "https://widya-aulia.my.id",
    siteName: "Widya Aulia Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Widya Aulia | Portfolio",
    description:
      "Widya Aulia — Software Engineering Student, Web Development & UI/UX.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}