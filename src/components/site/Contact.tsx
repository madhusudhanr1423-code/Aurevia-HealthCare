import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, PhoneCall } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: MapPin, label: "Address", value: "14 Wigmore Place, Marylebone, London W1U 2RS" },
  { icon: Phone, label: "Reception", value: "+44 20 7946 0114" },
  { icon: Mail, label: "Email", value: "hello@aureviahealth.co.uk" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 07:00–20:00 · Sun by appointment" },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "var(--mist)" }}>
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Visit us"
            title={
              <>
                A quiet address, in the
                <span className="italic text-teal"> heart</span> of Marylebone.
              </>
            }
          />
          <ul className="mt-8 grid gap-4">
            {items.map((it) => (
              <li
                key={it.label}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl border border-border bg-card p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-teal">
                  <it.icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {it.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-navy">
                    {it.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <motion.a
            href="tel:+442079460911"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex items-center gap-4 rounded-3xl p-5 text-primary-foreground shadow-elegant"
            style={{
              background:
                "linear-gradient(135deg, var(--navy), color-mix(in oklab, var(--navy) 60%, var(--teal)))",
            }}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15">
              <PhoneCall className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-white/70">
                24/7 Emergency care line
              </span>
              <span className="block truncate font-display text-lg">
                +44 20 7946 0911
              </span>
            </span>
          </motion.a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-soft sm:aspect-[16/10] lg:aspect-[5/4]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
              alt="Map view of Marylebone showing the Aurevia Health clinic location"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--navy) 55%, transparent))",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-background/95 p-4 backdrop-blur sm:left-6 sm:bottom-6 sm:right-auto sm:max-w-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-teal">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-navy">Aurevia Health</p>
                <p className="truncate text-xs text-muted-foreground">
                  14 Wigmore Place, London W1U 2RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
