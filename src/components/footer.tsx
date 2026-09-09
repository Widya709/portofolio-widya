import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span>PORT</span>FOLIO.
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
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

        <a href="#home" className="footer-top">
          <span>BACK TO TOP</span>
          <strong>↑</strong>
        </a>
      </div>
    </footer>
  );
}