import { isTodo } from "@/lib/people";

export function TodoText({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  if (!isTodo(value)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      className={`inline-block rounded-md bg-amber-100 px-2 py-0.5 align-baseline text-[0.95em] font-semibold leading-snug text-amber-950 ring-1 ring-inset ring-amber-500 ${className}`}
    >
      {value}
    </span>
  );
}
