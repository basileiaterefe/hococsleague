import Link from "next/link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden text-white">
        <Container className="relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              {site.home.eyebrow}
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-bold tracking-tight text-balance sm:text-6xl">
              {site.home.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {site.home.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {site.home.actions.map((action, index) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  variant={index === 0 ? "accent" : "ghost"}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-xs lg:block" aria-hidden="true">
            <div className="flex flex-col items-center rounded-[2rem] border border-white/15 bg-black/30 px-8 py-10 backdrop-blur-sm">
              <Logo size="lg" showWordmark={false} priority />
              <p className="mt-5 text-center text-sm font-semibold tracking-wide text-muted">
                CTF and hackathons
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="League at a glance" className="relative z-10">
        <Container className="-mt-8">
          <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-card backdrop-blur-sm md:grid-cols-4">
            {site.home.stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`px-4 py-6 text-center ${index > 0 ? "md:border-l md:border-line" : ""} ${
                  index % 2 === 1 ? "border-l border-line" : ""
                } ${index > 1 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built by students, open to every school
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{site.home.intro}</p>
          </FadeIn>
          <FadeIn>
            <article className="rounded-2xl border border-line bg-card p-6 backdrop-blur-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Upcoming
              </p>
              <h2 className="mt-3 text-2xl font-bold text-ink">{site.home.upcoming.heading}</h2>
              <p className="mt-4 text-lg">
                <TodoText value={site.home.upcoming.date} />
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                <TodoText value={site.home.upcoming.description} />
              </p>
              <div className="mt-6">
                <ButtonLink href={site.home.upcoming.registerHref}>
                  {site.home.upcoming.registerLabel}
                </ButtonLink>
              </div>
            </article>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Explore the league</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {site.home.previews.map((preview) => (
              <FadeIn key={preview.href}>
                <Link
                  href={preview.href}
                  className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 backdrop-blur-sm transition-colors hover:bg-white/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy">
                    <Icon name={preview.icon} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{preview.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{preview.body}</p>
                  <span className="mt-5 text-sm font-semibold text-white underline underline-offset-4">
                    View {preview.title}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
