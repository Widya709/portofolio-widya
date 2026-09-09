"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
type Accent = "pastel" | "sky" | "lavender" | "cyan";

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [accent, setAccent] = useState<Accent>("pastel");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    const savedAccent = localStorage.getItem("portfolio-accent") as Accent | null;

    const initialTheme =
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "system"
        ? savedTheme
        : "system";

    const initialAccent =
      savedAccent === "pastel" ||
      savedAccent === "sky" ||
      savedAccent === "lavender" ||
      savedAccent === "cyan"
        ? savedAccent
        : "pastel";

    setTheme(initialTheme);
    setAccent(initialAccent);

    applyTheme(initialTheme);
    applyAccent(initialAccent);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      applyTheme("system");
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [theme]);

  function applyTheme(value: Theme) {
    const root = document.documentElement;

    if (value === "system") {
      root.removeAttribute("data-theme");
      return;
    }

    root.setAttribute("data-theme", value);
  }

  function applyAccent(value: Accent) {
    document.documentElement.setAttribute("data-accent", value);
  }

  function changeTheme(value: Theme) {
    setTheme(value);
    localStorage.setItem("portfolio-theme", value);
    applyTheme(value);
  }

  function changeAccent(value: Accent) {
    setAccent(value);
    localStorage.setItem("portfolio-accent", value);
    applyAccent(value);
  }

  return (
    <>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Buka pengaturan tema"
        aria-expanded={open}
      >
        ✦
      </button>

      <div className={`theme-panel ${open ? "theme-panel-open" : ""}`}>
        <div className="theme-panel-header">
          <div>
            <span className="theme-panel-label">APPEARANCE</span>
            <h3>Theme</h3>
          </div>

          <button
            className="theme-close"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup pengaturan tema"
          >
            ×
          </button>
        </div>

        <p className="theme-description">
          Customize the appearance of this portfolio.
        </p>

        <div className="theme-section">
          <span className="theme-section-title">MODE</span>

          <div className="theme-options">
            <button
              type="button"
              className={theme === "light" ? "selected" : ""}
              onClick={() => changeTheme("light")}
            >
              <span className="theme-preview light-preview">☀</span>
              <strong>Light</strong>
              <small>Bright & clean</small>
            </button>

            <button
              type="button"
              className={theme === "dark" ? "selected" : ""}
              onClick={() => changeTheme("dark")}
            >
              <span className="theme-preview dark-preview">☾</span>
              <strong>Dark</strong>
              <small>Soft & elegant</small>
            </button>
          </div>

          <button
            type="button"
            className={`system-option ${
              theme === "system" ? "selected" : ""
            }`}
            onClick={() => changeTheme("system")}
          >
            <span className="system-icon">◐</span>

            <span>
              <strong>System</strong>
              <small>Use device preference</small>
            </span>
          </button>
        </div>

        <div className="theme-section">
          <span className="theme-section-title">ACCENT</span>

          <div className="accent-row">
            <button
              type="button"
              className={`accent accent-pastel ${
                accent === "pastel" ? "active" : ""
              }`}
              onClick={() => changeAccent("pastel")}
              aria-label="Pastel blue"
            />

            <button
              type="button"
              className={`accent accent-sky ${
                accent === "sky" ? "active" : ""
              }`}
              onClick={() => changeAccent("sky")}
              aria-label="Sky blue"
            />

            <button
              type="button"
              className={`accent accent-lavender ${
                accent === "lavender" ? "active" : ""
              }`}
              onClick={() => changeAccent("lavender")}
              aria-label="Lavender blue"
            />

            <button
              type="button"
              className={`accent accent-cyan ${
                accent === "cyan" ? "active" : ""
              }`}
              onClick={() => changeAccent("cyan")}
              aria-label="Cyan"
            />
          </div>
        </div>

        <div className="theme-footer">
          <span>Portfolio Edition</span>
          <span>✦</span>
        </div>
      </div>
    </>
  );
}