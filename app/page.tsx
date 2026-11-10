import Link from "next/link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Icon } from "@/components/Icon";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <Container className="relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {site.home.eyebrow}
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-bold tracking-tight text-balance sm:text-6xl">
              {site.home.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              {site.home.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {site.home.actions.map((action, index) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  variant={index === 0 ? "accent" : "inverse"}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-xs lg:block" aria-hidden="true">
            <div className="rounded-[2rem] border border-white/15 bg-white/5 p-8">
              <svg viewBox="0 0 120 140" className="mx-auto h-48 w-40 text-teal">
                <path
                  fill="currentColor"
                  d="M60 8 108 26v34c0 28-18 48-48 62-30-14-48-34-48-62V26L60 8z"
                  opacity="0.95"
                />
                <path
                  fill="none"
                  stroke="#0B1F3A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M42 74 34 66 42 58M78 58 86 66 78 74M50 88 70 52"
                />
              </svg>
              <p className="mt-4 text-center text-sm font-semibold tracking-wide text-teal">
                CTF and hackathons
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="League at a glance" className="relative z-10">
        <Container className="-mt-8">
          <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_rgba(11,31,58,0.08)] md:grid-cols-4">
            {site.home.stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`px-4 py-6 text-center ${index > 0 ? "md:border-l md:border-line" : ""} ${
                  index % 2 === 1 ? "border-l border-line" : ""
                } ${index > 1 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <p className="font-display text-3xl font-bold text-navy">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Built by students, open to every school
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">{site.home.intro}</p>
          </FadeIn>
          <FadeIn>
            <article className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">
                Upcoming
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy">{site.home.upcoming.heading}</h2>
              <p className="mt-4 text-lg">
                <TodoText value={site.home.upcoming.date} />
              </p>
              <p className="mt-3 text-base leading-7 text-ink">
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

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Explore the league</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {site.home.previews.map((preview) => (
              <FadeIn key={preview.href}>
                <Link
                  href={preview.href}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-teal">
                    <Icon name={preview.icon} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{preview.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{preview.body}</p>
                  <span className="mt-5 text-sm font-semibold text-teal-dark underline underline-offset-4">
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
