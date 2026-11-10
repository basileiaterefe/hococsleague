import Link from "next/link";
import { site } from "@/content/site";
import { getPerson } from "@/lib/people";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("competitions");

export default function CompetitionsPage() {
  const ctfLead = getPerson(site.competitions.ctf.coordinatorId);
  const ctfVp = getPerson(site.competitions.ctf.vpId);
  const hackLead = getPerson(site.competitions.hackathon.coordinatorId);
  const hackVp = getPerson(site.competitions.hackathon.vpId);
  const { overview, participate, rules, calendar } = site.competitions;

  return (
    <>
      <PageHero title={site.competitions.heroTitle} lede={site.competitions.heroLede} />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">{overview.heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            {overview.before} <TodoText value={overview.teamFormat} />
            {overview.after}
          </p>
        </Container>
      </section>
      <section id="ctf" className="scroll-mt-24 bg-surface py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">{site.competitions.ctf.heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">{site.competitions.ctf.body}</p>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            <Link href={`/leadership#${ctfLead.id}`} className="font-semibold text-teal-dark underline underline-offset-4">
              {ctfLead.name}
            </Link>{" "}
            is CTF Coordinator.{" "}
            <Link href={`/leadership#${ctfVp.id}`} className="font-semibold text-teal-dark underline underline-offset-4">
              {ctfVp.name}
            </Link>{" "}
            is Co-VP.
          </p>
        </Container>
      </section>
      <section id="hackathons" className="scroll-mt-24 py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">{site.competitions.hackathon.heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            {site.competitions.hackathon.beforeHours}{" "}
            <TodoText value={site.competitions.hackathon.hours} />{" "}
            {site.competitions.hackathon.afterHours}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            <Link href={`/leadership#${hackLead.id}`} className="font-semibold text-teal-dark underline underline-offset-4">
              {hackLead.name}
            </Link>{" "}
            is Hackathon Coordinator.{" "}
            <Link href={`/leadership#${hackVp.id}`} className="font-semibold text-teal-dark underline underline-offset-4">
              {hackVp.name}
            </Link>{" "}
            is Co-VP.
          </p>
        </Container>
      </section>
      <section id="register" className="scroll-mt-24 bg-surface py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">{participate.heading}</h2>
          <ol className="mt-8 space-y-5">
            {participate.steps.map((step, index) => (
              <li key={index} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1.5 text-base leading-7 text-ink">
                  {step.kind === "text" ? (
                    step.text
                  ) : step.kind === "todo" ? (
                    <>
                      {step.before} <TodoText value={step.todo} />
                      {step.after}
                    </>
                  ) : (
                    <>
                      {step.before}{" "}
                      <Link href={step.linkHref} className="font-semibold text-teal-dark underline underline-offset-4">
                        {step.linkLabel}
                      </Link>
                      {step.after}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section id="rules" className="scroll-mt-24 py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">{rules.heading}</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-lg leading-relaxed text-ink">
            {rules.items.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-7 text-ink">
            {rules.codeOfConductLabel} <TodoText value={rules.codeOfConduct} />
          </p>
        </Container>
      </section>
      <section id="calendar" className="scroll-mt-24 bg-surface py-16 md:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-navy">{calendar.heading}</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">{calendar.caption}</caption>
              <thead className="bg-navy text-white">
                <tr>
                  {calendar.columns.map((column) => (
                    <th key={column} scope="col" className="px-4 py-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.events.map((event, index) => (
                  <tr key={`${event.date}-${index}`} className="border-t border-line">
                    <td className="px-4 py-4 align-top">
                      <TodoText value={event.date} />
                      {"year" in event && event.year ? (
                        <>
                          {" "}
                          <TodoText value={event.year} />
                        </>
                      ) : null}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <TodoText value={event.type} />
                    </td>
                    <td className="px-4 py-4 align-top">
                      <TodoText value={event.format} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
