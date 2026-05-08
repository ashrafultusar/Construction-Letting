import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { categories, projects, type Category } from "@/lib/site-data";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work of Excellence — Projects" },
      {
        name: "description",
        content:
          "Selected projects across London — extensions, brickwork, landscaping, interiors, washrooms, roofing and new build flats.",
      },
      { property: "og:title", content: "Work of Excellence" },
      {
        property: "og:description",
        content: "Completed and ongoing projects across London.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHeader
        eyebrow="Work of Excellence"
        title="Built work, ongoing care."
        lead="A selection of completed and live projects. Filter by discipline to explore the breadth of work across London boroughs."
      />

      <section className="py-12 md:py-16 sticky top-20 z-30 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container-edge flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                filter === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-edge">
          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-display text-3xl">No projects in this category yet.</p>
              <p className="mt-3 text-muted-foreground">More work coming soon.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-12 auto-rows-auto">
              {filtered.map((p, i) => {
                const cls =
                  p.span === "wide"
                    ? "md:col-span-8 aspect-[16/10]"
                    : p.span === "tall"
                      ? "md:col-span-4 aspect-[3/4]"
                      : "md:col-span-6 aspect-[4/3]";
                return (
                  <article
                    key={p.title}
                    className={`group relative overflow-hidden bg-muted reveal-up ${cls}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-background">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-background/70">
                          {p.category} · {p.year}
                        </p>
                        <ArrowUpRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                      <h3 className="mt-3 font-display text-2xl md:text-4xl text-balance">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-background/70">{p.location}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
