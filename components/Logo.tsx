export function Logo({ inverted = false }: { inverted?: boolean }) {
  const shield = inverted ? "#ffffff" : "#0B1F3A";
  const mark = inverted ? "#0B1F3A" : "#14B8A6";
  const word = inverted ? "text-white" : "text-navy";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path
          fill={shield}
          d="M16 2.4 28.2 6.8v8.4c0 6.4-4.5 11-12.2 14-7.7-3-12.2-7.6-12.2-14V6.8L16 2.4z"
        />
        <path
          fill="none"
          stroke={mark}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.4 17.2 9.2 15.2 11.4 13.2M20.6 13.2 22.8 15.2 20.6 17.2M13.5 20.2 18.6 12"
        />
      </svg>
      <span className={`font-display text-base font-bold tracking-tight sm:text-lg ${word}`}>
        HOCO CS League
      </span>
    </span>
  );
}
