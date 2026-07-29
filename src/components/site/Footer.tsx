import { useState, type FormEvent } from "react";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [emailError, setEmailError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    setEmailError("Please enter a valid email address.");
    return;
  }

  setEmailError("");
  setOk(true);
  setEmail("");
};

  return (
    <footer className="border-t border-border bg-background py-14 md:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="#top" className="flex items-center gap-2">
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-primary-foreground"
              style={{ background: "var(--navy)" }}
              aria-hidden
            >
              <span className="font-display text-lg leading-none">A</span>
            </span>
            <span className="font-display text-lg text-navy">
              Aurevia <span className="text-teal">Health</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A consultant-led private clinic in Marylebone offering eight specialties, in-house diagnostics, and unhurried, personal care.
          </p>

          <form onSubmit={submit} className="mt-6 max-w-md">
            <label htmlFor="newsletter" className="text-xs uppercase tracking-widest text-muted-foreground">
              The Aurevia Journal · quarterly
            </label>
            <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-2 rounded-full border border-border bg-card p-1.5">
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-w-0 rounded-full bg-transparent px-4 py-2 text-sm text-navy placeholder:text-muted-foreground/70 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary-foreground transition hover:opacity-90"
                style={{ background: "var(--navy)" }}
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
              {ok && (
              <p className="mt-2 text-xs text-teal" role="status">
               Thank you — you&rsquo;re on the list.
              </p>
           )}

             {emailError && (
               <p className="mt-2 text-xs text-destructive" role="alert">
                  {emailError}
               </p>
          )}
          </form>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm text-navy">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-teal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Clinic
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-navy">
            <p>14 Wigmore Place</p>
            <p>Marylebone, London W1U 2RS</p>
            <p>
              <a href="tel:+442079460114" className="transition hover:text-teal">
                +44 20 7946 0114
              </a>
            </p>
            <p>
              <a href="mailto:hello@aureviahealth.co.uk" className="transition hover:text-teal">
                hello@aureviahealth.co.uk
              </a>
            </p>
          </address>

          <div className="mt-6 flex items-center gap-3">
            {[
            { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Twitter, label: "Twitter", href: "https://twitter.com" },

            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Aurevia Health on ${s.label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy transition hover:bg-mist"
              >
                <s.icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Aurevia Health. Registered in England &amp; Wales.</p>
        <ul className="flex flex-wrap items-center gap-4">
          <li><a href="#" className="transition hover:text-navy">Privacy</a></li>
          <li><a href="#" className="transition hover:text-navy">Terms</a></li>
          <li><a href="#" className="transition hover:text-navy">Accessibility</a></li>
        </ul>
      </div>
    </footer>
  );
}
