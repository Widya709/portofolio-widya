import { ImageResponse } from "next/og";
import ogImage from "./og-image.png";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const imageUrl = new URL(
    ogImage.src,
    "http://localhost:3000"
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
        }}
      >
        <img
          src={imageUrl}
          width={1200}
          height={630}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}