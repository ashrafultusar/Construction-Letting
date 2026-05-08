import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { services, projects, stats } from "@/lib/site-data";
import hero from "@/assets/hero.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction & Letting — 17 Years of Excellence in London" },
      {
        name: "description",
        content:
          "London-based construction, renovation and interior design studio. Seventeen years building homes, extensions and developments across the capital.",
      },
      { property: "og:title", content: "Construction & Letting — Building London" },
      {
        property: "og:description",
        content: "Architectural construction, remodels and interiors across London.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Steel and timber structure at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/10" />
        <div className="relative container-edge pb-16 md:pb-24 pt-32 text-background">
          <p className="text-xs uppercase tracking-[0.4em] text-background/70 reveal">
            17 Years of Excellence · World-class service
          </p>
          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-balance reveal-up">
            We build the
            <br />
            <span className="italic text-accent">quiet</span> of a
            well-made home.
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="max-w-md text-lg text-background/80 text-pretty reveal-up">
              A London construction studio working at the intersection of
              craft, structure and considered design — for homes, extensions
              and developments.
            </p>
            <div className="flex gap-4 reveal-up">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3.5 text-sm tracking-wide hover:bg-accent hover:text-background transition-colors"
              >
                See our work <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-background/40 text-background px-6 py-3.5 text-sm tracking-wide hover:bg-background hover:text-foreground transition-colors"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border overflow-hidden py-6 bg-background">
        <div className="flex marquee whitespace-nowrap gap-16 font-display text-3xl md:text-5xl">
          {[...Array(2)].flatMap((_, i) =>
            ["Construction", "Remodels", "Interiors", "Landscaping", "Renovation", "Safety"].map((w, j) => (
              <span key={`${i}-${j}`} className="flex items-center gap-16">
                <span className="opacity-60 hover:opacity-100 transition-opacity">{w}</span>
                <span className="text-accent">◆</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* Intro / stats */}
      <section className="py-24 md:py-40">
        <div className="container-edge grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">The studio</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
              A practice rooted in <em className="text-accent">craft</em>, partnership and integrity.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-muted-foreground text-pretty">
            <p>
              For seventeen years we've quietly shaped homes, extensions and
              developments across London. Our work is defined less by trend
              and more by what endures: honest materials, careful detailing
              and the relationships we build with the people who commission us.
            </p>
            <p>
              We bring architects, builders, surveyors and interior designers
              under a single roof — so your project moves from sketch to
              handover with one accountable team.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
              About the studio <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="container-edge mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8 md:p-12">
              <div className="font-display text-5xl md:text-6xl">{s.value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container-edge">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Services</p>
              <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance max-w-3xl">
                Six disciplines, one accountable team.
              </h2>
            </div>
            <Link to="/services" className="text-sm tracking-wide border-b border-background/40 pb-1 hover:text-accent hover:border-accent transition-colors">
              Explore services →
            </Link>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/15 border border-background/15">
            {services.map((s) => (
              <article key={s.title} className="group bg-foreground p-10 hover:bg-background hover:text-foreground transition-colors duration-500">
                <s.icon size={32} strokeWidth={1.25} className="text-accent" />
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm text-background/70 group-hover:text-muted-foreground transition-colors leading-relaxed">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 md:py-40">
        <div className="container-edge">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Work of excellence</p>
              <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance">
                Selected projects.
              </h2>
            </div>
            <Link to="/projects" className="text-sm tracking-wide border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
              View all work →
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-12">
            {featured.map((p, i) => (
              <Link
                key={p.title}
                to="/projects"
                className={`group relative overflow-hidden bg-muted ${
                  i === 0 ? "md:col-span-7 aspect-[4/3]" : i === 1 ? "md:col-span-5 aspect-[3/4]" : "md:col-span-12 aspect-[21/9]"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-background flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-background/70">
                      {p.category} · {p.location}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge pb-24">
        <div className="relative overflow-hidden bg-accent text-background p-12 md:p-20">
          <div className="grid md:grid-cols-2 gap-10 items-end relative z-10">
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              Have a building in mind? Let's begin with a conversation.
            </h2>
            <div className="md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:bg-background hover:text-foreground transition-colors"
              >
                Message the studio <ArrowUpRight size={16} />
              </Link>
              <p className="mt-4 text-sm text-background/80">
                or call <a href="tel:02034321190" className="underline">020 3432 1190</a>
              </p>
            </div>
          </div>
          <div aria-hidden className="absolute -right-20 -bottom-20 font-display text-[20rem] leading-none text-background/10 select-none">
            17
          </div>
        </div>
      </section>
    </Layout>
  );
}
