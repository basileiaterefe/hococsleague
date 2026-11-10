import Link from "next/link";
import { site } from "@/content/site";
import { schoolHeads } from "@/lib/people";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { InitialsAvatar } from "@/components/PersonCard";

export const metadata = pageMetadata("schools");

export default function SchoolsPage() {
  return (
    <>
      <PageHero title={site.schools.heroTitle} lede={site.schools.heroLede} />
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.schools.heading}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schoolHeads().map((person) => (
              <li key={person.id}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-ink">{person.school}</h3>
                  <div className="mt-5 flex items-center gap-3">
                    <InitialsAvatar name={person.name} photo={person.photo} size="sm" />
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        <Link
                          href={`/leadership#${person.id}`}
                          className="underline-offset-4 hover:underline"
                        >
                          {person.name}
                        </Link>
                      </p>
                      <p className="text-sm text-muted">{person.title}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-3xl border border-line bg-card px-6 py-10 text-white backdrop-blur-sm md:px-10">
            <h2 className="text-2xl font-bold">{site.schools.join}</h2>
            <div className="mt-6">
              <ButtonLink href={site.schools.joinHref} variant="accent">
                {site.schools.joinLabel}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
