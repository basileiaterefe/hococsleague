import Link from "next/link";
import { site } from "@/content/site";
import { getPerson } from "@/lib/people";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("getInvolved");

export default function GetInvolvedPage() {
  const sponsorContact = getPerson(site.getInvolved.sponsor.contactId);
  const forms = site.getInvolved.forms;

  return (
    <>
      <PageHero title={site.getInvolved.heroTitle} lede={site.getInvolved.heroLede} />
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {site.getInvolved.pathways.map((pathway) => (
              <article key={pathway.id} className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-teal">
                  <Icon name={pathway.icon} />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-navy">{pathway.title}</h2>
                <p className="mt-3 flex-1 text-base leading-7 text-ink">
                  {pathway.body}
                  {pathway.id === "sponsor" ? (
                    <>
                      {" "}
                      <TodoText value={site.getInvolved.sponsor.funds} />.
                    </>
                  ) : null}
                </p>
                <div className="mt-6">
                  <a
                    href={"href" in pathway ? pathway.href : `#${pathway.id}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-800"
                  >
                    {pathway.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="compete" className="scroll-mt-24 bg-surface py-16 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy">Compete</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Register here, or ask your school Head Coordinator to add you. See the{" "}
              <Link href="/competitions#register" className="font-semibold text-teal-dark underline underline-offset-4">
                steps to participate
              </Link>
              .
            </p>
          </div>
          <InquiryForm form={forms.compete} />
        </Container>
      </section>

      <section id="volunteer" className="scroll-mt-24 py-16 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy">Volunteer</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Event day help, welcome desks, and division support all count. You do not need prior experience.
            </p>
          </div>
          <InquiryForm form={forms.volunteer} />
        </Container>
      </section>

      <section id="sponsor" className="scroll-mt-24 bg-surface py-16 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy">Sponsor</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Sponsorship funds go toward <TodoText value={site.getInvolved.sponsor.funds} />.
            </p>
            <h3 className="mt-6 text-xl font-bold text-navy">{site.getInvolved.sponsor.heading}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-ink">
              {site.getInvolved.sponsor.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-7 text-ink">
              {site.getInvolved.sponsor.contactLead}{" "}
              <Link
                href={`/leadership#${sponsorContact.id}`}
                className="font-semibold text-teal-dark underline underline-offset-4"
              >
                {sponsorContact.name}
              </Link>
              , {sponsorContact.title}.
            </p>
          </div>
          <InquiryForm form={forms.sponsor} />
        </Container>
      </section>

      <section id="chapter" className="scroll-mt-24 py-16 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy">Teachers and Advisors</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Use this form to ask about starting a chapter at your school. Teachers and advisors are welcome, and so are students organizing a new campus.
            </p>
          </div>
          <InquiryForm form={forms.chapter} />
        </Container>
      </section>
    </>
  );
}
