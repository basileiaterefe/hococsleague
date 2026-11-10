import Link from "next/link";
import { site, type Department, type Person } from "@/content/site";
import { getPerson } from "@/lib/people";
import { InitialsAvatar } from "@/components/PersonCard";

function shortSchool(school?: string) {
  return school?.replace(" High School", "") ?? "";
}

function Node({ person, label }: { person: Person; label?: string }) {
  return (
    <article className="w-full max-w-xs rounded-2xl border border-line bg-card p-4 text-center backdrop-blur-sm">
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
      ) : null}
      <div className="mt-3 flex justify-center">
        <InitialsAvatar name={person.name} photo={person.photo} size="sm" />
      </div>
      <h3 className="mt-3 text-base font-bold text-ink">
        <Link href={`#${person.id}`} className="underline-offset-4 hover:underline">
          {person.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted">{person.title}</p>
    </article>
  );
}

function DepartmentBox({ department }: { department: Department }) {
  const members = department.memberIds.map((id) => getPerson(id));
  const isSchools = department.id === "schools";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-4 backdrop-blur-sm">
      <h3 className="text-base font-bold text-ink">
        <Link href={`#department-${department.id}`} className="underline-offset-4 hover:underline">
          {department.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{department.summary}</p>
      <ul className="mt-3 space-y-1 text-sm text-ink">
        {isSchools
          ? members.map((member) => (
              <li key={member.id}>
                {shortSchool(member.school)}: {member.name}
              </li>
            ))
          : members.map((member) => (
              <li key={member.id}>
                {member.name}, {member.title}
              </li>
            ))}
      </ul>
    </article>
  );
}

function StackBranch({
  lead,
  vp,
  label,
}: {
  lead: Person;
  vp: Person;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-surface p-4">
      <Node person={lead} />
      <div className="ml-6 border-l-2 border-white/30 py-3 pl-4">
        <Node person={vp} label={label} />
      </div>
    </div>
  );
}

export function OrgChart() {
  const ctfLead = getPerson(site.org.ctfLeadId);
  const ctfVp = getPerson(site.org.ctfVpId);
  const hackLead = getPerson(site.org.hackLeadId);
  const hackVp = getPerson(site.org.hackVpId);

  return (
    <div>
      <p className="sr-only">{site.leadership.chartIntro}</p>
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-x-16">
          <div className="flex justify-center">
            <Node person={ctfLead} />
          </div>
          <div className="flex justify-center">
            <Node person={hackLead} />
          </div>
        </div>
        <div className="grid h-8 grid-cols-2" aria-hidden="true">
          <div className="flex justify-center">
            <div className="h-full w-px bg-white/20" />
          </div>
          <div className="flex justify-center">
            <div className="h-full w-px bg-white/20" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-16">
          <div className="flex justify-center">
            <Node person={ctfVp} label={site.org.ctfLabel} />
          </div>
          <div className="flex justify-center">
            <Node person={hackVp} label={site.org.hackLabel} />
          </div>
        </div>
        <div className="relative h-16" aria-hidden="true">
          <div className="absolute top-0 left-1/4 h-4 w-px -translate-x-1/2 bg-white/20" />
          <div className="absolute top-0 left-3/4 h-4 w-px -translate-x-1/2 bg-white/20" />
          <div className="absolute top-4 right-1/4 left-1/4 h-px bg-white/20" />
          <div className="absolute top-4 left-1/2 h-4 w-px -translate-x-1/2 bg-white/20" />
          <div className="absolute top-8 right-[16.67%] left-[16.67%] h-px bg-white/20" />
          <div className="absolute top-8 left-[16.67%] h-8 w-px -translate-x-1/2 bg-white/20" />
          <div className="absolute top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-white/20" />
          <div className="absolute top-8 left-[83.33%] h-8 w-px -translate-x-1/2 bg-white/20" />
        </div>
        <div className="grid grid-cols-3 items-stretch gap-4">
          {site.departments.map((department) => (
            <DepartmentBox key={department.id} department={department} />
          ))}
        </div>
      </div>
      <div className="space-y-4 lg:hidden">
        <StackBranch lead={ctfLead} vp={ctfVp} label={site.org.ctfLabel} />
        <StackBranch lead={hackLead} vp={hackVp} label={site.org.hackLabel} />
        <div className="space-y-4">
          {site.departments.map((department) => (
            <DepartmentBox key={department.id} department={department} />
          ))}
        </div>
      </div>
    </div>
  );
}
