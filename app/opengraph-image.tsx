import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "HOCO CS League, a student-run competitive computer science league in Howard County, Maryland.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#B0B0B0" }}>Howard County, Maryland</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 80, fontWeight: 700 }}>
            HOCO CS League
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#B0B0B0" }}>
            A student-run competitive computer science league for Howard County high schools.
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 26, color: "#B0B0B0" }}>
            CTF competitions and hackathons
          </div>
        </div>
        <img src={logoSrc} width={280} height={351} alt="" />
      </div>
    ),
    { ...size },
  );
}
