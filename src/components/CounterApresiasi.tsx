"use client";

import { useState } from "react";

export default function CounterApresiasi() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div style={{ marginTop: "30px" }}>
      <button
        type="button"
        onClick={() => setJumlah(jumlah + 1)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          border: "1px solid currentColor",
          borderRadius: "30px",
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        <span style={{ fontSize: "20px" }}>♡</span>
        <span>APPRECIATE</span>
        <span>{jumlah}</span>
      </button>
    </div>
  );
}