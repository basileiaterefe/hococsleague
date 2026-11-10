import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "HOCO CS League, a student-run competitive computer science league in Howard County, Maryland.";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#B0B0B0" }}>Howard County, Maryland</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700 }}>HOCO CS League</div>
          <div style={{ marginTop: 20, fontSize: 32, color: "#B0B0B0", maxWidth: 860 }}>
            A student-run competitive computer science league for Howard County high schools.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#B0B0B0" }}>CTF competitions and hackathons</div>
      </div>
    ),
    { ...size },
  );
}
