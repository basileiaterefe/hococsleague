"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function closeMenu(restoreFocus = false) {
    setOpenPath(null);
    if (restoreFocus) {
      buttonRef.current?.focus();
    }
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const close = () => {
      setOpenPath(null);
      buttonRef.current?.focus();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) {
        return;
      }
      const items = panel.querySelectorAll<HTMLElement>("a[href]");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="rounded-lg">
          <Logo />
        </Link>
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1">
            {site.navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-md text-sm font-semibold ${
                      current ? "text-teal-dark" : "text-navy/80 hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 top-16 z-40 bg-navy/40 lg:hidden"
          aria-label="Close menu"
          onClick={() => closeMenu(true)}
        />
      ) : null}
      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Primary"
        className="absolute inset-x-0 top-16 z-50 border-b border-line bg-white shadow-lg lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1 px-4 py-4">
            {site.navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-xl px-3 text-base font-semibold ${
                      current ? "bg-foam text-teal-dark" : "text-navy hover:bg-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
