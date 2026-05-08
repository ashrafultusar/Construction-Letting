import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { services } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction, Remodels, Interiors & More" },
      {
        name: "description",
        content:
          "Home construction, building remodels, interior & exterior design, renovation and CDM safety management — delivered by one accountable team.",
      },
      { property: "og:title", content: "Services" },
      {
        property: "og:description",
        content: "Six disciplines, one studio. Building across London.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title="Six disciplines, one studio."
        lead="From a single bathroom to a multi-unit development, our team delivers each phase under one roof — design, structure, construction and handover."
      />

      <section className="py-12 md:py-20">
        <div className="container-edge">
          <ul className="divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <li key={s.title} className="group">
                <Link
                  to="/contact"
                  className="grid md:grid-cols-12 gap-6 items-center py-10 md:py-14 transition-colors hover:bg-secondary/40 -mx-6 md:-mx-12 px-6 md:px-12"
                >
                  <div className="md:col-span-1 font-display text-xl text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:col-span-1">
                    <s.icon size={32} strokeWidth={1.25} className="text-accent" />
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-3xl md:text-5xl text-balance">{s.title}</h2>
                  </div>
                  <p className="md:col-span-5 text-muted-foreground text-pretty leading-relaxed">
                    {s.description}
                  </p>
                  <div className="md:col-span-1 md:text-right">
                    <ArrowUpRight
                      size={28}
                      className="inline-block text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-edge pb-32">
        <div className="bg-foreground text-background p-12 md:p-20 grid md:grid-cols-2 gap-8 items-end">
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Not sure where your project fits? We'll guide you.
          </h2>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 text-sm tracking-wide hover:bg-background hover:text-foreground transition-colors"
            >
              Book a consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
