import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { MarylandDiagram } from "@/components/MarylandDiagram";
import { PageHero } from "@/components/PageHero";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("maryland");

export default function MarylandPage() {
  return (
    <>
      <PageHero title={site.maryland.heroTitle} lede={site.maryland.heroLede} />
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.maryland.overview.heading}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">{site.maryland.overview.body}</p>
          <div className="mt-12">
            <MarylandDiagram />
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">{site.maryland.goal.heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">{site.maryland.goal.body}</p>
          </div>
          <article className="rounded-2xl border border-line bg-card p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-ink">{site.maryland.firstEvent.heading}</h2>
            <p className="mt-4 text-lg">
              <TodoText value={site.maryland.firstEvent.date} />
            </p>
            <div className="mt-6">
              <ButtonLink href={site.maryland.firstEvent.ctaHref}>
                {site.maryland.firstEvent.cta}
              </ButtonLink>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
