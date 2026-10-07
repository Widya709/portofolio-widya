import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Widya Aulia - Portfolio";
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
            marginTop: 20,
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: "10px",
            color: "#6E9FC8",
          }}
        >
          PORTFOLIO
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}