import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { TodoText } from "@/components/TodoText";
import { isTodo } from "@/lib/people";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-navy/90 text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="rounded-lg">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-muted">
            Pages
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-medium text-white underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-muted">
            Contact
          </h2>
          <p className="mt-4 text-sm">
            <span className="text-muted">Email: </span>
            {isTodo(site.email) ? (
              <TodoText value={site.email} />
            ) : (
              <a className="font-semibold underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            )}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.socials.map((social) => (
              <li key={`${social.platform}-${social.handle}`}>
                <TodoText value={social.platform} />
                <span className="text-muted"> </span>
                {social.href && !isTodo(social.href) ? (
                  <a className="font-semibold underline underline-offset-4" href={social.href}>
                    {isTodo(social.handle) ? <TodoText value={social.handle} /> : social.handle}
                  </a>
                ) : (
                  <TodoText value={social.handle} />
                )}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <span className="text-muted">Site URL: </span>
            <TodoText value={site.url} />
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4">
          <p className="text-sm text-muted">{site.footerNote}</p>
        </Container>
      </div>
    </footer>
  );
}
