import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const imagePath = join(
    process.cwd(),
    "src",
    "app",
    "og-image.png"
  );

  const imageBuffer = await readFile(imagePath);

  const imageBase64 = imageBuffer.toString("base64");

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
          src={`data:image/png;base64,${imageBase64}`}
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