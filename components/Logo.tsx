import Image from "next/image";

const sizes = {
  sm: "h-9 w-auto sm:h-10",
  md: "h-12 w-auto",
  lg: "h-40 w-auto sm:h-48",
} as const;

export function Logo({
  size = "sm",
  showWordmark = true,
  priority = false,
}: {
  size?: keyof typeof sizes;
  showWordmark?: boolean;
  priority?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt=""
        width={202}
        height={253}
        className={`${sizes[size]} shrink-0`}
        priority={priority}
      />
      {showWordmark ? (
        <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
          HOCO CS League
        </span>
      ) : null}
    </span>
  );
}
