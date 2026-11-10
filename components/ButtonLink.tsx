import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-800",
  accent: "bg-teal text-navy hover:bg-[#0f9e8f]",
  inverse: "bg-white text-navy hover:bg-surface",
  ghost: "border border-navy/15 bg-white text-navy hover:bg-surface",
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
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-center text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
