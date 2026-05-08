import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-edge py-20 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-background/50">
            Construction & Letting
          </p>
          <h3 className="mt-6 font-display text-4xl md:text-5xl text-balance">
            Building lasting partnerships, one project at a time.
          </h3>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border-b border-background/40 pb-1 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            Start a conversation <span>→</span>
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-background/50">Studio</p>
          <address className="mt-6 not-italic text-background/80 text-sm leading-relaxed">
            6 Greatorex Street<br />
            Clifton Trade Centre, 1st Floor<br />
            Unit 10, London E1 5NF
          </address>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.3em] text-background/50">Contact</p>
          <ul className="mt-6 space-y-2 text-sm text-background/80">
            <li><a href="tel:02034321190" className="hover:text-accent">020 3432 1190</a></li>
            <li><a href="tel:07969338742" className="hover:text-accent">079 6933 8742</a></li>
            <li>
              <a href="mailto:info@constructionandletting.com" className="hover:text-accent break-all">
                info@constructionandletting.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.3em] text-background/50">Sitemap</p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/projects", "Work"],
              ["/contact", "Contact"],
            ].map(([to, l]) => (
              <li key={to}>
                <Link to={to} className="text-background/80 hover:text-accent">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="container-edge py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Construction & Letting Ltd. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Crafted in London</p>
        </div>
      </div>
    </footer>
  );
}
