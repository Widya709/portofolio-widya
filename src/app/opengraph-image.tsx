import { ImageResponse } from "next/og";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#DCEEFF",
        color: "#29445C",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "4px",
        }}
      >
        WIDYA AULIA
      </div>

      <div
        style={{
          marginTop: "18px",
          fontSize: 28,
          fontWeight: 400,
          letterSpacing: "10px",
          color: "#6E9FC8",
        }}
      >
        PORTFOLIO
      </div>
    </div>
  );
}