import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-white text-navy hover:bg-zinc-200",
  accent: "bg-white text-navy hover:bg-zinc-200",
  inverse: "border border-white/20 bg-transparent text-white hover:bg-white/10",
  ghost: "border border-white/20 bg-transparent text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
