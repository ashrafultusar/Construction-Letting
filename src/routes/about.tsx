import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import interior from "@/assets/project-interior.jpg";
import { stats } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Construction & Letting" },
      {
        name: "description",
        content:
          "Seventeen years of building in London. Our values: excellence, partnership, integrity. Meet the studio behind the work.",
      },
      { property: "og:title", content: "About the studio" },
      {
        property: "og:description",
        content: "A London construction practice rooted in craft and partnership.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    n: "01",
    title: "Excellence",
    body: "We treat every joint, edge and surface as if it were our own home. Standards never slip.",
  },
  {
    n: "02",
    title: "Partnership",
    body: "Clients are collaborators. We listen first, propose second, build with care throughout.",
  },
  {
    n: "03",
    title: "Integrity",
    body: "Transparent pricing, honest timelines, no hidden margins. The work has to speak for itself.",
  },
  {
    n: "04",
    title: "Stewardship",
    body: "We respect the building, the street, the neighbours and the trades who do the work.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About the studio"
        title="A practice built on craft, conversation and time."
        lead="Founded in London seventeen years ago, we operate as a small, accountable team — designing, building and finishing residential and commercial work across the capital."
      />

      <section className="py-20 md:py-32">
        <div className="container-edge grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <img
              src={interior}
              alt="Restored interior with herringbone floor"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8 self-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Our story</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
              Seventeen years. One philosophy.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-pretty leading-relaxed">
              <p>
                We started in 2008 with a single restoration on Brick Lane. Today we run integrated
                builds across London — but the philosophy hasn't changed: do fewer projects, do them
                properly, and stay in the room from first sketch to final walkthrough.
              </p>
              <p>
                Our network spans architects, structural engineers, surveyors, mortgage brokers and
                interior designers. You speak to one project lead. They orchestrate the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container-edge">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">What we stand for</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance max-w-3xl">
            Four principles, applied to every project.
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-background/15 border border-background/15">
            {values.map((v) => (
              <div key={v.n} className="bg-foreground p-10 md:p-14">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-3xl text-accent">{v.n}</span>
                  <h3 className="font-display text-3xl">{v.title}</h3>
                </div>
                <p className="mt-6 text-background/70 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container-edge grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-10">
              <div className="font-display text-5xl">{s.value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
