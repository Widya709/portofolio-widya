import { ImageResponse } from "next/og";

export const alt = "Widya Aulia Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "8px",
            marginBottom: "24px",
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
          }}
        >
          WIDYA AULIA
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "4px",
            marginTop: "24px",
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