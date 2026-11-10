import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { StatCounter } from "@/components/StatCounter";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("impact");

export default function ImpactPage() {
  const study = site.impact.caseStudy;
  const facts = [
    { label: study.participantsLabel, value: study.participants },
    { label: study.schoolsLabel, value: study.schools },
    { label: study.challengesLabel, value: study.challengesSolved },
    { label: study.winnerLabel, value: study.winner },
  ];

  return (
    <>
      <PageHero title={site.impact.heroTitle} lede={site.impact.heroLede} />
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <article className="rounded-3xl border border-line bg-surface p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Featured</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{study.heading}</h2>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl bg-card p-5">
                    <dt className="text-sm font-semibold text-muted">{fact.label}</dt>
                    <dd className="mt-2 text-lg font-semibold text-ink">
                      <TodoText value={fact.value} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg leading-relaxed text-ink">
                <span className="font-semibold text-ink">{study.highlightLabel}: </span>
                <TodoText value={study.highlight} />
              </p>
            </article>
          </FadeIn>
        </Container>
      </section>
      <section className="pb-16 md:pb-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.impact.numbers.heading}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{site.impact.numbers.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.impact.numbers.counters.map((counter) => (
              <StatCounter
                key={counter.label}
                label={counter.label}
                value={counter.value}
                todo={counter.todo}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.impact.testimonials.heading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {site.impact.testimonials.items.map((item) => (
              <figure key={item.quote} className="rounded-2xl border border-line bg-card p-6 backdrop-blur-sm">
                <blockquote className="text-lg leading-relaxed text-ink">
                  <TodoText value={item.quote} />
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="font-semibold text-ink">
                    <TodoText value={item.name} />
                  </span>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  <TodoText value={item.role} />
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.impact.lessons.heading}</h2>
          <ol className="mt-6 space-y-4">
            {site.impact.lessons.items.map((lesson, index) => (
              <li key={lesson} className="rounded-2xl border border-line p-5">
                <p className="text-sm font-semibold text-muted">Lesson {index + 1}</p>
                <p className="mt-2 text-base leading-7 text-ink">
                  <TodoText value={lesson} />
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
