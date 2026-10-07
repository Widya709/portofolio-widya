"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/tentang", id: "about" },
  { label: "Skills", href: "/keahlian", id: "skills" },
  { label: "Projects", href: "/proyek", id: "projects" },
  { label: "Contact", href: "/kontak", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Logika mendeteksi halaman aktif & scroll section
  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    // 1. Jika pengguna berada di halaman khusus (/tentang, /proyek, dll.)
    if (pathname !== "/") {
      if (pathname.includes("tentang")) setActiveSection("about");
      else if (pathname.includes("keahlian")) setActiveSection("skills");
      else if (pathname.includes("proyek")) setActiveSection("projects");
      else if (pathname.includes("kontak")) setActiveSection("contact");
      return;
    }

    // 2. Jika berada di halaman utama (/), pantau scroll section jika komponennya ada
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0,
    });

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link
          href="/"
          className="logo"
          onClick={() => setOpen(false)}
        >
          PORT<span>FOLIO.</span>
        </Link>

        {/* Navigation */}
        <nav className={`nav-menu ${open ? "active" : ""}`}>
          {menuItems.map((item) => {
            // Penentuan menu aktif berdasarkan URL pathname / activeSection
            const active =
              pathname === "/"
                ? activeSection === item.id
                : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href} // Murni mengarah ke route /tentang, /proyek, dll.
                className={active ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>

                {/* Indikator Dot hanya muncul di menu yang aktif */}
                {active && <i className="nav-active-dot" />}
              </Link>
            );
          })}
        </nav>

        {/* Right Status & Mobile Button */}
        <div className="navbar-right">
          <span className="navbar-status">
            <i />
            Available
          </span>

          <button
            type="button"
            className={`menu-button ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}