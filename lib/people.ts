import { site, type Person } from "@/content/site";

export function isTodo(value: string): boolean {
  return /^\s*TODO\b/i.test(value);
}

export function getPerson(id: string): Person {
  const person = site.people.find((entry) => entry.id === id);
  if (!person) {
    throw new Error(`Unknown person id: ${id}`);
  }
  return person;
}

export function peopleInGroup(group: string): Person[] {
  return site.people.filter((person) => person.group === group);
}

export function schoolHeads(): Person[] {
  return peopleInGroup("School Executive Department");
}

export function schoolNames(): string[] {
  return schoolHeads()
    .map((person) => person.school)
    .filter((school): school is string => Boolean(school));
}

export function initials(name: string): string {
  if (isTodo(name)) {
    return "?";
  }
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export function siteOrigin(): string {
  if (isTodo(site.url)) {
    return "https://example.com";
  }
  return site.url.replace(/\/$/, "");
}

export function assertContent(): void {
  const ids = site.people.map((person) => person.id);
  if (new Set(ids).size !== ids.length) {
    throw new Error("Duplicate person id in content/site.ts");
  }

  for (const department of site.departments) {
    for (const memberId of department.memberIds) {
      const person = getPerson(memberId);
      if (person.group !== department.name) {
        throw new Error(
          `${memberId} is in ${department.name} but their group is ${person.group}`,
        );
      }
    }
  }

  const orgIds = [
    site.org.ctfLeadId,
    site.org.ctfVpId,
    site.org.hackLeadId,
    site.org.hackVpId,
    site.statewide.leadId,
    site.competitions.ctf.coordinatorId,
    site.competitions.ctf.vpId,
    site.competitions.hackathon.coordinatorId,
    site.competitions.hackathon.vpId,
    site.getInvolved.sponsor.contactId,
    site.contact.outreachPersonId,
    site.contact.advertisementPersonId,
  ];

  for (const id of orgIds) {
    getPerson(id);
  }

  for (const person of site.people) {
    if (person.worksWithId) {
      getPerson(person.worksWithId);
    }
  }
}
