import Link from "next/link";
import { site } from "@/content/site";
import { getPerson, isTodo } from "@/lib/people";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { TodoText } from "@/components/TodoText";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  const outreach = getPerson(site.contact.outreachPersonId);
  const advertisement = getPerson(site.contact.advertisementPersonId);

  return (
    <>
      <PageHero title={site.contact.heroTitle} lede={site.contact.heroLede} />
      <section className="py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold text-navy">Reach the league</h2>
            <p className="mt-4 text-lg">
              <span className="text-muted">Email: </span>
              {isTodo(site.email) ? (
                <TodoText value={site.email} />
              ) : (
                <a className="font-semibold text-teal-dark underline underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              )}
            </p>
            <h3 className="mt-8 text-lg font-bold text-navy">Social</h3>
            <ul className="mt-3 space-y-2">
              {site.socials.map((social) => (
                <li key={`${social.platform}-${social.handle}`}>
                  <TodoText value={social.platform} />{" "}
                  {social.href && !isTodo(social.href) ? (
                    <a className="font-semibold text-teal-dark underline underline-offset-4" href={social.href}>
                      <TodoText value={social.handle} />
                    </a>
                  ) : (
                    <TodoText value={social.handle} />
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-ink">
              {site.contact.partnershipsIntro}{" "}
              <Link href={`/leadership#${outreach.id}`} className="font-semibold text-teal-dark underline underline-offset-4">
                {outreach.name}
              </Link>
              , {outreach.title}, {site.contact.partnershipsJoin}{" "}
              <Link
                href={`/leadership#${advertisement.id}`}
                className="font-semibold text-teal-dark underline underline-offset-4"
              >
                {advertisement.name}
              </Link>
              , {advertisement.title}.
            </p>
          </div>
          <div id="message" className="scroll-mt-24">
            <InquiryForm form={site.contact.form} />
          </div>
        </Container>
      </section>
    </>
  );
}
