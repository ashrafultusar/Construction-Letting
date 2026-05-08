import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Construction & Letting, London" },
      {
        name: "description",
        content:
          "Get in touch with our London construction studio. 6 Greatorex Street, E1 5NF. Call 020 3432 1190 or email info@constructionandletting.com.",
      },
      { property: "og:title", content: "Contact the studio" },
      {
        property: "og:description",
        content: "Start a conversation about your next project in London.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHeader
        eyebrow="Get in touch"
        title="Tell us about your project."
        lead="Whether it's a single room or a multi-unit development, we'd love to hear what you're planning. We typically reply within one working day."
      />

      <section className="py-16 md:py-24">
        <div className="container-edge grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-border p-10 md:p-14 bg-secondary/40 reveal">
                <Check size={36} className="text-accent" />
                <h2 className="mt-6 font-display text-4xl">Message received.</h2>
                <p className="mt-4 text-muted-foreground">
                  Thank you. A member of the studio will reply within one working day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                <Field label="Your name" name="name" required />
                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Select label="Project type" name="type" options={["Home Construction", "Remodel", "Interior Design", "Renovation", "New Build", "Other"]} />
                <Field label="Project location" name="location" placeholder="e.g. Hampstead, NW3" />
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    About your project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-0 border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:bg-accent transition-colors"
                >
                  Send message <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-12">
            <Info icon={MapPin} title="Studio">
              6 Greatorex Street<br />
              Clifton Trade Centre, 1st Floor<br />
              Unit 10, London E1 5NF
            </Info>
            <Info icon={Phone} title="Phone">
              <a href="tel:02034321190" className="block hover:text-accent">020 3432 1190</a>
              <a href="tel:07969338742" className="block hover:text-accent">079 6933 8742</a>
            </Info>
            <Info icon={Mail} title="Email">
              <a href="mailto:info@constructionandletting.com" className="hover:text-accent break-all">
                info@constructionandletting.com
              </a>
            </Info>
            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Hours</p>
              <p className="mt-3 text-sm">Monday – Friday · 8:00 – 18:00</p>
              <p className="text-sm text-muted-foreground">Saturday by appointment</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
        {label}
      </label>
      <select
        name={name}
        className="w-full bg-transparent border-0 border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-accent">
        <Icon size={18} strokeWidth={1.5} />
        <p className="text-xs uppercase tracking-[0.3em]">{title}</p>
      </div>
      <div className="mt-4 text-foreground leading-relaxed">{children}</div>
    </div>
  );
}
