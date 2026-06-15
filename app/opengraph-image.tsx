import { ImageResponse } from "next/og";

export const alt = "Alpha Diop — Design Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fafaf9",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          width: 48,
          height: 4,
          backgroundColor: "#c4841d",
          borderRadius: 999,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: "#1c1917",
            lineHeight: 1.05,
          }}
        >
          Alpha Diop
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#c4841d",
          }}
        >
          Design Engineer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#57534e",
            maxWidth: 720,
            lineHeight: 1.45,
          }}
        >
          Crafting interfaces where detail and engineering compound into
          something that feels right.
        </div>
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#a8a29e",
          letterSpacing: "0.02em",
        }}
      >
        alphadiop.dev
      </div>
    </div>,
    { ...size },
  );
}
