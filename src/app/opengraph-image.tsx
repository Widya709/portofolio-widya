import { ImageResponse } from "next/og";

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
          backgroundColor: "#DCEEFF",
          color: "#294E70",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "8px",
            fontWeight: 500,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginTop: 20,
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
      width: 1200,
      height: 630,
    }
  );
}
