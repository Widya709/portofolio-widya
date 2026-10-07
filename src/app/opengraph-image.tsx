import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Widya Aulia Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#DCEEFF",
          color: "#294E70",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "8px",
            marginBottom: 20,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "3px",
          }}
        >
          WIDYA AULIA
        </div>

        <div
          style={{
            fontSize: 26,
            letterSpacing: "5px",
            marginTop: 20,
          }}
        >
          SOFTWARE ENGINEERING STUDENT
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}