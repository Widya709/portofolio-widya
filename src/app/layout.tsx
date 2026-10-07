import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://widya-aulia.my.id"),

  title: "Widya Aulia | Portfolio",

  description:
    "Widya Aulia — Software Engineering Student, Web Developer and UI/UX Designer.",

  openGraph: {
    title: "Widya Aulia | Portfolio",
    description:
      "Software Engineering Student, Web Developer and UI/UX Designer.",
    url: "https://widya-aulia.my.id",
    siteName: "Widya Aulia Portfolio",
    type: "website",
    images: [
      {
        url: "https://widya-aulia.my.id/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Widya Aulia Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Widya Aulia | Portfolio",
    description:
      "Software Engineering Student, Web Developer and UI/UX Designer.",
    images: ["https://widya-aulia.my.id/opengraph-image.png"],
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