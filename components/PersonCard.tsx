import Image from "next/image";
import type { Person } from "@/content/site";
import { TodoText } from "@/components/TodoText";
import { getPerson, initials } from "@/lib/people";

type CardPerson = Pick<Person, "name" | "title" | "bio" | "photo" | "school" | "worksWithId"> & {
  id?: string;
  meta?: string;
};

export function InitialsAvatar({
  name,
  photo,
  size = "md",
}: {
  name: string;
  photo?: string;
  size?: "sm" | "md";
}) {
  const dimension = size === "sm" ? "h-10 w-10 text-xs" : "h-14 w-14 text-sm";
  if (photo) {
    return (
      <Image
        src={photo}
        alt=""
        width={size === "sm" ? 40 : 56}
        height={size === "sm" ? 40 : 56}
        className={`${dimension} rounded-full object-cover`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${dimension} shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white`}
    >
      {initials(name)}
    </span>
  );
}

export function PersonCard({
  person,
  eyebrow,
  headingLevel = "h3",
}: {
  person: CardPerson;
  eyebrow?: string;
  headingLevel?: "h3" | "h4";
}) {
  const partner = person.worksWithId ? getPerson(person.worksWithId) : undefined;

  return (
    <article
      id={person.id}
      className="scroll-mt-24 rounded-2xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(11,31,58,0.05)]"
    >
      <div className="flex items-start gap-4">
        <InitialsAvatar name={person.name} photo={person.photo} />
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-dark">{eyebrow}</p>
          ) : null}
          {headingLevel === "h4" ? (
            <h4 className="text-lg font-bold text-navy">
              <TodoText value={person.name} />
            </h4>
          ) : (
            <h3 className="text-lg font-bold text-navy">
              <TodoText value={person.name} />
            </h3>
          )}
          <p className="mt-1 text-sm font-medium text-ink">
            <TodoText value={person.title} />
          </p>
          {person.school ? <p className="mt-1 text-sm text-muted">{person.school}</p> : null}
          {person.meta ? <p className="mt-1 text-sm text-muted">{person.meta}</p> : null}
        </div>
      </div>
      {partner ? (
        <p className="mt-4 text-sm text-muted">Works with {partner.name}.</p>
      ) : null}
      <p className="mt-4 text-sm leading-6 text-ink">
        <TodoText value={person.bio} />
      </p>
    </article>
  );
}
