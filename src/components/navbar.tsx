"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Home",
    path: "/",
    section: "home",
  },
  {
    label: "About",
    path: "/tentang",
    section: "about",
  },
  {
    label: "Skills",
    path: "/keahlian",
    section: "skills",
  },
  {
    label: "Projects",
    path: "/proyek",
    section: "projects",
  },
  {
    label: "Contact",
    path: "/kontak",
    section: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);

      // Hanya mendeteksi section ketika berada di Home
      if (pathname !== "/") {
        return;
      }

      const sections = menuItems
        .map((item) => document.getElementById(item.section))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActive(current);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Jika sedang di Home
    if (pathname === "/") {
      setActive("home");
      return;
    }

    // Jika sedang di halaman lain
    const currentItem = menuItems.find(
      (item) => item.path === pathname
    );

    if (currentItem) {
      setActive(currentItem.section);
    }
  }, [pathname]);

  function handleClick(section: string) {
    setActive(section);
    setOpen(false);
  }

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          href="/"
          className="logo"
          onClick={() => handleClick("home")}
        >
          PORT<span>FOLIO.</span>
        </Link>

        {/* NAVIGATION */}
        <nav
          className={`nav-menu ${
            open ? "active" : ""
          }`}
        >
          {menuItems.map((item) => {
            const isActive =
              active === item.section;

            return (
              <Link
                key={item.label}
                href={item.path}
                className={
                  isActive
                    ? "active-link"
                    : ""
                }
                onClick={() =>
                  handleClick(item.section)
                }
              >
                <span>{item.label}</span>

                {isActive && (
                  <i className="nav-active-dot"></i>
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="navbar-right">

          <span className="navbar-status">
            <i></i>
            Available
          </span>

          <button
            className={`menu-button ${
              open ? "open" : ""
            }`}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </header>
  );
}