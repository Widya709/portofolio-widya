import { ImageResponse } from "next/og";

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
          background: "#F8F3EA",
          color: "#3A2F2A",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
          }}
        >
          Widya Aulia
        </div>

        <div
          style={{
            fontSize: 36,
            marginTop: 20,
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            color: "#B08D57",
          }}
        >
          Software Engineering Student
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}