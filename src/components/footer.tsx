"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (pathname === "/") {
      goTop();
    } else {
      router.push("/");
    }
  };

  const handleBackToTop = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (pathname === "/") {
      goTop();
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span>PORT</span>FOLIO.
        </div>

        <div className="footer-links">
          <a href="/" onClick={handleHome}>
            Home
          </a>

          <Link href="/tentang">About</Link>
          <Link href="/keahlian">Skills</Link>
          <Link href="/proyek">Projects</Link>
          <Link href="/kontak">Contact</Link>
        </div>

        <p>
          © 2026 Widya Aulia.
          <br />
          Designed & Built with Next.js
        </p>

        <a
          href="/"
          className="footer-top"
          onClick={handleBackToTop}
        >
          <span>BACK TO TOP</span>
          <strong>↑</strong>
        </a>
      </div>
    </footer>
  );
}
