"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro ${exit ? "intro-exit" : ""}`}>
      <div className="intro-number intro-number-top">01</div>

      <div className="intro-center">
        <div className="intro-dot" />

        <h1>dyamorr</h1>

        <div className="intro-line">
          <span />
        </div>

        <p>digital creator</p>
      </div>

      <div className="intro-number intro-number-bottom">2026</div>

      <div className="intro-corner intro-corner-top" />
      <div className="intro-corner intro-corner-bottom" />
    </div>
  );
}