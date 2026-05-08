import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24 border-b border-border">
      <div className="container-edge">
        <p className="text-xs uppercase tracking-[0.3em] text-accent reveal">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-balance reveal-up">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty reveal-up">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
