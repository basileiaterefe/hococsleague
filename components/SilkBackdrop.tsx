import Image from "next/image";

export function SilkBackdrop() {
  return (
    <div className="silk-backdrop" aria-hidden="true">
      <Image src="/silk.png" alt="" fill sizes="100vw" priority />
    </div>
  );
}
