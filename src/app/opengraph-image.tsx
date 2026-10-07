import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Widya Aulia - Personal Portfolio";
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
          background:
            "linear-gradient(135deg, #dff3ff 0%, #f7fbff 50%, #eaf6ff 100%)",
          color: "#102a43",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#4b7ea8",
            marginBottom: 24,
          }}
        >
          PERSONAL PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Widya Aulia
        </div>

        <div
          style={{
            fontSize: 32,
            marginTop: 24,
            color: "#52738d",
          }}
        >
          Web Development • UI/UX Design
        </div>

        <div
          style={{
            width: 120,
            height: 6,
            borderRadius: 10,
            background: "#79b9df",
            marginTop: 36,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}