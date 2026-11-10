import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero title={site.about.heroTitle} lede={site.about.heroLede} />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-ink">{site.about.mission.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">{site.about.mission.body}</p>
          </FadeIn>
          <FadeIn className="mt-14">
            <h2 className="text-3xl font-bold tracking-tight text-ink">{site.about.origin.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              {site.about.origin.before}{" "}
              <TodoText value={site.about.origin.founderStory} /> {site.about.origin.after}
            </p>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.about.activities.heading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {site.about.activities.items.map((item) => (
              <FadeIn key={item.title}>
                <article className="h-full rounded-2xl border border-line bg-card p-6 backdrop-blur-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-ink">{item.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.about.values.heading}</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2">
            {site.about.values.items.map((value, index) => (
              <li key={value.name} className="rounded-2xl border border-line bg-card p-6">
                <p className="font-display text-sm font-bold text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink">{value.name}</h3>
                <p className="mt-2 text-base leading-7 text-ink">{value.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
