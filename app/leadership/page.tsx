import { site } from "@/content/site";
import { getPerson, peopleInGroup } from "@/lib/people";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { OrgChart } from "@/components/OrgChart";
import { PageHero } from "@/components/PageHero";
import { PersonCard } from "@/components/PersonCard";

export const metadata = pageMetadata("leadership");

export default function LeadershipPage() {
  const lead = getPerson(site.statewide.leadId);

  return (
    <>
      <PageHero title={site.leadership.heroTitle} lede={site.leadership.heroLede} />
      <section className="py-16 md:py-24" aria-labelledby="org-chart-heading">
        <Container>
          <h2 id="org-chart-heading" className="text-3xl font-bold tracking-tight text-ink">
            {site.leadership.chartHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{site.leadership.chartIntro}</p>
          <div className="mt-10">
            <OrgChart />
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 md:py-24">
        <Container className="space-y-14">
          {site.leadership.groups.map((group) => (
            <FadeIn key={group.group}>
              <h2 className="text-2xl font-bold text-ink">{group.heading}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {peopleInGroup(group.group).map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </FadeIn>
          ))}
          {site.departments.map((department) => (
            <FadeIn key={department.id}>
              <div id={`department-${department.id}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-ink">{department.name}</h2>
                <p className="mt-2 max-w-3xl text-base leading-7 text-muted">{department.summary}</p>
                {department.id === "schools" ? (
                  <div className="mt-6 space-y-8">
                    {department.memberIds.map((id) => {
                      const person = getPerson(id);
                      return (
                        <div key={person.id}>
                          <h3 className="text-lg font-bold text-ink">{person.school}</h3>
                          <div className="mt-3 max-w-xl">
                            <PersonCard person={person} headingLevel="h4" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {department.memberIds.map((id) => (
                      <PersonCard key={id} person={getPerson(id)} />
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>
      <section id="statewide" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">{site.statewide.heading}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{site.statewide.intro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <PersonCard
              person={{
                name: lead.name,
                title: lead.title,
                bio: lead.bio,
                photo: lead.photo,
                school: lead.school,
              }}
              eyebrow={site.statewide.leadRole}
            />
            <PersonCard
              person={{
                name: site.statewide.coLead.name,
                title: site.statewide.coLead.role,
                bio: site.statewide.coLead.bio,
              }}
            />
            <PersonCard
              person={{
                name: site.statewide.competitionLead.name,
                title: site.statewide.competitionLead.role,
                bio: site.statewide.competitionLead.bio,
              }}
            />
          </div>
          <h3 className="mt-12 text-2xl font-bold text-ink">{site.statewide.liaisonsHeading}</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {site.statewide.liaisons.map((liaison) => (
              <PersonCard
                key={liaison.county}
                person={{
                  name: liaison.name,
                  title: "County Liaison",
                  bio: liaison.bio,
                  meta: liaison.county,
                }}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
