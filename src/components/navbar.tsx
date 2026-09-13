"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);

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
    if (pathname === "/") {
      setActive("home");
      return;
    }

    const currentItem = menuItems.find(
      (item) => item.path === pathname
    );

    if (currentItem) {
      setActive(currentItem.section);
    }
  }, [pathname]);

  function handleNavigation(
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    section: string
  ) {
    event.preventDefault();

    setActive(section);
    setOpen(false);

    if (path === "/" && pathname !== "/") {
      window.location.href = "/";
      return;
    }

    if (path === pathname) {
      if (path === "/") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

      return;
    }

    document.body.classList.add("page-transition-out");

    setTimeout(() => {
      router.push(path);
    }, 300);
  }

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <Link
          href="/"
          className="logo"
          onClick={(event) =>
            handleNavigation(event, "/", "home")
          }
        >
          PORT<span>FOLIO.</span>
        </Link>

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
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.path,
                    item.section
                  )
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
