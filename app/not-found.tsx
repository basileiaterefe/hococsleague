import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-navy text-white">
      <Container className="py-24">
        <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200">
          That page is not part of HOCO CS League. Use the menu, or go back to the home page.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" variant="accent">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
