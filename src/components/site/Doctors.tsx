import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { doctors } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Doctors() {
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Meet the consultants"
          title={
            <>
              Senior clinicians,
              <span className="italic text-teal"> personally</span> yours.
            </>
          }
          description="Every consultant at Aurevia is Royal College certified with a minimum of ten years of specialist practice."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <motion.li
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <div className="aspect-[4/5] w-full overflow-hidden bg-mist">
                  <img
                    src={d.image}
                    alt={`Portrait of ${d.name}, ${d.role}`}
                    loading="lazy"
                    width={900}
                    height={1125}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--navy) 75%, transparent))",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                  <h3 className="font-display text-lg leading-tight text-white">
                    {d.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/80">{d.role}</p>
                  <div className="mt-4 flex items-center gap-3 opacity-100 md:opacity-0 transition duration-500 md:group-hover:opacity-100">
                    <a
                      href="#"
                      aria-label={`${d.name} on LinkedIn`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25"
                    >
                      <Linkedin className="h-4 w-4 text-white" aria-hidden />
                    </a>
                    <a
                      href="#"
                      aria-label={`${d.name} on Twitter`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25"
                    >
                      <Twitter className="h-4 w-4 text-white" aria-hidden />
                    </a>
                    <a
                      href="#"
                      aria-label={`${d.name} personal site`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25"
                    >
                      <Globe className="h-4 w-4 text-white" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
              <dl className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <div>
                  <dt className="sr-only">Experience</dt>
                  <dd>{d.experience} experience</dd>
                </div>
                <div className="text-right">
                  <dt className="sr-only">Languages</dt>
                  <dd className="truncate">{d.languages}</dd>
                </div>
              </dl>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
