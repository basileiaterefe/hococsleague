import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden text-white">
      <Container className="relative py-16 md:py-24">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </Container>
    </section>
  );
}
